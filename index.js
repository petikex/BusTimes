const apiRequest = require('./apiRequest');
const parseJson = require('./parseJSON');
const express = require('express')
const log = require('./Log')
const postcodeAPI = require('./postcodeAPI');
const response = require('./response')
const TFLFunctions = require('./TFLFunctions');

const app = express()
app.use(express.static('frontend'));

// The closest bus stops API
app.get('/departureBoards/:postcode', function (req, res) {
    const postcode = req.params.postcode;
    
    // Format check for postcde
    if ((postcode.length !== 7) || (postcode[3] !== ' ')) {
        response.sendResponse(400, res, 'Wrong postcode format. Please use: XXX YYY');
        log.logger.error('Invalid postcode format!');
        return;
    }
    
    // Get postcode location
    postcodePromise = postcodeAPI.getPostCode(req.params.postcode);
    postcodePromise.then(x => {
        log.logger.info('Communication established with postcodes.io');
        const [long, lat] = parseJson.getLongLat(x);
        getNearbyBusStops(long, lat, res);
    });
})


// Returns the closest two bus stops to lat long
app.get('./busStopsByLatLong/:lat/:long', function (req, res) {
    const [lat, long] = [req.params.lat, req.params.long];
    getNearbyBusStops(long, lat, res);
});


app.listen(3000, () => {console.log('BusTimes app listening on 3000!');
                        log.logger.info('Application listeting on port 3000');});


// Looks for the two nearest bus stops
function getNearbyBusStops(long, lat, res) {

    // Checking for valid long, lat
    if ((long === undefined) || (lat === undefined)) {
        response.sendResponse(404, res, 'Could not find postcode location');
        return;
    }

    // Getting the nearest bus stops
    const tflPromise = TFLFunctions.getBusStopsInRadius(lat, long);
    tflPromise.then(x => {
        try{
            const busStops = TFLFunctions.parseBusStops(x);
            TFLFunctions.displayBusStopsInRadius(busStops, res);
        } catch (err) {

            // If an error occured while processing data
            log.logger.err(err.msg);
            response.sendResponse(err.code, res, err.msg);
        }
    });
   
}
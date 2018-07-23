const apiRequest = require('./apiRequest');
const parseJson = require('./parseJSON');
const express = require('express')
const log = require('./Log')
const postcdeAPI = require('./postcodeAPI');

const app = express()
app.use(express.static('frontend'));

const applicationID = '7d555bb6';
const applicationKeys = '40b776fcf10d513512447b74ca506f48';

// The closest bus stops API
app.get('/departureBoards/:postcode', function (req, res) {
    const postcode = req.params.postcode;
    
    // Format check for postcde
    if ((postcode.length !== 7) || (postcode[3] !== ' ')) {
        response(400, res, 'Wrong postcode format. Please use: XXX YYY');
        log.logger.error('Invalid postcode format!');
        return;
    }
    
    // Get postcode location
    postcodePromise = postcodeAPI.locateByPostCode(req.params.postcode, res);
    postcodePromise.then(x => {
        log.logger.info('Communication established with postcodes.io');
        mainFunction(x, res);
    });
})

function locateByPostCode(postcode, res) {
    const url = `http://api.postcodes.io/postcodes/${postcode}`;
    log.logger.info(`Gathering data about postcode ${postcode} from postcodes.io`);
    const urlPromise = apiRequest.loadURL(url);
    urlPromise.then(x => 
        {
            log.logger.info('Communication established with postcodes.io');
            mainFunction(x, res);
        })
}

function mainFunction(htmlString, res) {
    const [long, lat] = parseJson.getLongLat(htmlString);

    // Checking for valid long, lat
    if ((long === undefined) || (lat === undefined)) {
        response(404, res, 'Could not find postcode location');
        return;
    }

    const tflURL = `https://api.tfl.gov.uk/Stoppoint?lat=${lat}&lon=${long}&stoptypes=NaptanPublicBusCoachTram&app_id=${applicationID}&app_key=${applicationKeys}`;
    const tflPromise = apiRequest.loadURL(tflURL);
    tflPromise.then(x => getBusStopsInRadius(x, res))
   
}

function getBusStopsInRadius(htmlString, res) {
    busStopsJson = JSON.parse(htmlString);

    if ((busStopsJson.stopPoints.length < 1) || (busStopsJson.stopPoints === undefined)){
        response(404, res, 'No bus stops found nearby');
        return;
    }
    log.logger.info('Gathering data from the tdfl.api');
    const stopPromises = [];

    const stopURL1 = `https://api.tfl.gov.uk/StopPoint/${busStopsJson.stopPoints[0].id}/arrivals`;
    stopPromises.push(apiRequest.loadURL(stopURL1));

    if (busStopsJson.stopPoints.length > 1) {
        const stopURL2 = `https://api.tfl.gov.uk/StopPoint/${busStopsJson.stopPoints[1].id}/arrivals`;
        stopPromises.push(apiRequest.loadURL(stopURL2));
    }

    Promise.all(stopPromises).then(function(values) {
        const responses = [{'status': 200}];

        values.forEach(html => {
            const currentStop = parseJson.parseBusStops(html);
            responses.push(currentStop.getThisObject());
        });

        res.send(responses);
    })
    
}

/*function getBusesByStop(stopID) {

    const stopURL = `https://api.tfl.gov.uk/StopPoint/${stopID}/arrivals`;
    const stopPromise = apiRequest.loadURL(stopURL);
    stopPromise.then(x => {
        const currentStop = parseJson.parseBusStops(x);
        currentStop.displayBuses(2);
    });

}*/

function response(errorCode, res, msg) {
    res.send([{'status': errorCode}, {'error': msg}]);
}

app.listen(3000, () => {console.log('BusTimes app listening on 3000!');
                        log.logger.info('Application listeting on port 3000');});

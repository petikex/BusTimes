const apiRequest = require('./apiRequest');
const parseJson = require('./parseJSON');
const express = require('express')
const app = express()
const applicationID = '7d555bb6';
const applicationKeys = '40b776fcf10d513512447b74ca506f48';

app.get('/departureBoards/:postcode', function (req, res) {
    const postcode = req.params.postcode;

    // Format check for postcde
    if ((postcode.length !== 9) || (postcode.substr(3, 6) !== '%20')) {
        res.send('Wrong postcode format. Please use: XXX YYY');
        return;
    }
    
    locateByPostCode(req.params.postcode, res);
})

function locateByPostCode(postcode, res) {
    const url = `http://api.postcodes.io/postcodes/${postcode}`;
    const urlPromise = apiRequest.loadURL(url);
    urlPromise.then(x => mainFunction(x, res));
}

function mainFunction(htmlString, res) {
    const [long, lat] = parseJson.getLongLat(htmlString);

    // Checking for valid long, lat
    if ((long === undefined) || (lat === undefined)) {
        res.send('Could not find postcode location');
        return;
    }

    const tflURL = `https://api.tfl.gov.uk/Stoppoint?lat=${lat}&lon=${long}&stoptypes=NaptanPublicBusCoachTram&app_id=${applicationID}&app_key=${applicationKeys}`;
    const tflPromise = apiRequest.loadURL(tflURL);
    tflPromise.then(x => getBusStopsInRadius(x, res))
   
}

function getBusStopsInRadius(htmlString, res) {
    busStopsJson = JSON.parse(htmlString);

    if ((busStopsJson.stopPoints.length < 1) || (busStopsJson.stopPoints === undefined)){
        res.send('No bus stops found');
    }

    const stopPromises = [];

    const stopURL1 = `https://api.tfl.gov.uk/StopPoint/${busStopsJson.stopPoints[0].id}/arrivals`;
    stopPromises.push(apiRequest.loadURL(stopURL1));

    if (busStopsJson.stopPoints > 1) {
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

function getBusesByStop(stopID) {

    const stopURL = `https://api.tfl.gov.uk/StopPoint/${stopID}/arrivals`;
    const stopPromise = apiRequest.loadURL(stopURL);
    stopPromise.then(x => {
        const currentStop = parseJson.parseBusStops(x);
        currentStop.displayBuses(2);
    });

}

app.listen(3000, () => console.log('Example app listening on port 3000!'))
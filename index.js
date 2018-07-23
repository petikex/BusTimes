const apiRequest = require('./apiRequest');
const parseJson = require('./parseJSON');
const express = require('express')
const app = express()
const applicationID = '7d555bb6';
const applicationKeys = '40b776fcf10d513512447b74ca506f48';
const log = require('./Log')

app.get('/departureBoards/:postcode', function (req, res) {
    locateByPostCode(req.params.postcode, res);
})

function locateByPostCode(postcode, res) {
    const url = `http://api.postcodes.io/postcodes/${postcode}`;
    const urlPromise = apiRequest.loadURL(url);
    urlPromise.then(x => mainFunction(x, res));
}

function mainFunction(htmlString, res) {
    const [long, lat] = parseJson.getLongLat(htmlString);
    const tflURL = `https://api.tfl.gov.uk/Stoppoint?lat=${lat}&lon=${long}&stoptypes=NaptanPublicBusCoachTram&app_id=${applicationID}&app_key=${applicationKeys}`;
    const tflPromise = apiRequest.loadURL(tflURL);
    tflPromise.then(x => getBusStopsInRadius(x, res))
   
}

function getBusStopsInRadius(htmlString, res) {
    busStopsJson = JSON.parse(htmlString);

    const stopURL1 = `https://api.tfl.gov.uk/StopPoint/${busStopsJson.stopPoints[0].id}/arrivals`;
    const stopPromise1 = apiRequest.loadURL(stopURL1);
    const stopURL2 = `https://api.tfl.gov.uk/StopPoint/${busStopsJson.stopPoints[1].id}/arrivals`;
    const stopPromise2 = apiRequest.loadURL(stopURL2);

    Promise.all([stopPromise1, stopPromise2]).then(function(values) {
        const [html0, html1] = values;
        const currentStop0 = parseJson.parseBusStops(html0);
        const currentStop1 = parseJson.parseBusStops(html1);
        res.send([currentStop0.getThisObject(), currentStop1.getThisObject()]);
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

app.listen(3000, () => {console.log('BusTimes app listening on 3000!');
                        log.logger.info('Application listeting on port 3000');})
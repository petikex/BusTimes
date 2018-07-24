const apiRequest = require('./apiRequest');

const applicationID = '7d555bb6';
const applicationKeys = '40b776fcf10d513512447b74ca506f48';

function getBusStopsInRadius(lat, long) {
    // Getting the nearest bus stops
    const tflURL = `https://api.tfl.gov.uk/Stoppoint?lat=${lat}&lon=${long}&stoptypes=NaptanPublicBusCoachTram&app_id=${applicationID}&app_key=${applicationKeys}`;
    return apiRequest.loadURL(tflURL);
}


// Returns the ID of bus stops
function parseBusStops(htmlString) {
    busStopsJson = JSON.parse(htmlString);

    if ((busStopsJson.stopPoints.length < 1) || (busStopsJson.stopPoints === undefined)){
        response.sendResponse(404, res, 'No bus stops found nearby');
        return;
    }

    // Interested in only the first two stops
    return busStops.stopPoints.slice(0, 2);
    
}

function displayBusStopsInRadius(busStops, res) {
    
    // Sanity check for input
    if (!busStops) {
        res.send(response.sendResponse(404, res, 'No bus stops found nearby'));
        return;
    }

    // Getting bus stop data (promises)
    log.logger.info('Gathering data from the tfl.api');
    const stopPromises = requiredStops.map(x => TFLFunctions.getBusStopById);
        
    // Waiting for all the response to come in
    Promise.all(stopPromises).then(function(values) {
        const responses = [{'status': 200}];
    
        values.forEach(html => {
            const currentStop = parseJson.parseBusStops(html);
            responses.push(currentStop.getThisObject());
        });
    
        res.send(responses);
    });
    
}

function getBusStopById(stopID) {
    const tflURL = `https://api.tfl.gov.uk/StopPoint/${stopID}/arrivals`;
    return apiRequest.loadURL(tflURL);
}

module.exports = {getBusStopsInRadius, parseBusStops, getBusStopById}
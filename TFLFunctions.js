const apiRequest = require('./apiRequest');
const log = require('./Log');
const BusStopLib = require('./BusStop');
const parseJson = require('./parseJSON');

const applicationID = '7d555bb6';
const applicationKeys = '40b776fcf10d513512447b74ca506f48';

function getBusStopsInRadius(lat, long) {
    // Getting the nearest bus stops
    const tflURL = `https://api.tfl.gov.uk/Stoppoint?lat=${lat}&lon=${long}&stoptypes=NaptanPublicBusCoachTram&app_id=${applicationID}&app_key=${applicationKeys}`;
    log.logger.debug(`Requesting ${tflURL}`);
    return apiRequest.loadURL(tflURL);
}


// Returns the ID of bus stops
function parseBusStops(htmlString) {
    busStopsJson = JSON.parse(htmlString);

    if ((busStopsJson.stopPoints.length < 1) || (busStopsJson.stopPoints === undefined)){
        response.sendResponse(404, res, 'No bus stops found nearby');
        return;
    }

    // Creating BusStop objects
    const busStops = busStopsJson.stopPoints.map(rawStop => {
        const currentStop = new BusStopLib.BusStop(rawStop.id, rawStop.commonName);
        currentStop.addLocation(rawStop.lat, rawStop.lon);
        return currentStop;
    });

    // Interested in only the first two stops
    return busStops.slice(0, 2);
    
}

function displayBusStopsInRadius(busStops, res) {
    
    // Sanity check for input
    if (!busStops) {
        res.send(response.sendResponse(404, res, 'No bus stops found nearby'));
        return;
    }

    // Getting bus stop data (promises)
    log.logger.info('Gathering data from the tfl.api');
    log.logger.debug('BusStops: ')
    log.logger.debug(busStops);
    const stopPromises = busStops.map(busStop => {

        // Querrying arriving buses
        const newStopPromise = getBusStopById(busStop.stopId);

        // Adding arriving buses to BusStopObject
        newStopPromise.then(htmlResponse => {
            parseJson.parseBusStop(busStop, htmlResponse);
        })
        return newStopPromise;
    });
            
    // Waiting for all the response to come in => these updates busStops
    // Results have already been parsed individually
    log.logger.debug(stopPromises);
    Promise.all(stopPromises).then(function(values) {
        console.log(busStops);
        const responses = [{'status': 200}];
    
        busStops.forEach(busStop => {
            responses.push(busStop.getThisObject());
        });
    
        res.send(responses);
    });
    
}

function getBusStopById(stopId) {
    const tflURL = `https://api.tfl.gov.uk/StopPoint/${stopId}/arrivals?app_id=${applicationID}&app_key=${applicationKeys}`;
    log.logger.debug(`Requesting ${tflURL}`);
    const newPromise = apiRequest.loadURL(tflURL);
    log.logger.debug('New promise created: ');
    log.logger.debug(newPromise);
    return newPromise;
}

// A little helper function
function zip(arrays) {
    return arrays[0].map(function(_,i){
        return arrays.map(function(array){return array[i]})
    });
}


module.exports = {getBusStopsInRadius, parseBusStops, getBusStopById, displayBusStopsInRadius}
"use strict"

const apiRequest = require('./apiRequest');
const log = require('./Log');
const BusStopLib = require('./BusStop');
const parseJson = require('./parseJSON');
const response = require('./response');

const applicationID = '7d555bb6';
const applicationKeys = '40b776fcf10d513512447b74ca506f48';

// Returns a promise with the nearest BusStops
function getBusStopsInRadius(lat, long) {
    // Getting the nearest bus stops
    const tflURL = `https://api.tfl.gov.uk/Stoppoint?lat=${lat}&lon=${long}&stoptypes=NaptanPublicBusCoachTram&app_id=${applicationID}&app_key=${applicationKeys}`;
    log.logger.debug(`Requesting ${tflURL}`);
    return apiRequest.loadURL(tflURL);
}


// Returns the first two BusStop objects
function parseBusStops(htmlString) {
    const busStopsJson = JSON.parse(htmlString);

    if ((busStopsJson.stopPoints.length < 1) || (busStopsJson.stopPoints === undefined)){
        throw {code: 404, msg: 'No bus stops found nearby'};
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

// Sends back the nearest BusStops
function displayBusStopsInRadius(busStops, res) {
    
    // Sanity check for input
    if (!busStops) {
        res.send(response.sendResponse(404, res, 'No bus stops found nearby'));
        return;
    }

    // Getting bus stop data (promises)
    log.logger.debug('Starting querying the arrivals to bus stops');
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
    // Only need to send the answer
    Promise.all(stopPromises).then(function() {
        const responses = [{'status': 200}];
    
        busStops.forEach(busStop => {
            responses.push(busStop.getThisObject());
        });
    
        res.send(responses);
    });
    
}

// Returns a new promise with content of response to StopPoint arrivlas api
function getBusStopById(stopId) {
    const tflURL = `https://api.tfl.gov.uk/StopPoint/${stopId}/arrivals?app_id=${applicationID}&app_key=${applicationKeys}`;
    log.logger.debug(`Requesting arrivals to stop ${stopId}`);
    const newPromise = apiRequest.loadURL(tflURL);
    return newPromise;
}

module.exports = {getBusStopsInRadius, parseBusStops, getBusStopById, displayBusStopsInRadius}
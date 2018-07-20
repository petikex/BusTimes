const bus = require('./Bus');
const busStop = require('./BusStop');


function parseBusStops(htmlString) {
    const jsonBusStops = JSON.parse(htmlString);
    jsonBusStops.sort(function(a, b) {
        if (a.expectedArrival < b.expectedArrival) return -1;
        return 1;
    });
    const stationName = jsonBusStops[0].stationName;
    const currentStop = new busStop.BusStop(stationName);
    
    for (let i = 0; i<jsonBusStops.length; i++) {
        currentStop.addBus(new bus.Bus(jsonBusStops[i].lineId,jsonBusStops[i].expectedArrival,jsonBusStops[i].destinationName));
    }

    return currentStop;
}

function getLongLat(htmlString) {
    const jsonPostcodes = JSON.parse(htmlString);
    return [jsonPostcodes.result.longitude, jsonPostcodes.result.latitude];
}

module.exports = {parseBusStops, getLongLat}

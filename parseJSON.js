const bus = require('./Bus');

// Parse TfL's arriving buses response
function parseBusStop(busStop, htmlString) {
    const jsonArriving = JSON.parse(htmlString);

    // Sorting the buses according to arrival time
    jsonArriving.sort(function(a, b) {
        if (a.expectedArrival < b.expectedArrival) return -1;
        return 1;
    });
    
    jsonArriving.forEach(arrivingBus => {
        busStop.addBus(new bus.Bus(arrivingBus.lineId, arrivingBus.expectedArrival, arrivingBus.destinationName));
    });

}

// Parse postcode.io's incoming html
function getLongLat(htmlString) {
    const jsonPostcodes = JSON.parse(htmlString);
    return [jsonPostcodes.result.longitude, jsonPostcodes.result.latitude];
}

module.exports = {parseBusStop, getLongLat}

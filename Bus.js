const moment = require('Moment');

class Bus {
    constructor(lineId, expectedArrival, destination) {
        this.lineId = lineId;
        this.expectedArrival = moment(expectedArrival).format('HH:mm:ss');
        this.destination = destination;
    }
    logBusInfo() {
        console.log(`Bus ${this.lineId} will arrive at ${this.expectedArrival} (Heading torwards ${this.destination}) `);
    }
}


module.exports = {Bus}
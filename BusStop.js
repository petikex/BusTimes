const Bus = require('./Bus')


class BusStop {
    constructor(stopName) {
        this.stopName = stopName;
        this.buses = [];
        this.lat;
        this.long;
    }
    
    addLocation(lat, long) {
        this.lat = lat;
        this.long = long;
    }

    addBus(bus) {
        this.buses.push(bus);
    }
    displayBuses(limit = 5) {
        console.log(`Buses arriving to stop ${this.stopName}`);
        for (let i = 0; i<min(this.buses.length,limit); i++) {
            this.buses[i].logBusInfo();
        }
    }
    getBuses(limit = 5){
        return this.buses.slice(0, limit);
    }

    getThisObject(limit = 5) {
        const tmpBusStop = new BusStop(this.stopName);
        tmpBusStop.buses = this.getBuses(limit);
        tmpBusStop.setLocation(this.lat, this.long);
        return tmpBusStop;
    }
}

function min(a, b) {
    if (a < b) return a;
    return b;
} 

module.exports = {BusStop}
"use strict"
const Bus = require('./Bus')

class BusStop {
    constructor(stopId, stopName) {
        this.stopName = stopName;
        this.buses = [];
        this.lat;
        this.long;
        this.stopId = stopId;
    }
    
    addLocation(lat, long) {
        this.lat = lat;
        this.long = long;
    }

    // Adds a single bus
    addBus(bus) {
        this.buses.push(bus);
    }

    // Displays on the console
    displayBuses(limit = 5) {
        console.log(`Buses arriving to stop ${this.stopName}`);
        for (let i = 0; i<min(this.buses.length,limit); i++) {
            this.buses[i].logBusInfo();
        }
    }

    // Returns a list of Bus objects
    getBuses(limit = 5){
        return this.buses.slice(0, limit);
    }

    // Returns a copy of this object
    getThisObject(limit = 5) {
        const tmpBusStop = new BusStop(this.stopId, this.stopName);
        tmpBusStop.buses = this.getBuses(limit);
        tmpBusStop.addLocation(this.lat, this.long);
        return tmpBusStop;
    }
}

// Little helper function
function min(a, b) {
    if (a < b) return a;
    return b;
} 

module.exports = {BusStop}
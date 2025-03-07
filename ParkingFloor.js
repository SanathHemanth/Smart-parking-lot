const ParkingSpot = require('./parkingSpot');

class ParkingFloor{
    constructor(floorName){
        this.floorName = floorName;
        this.spots = [];
    }

    addSpot(spot){
        this.spots.push(spot);
    }

    getAvailableSpot(){
        for(let spot of this.spots){
            if(!spot.isOccupied){
                return spot;
            }
        }
        return null;
    }

    isFull(){
        return this.spots.every(spot => spot.isOccupied);
    }

    getFloorName(){
        return this.floorName;
    }

}

module.export = ParkingFloor;
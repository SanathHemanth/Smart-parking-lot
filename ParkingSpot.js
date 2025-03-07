class ParkingSpot{
    constructor(spotname,spotType){
        this.spotName = spotName;
        this.spotType = spotType;
        this.occupied = false;
        this.vehicle = null;
    }

    isOccupied(){
        return this.occupied;
    }

    parkVehicle(vehicle){
        this.occupied = true;
        this.vehicle = vehicle;
    }

    removeVehicle(){
        this.occupied = false;
        this.vehicle = null;
    }

    getSpotType(){
        return this.spotType;
    }

    getSpotName(){
        return this.spotName;
    }

    getVehicle(){
        return this.vehicle;
    }
}

module.exports = ParkingSpot;
class vehicle{
    constructor(vehicleId,vehicleType){
        this.vehicleId = vehicleId;
        this.vehicleType = vehicleType;
    }

    getVehicleId(){
        return this.VehicleId;
    }

    getVehicleType(){
        return this.vehicleType;
    }
}

module.exports = vehicle;

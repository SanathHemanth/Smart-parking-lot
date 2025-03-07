
class ParkingLot{

    constructor(parkingLotId,Name,Address,floorCount,entryPanel,exitPanel){
        this.parkingLotId = parkingLotId;
        this.Name = Name;
        this.Address = Address;
        this.floorCount = floorCount;
        this.parkingFloors = [];
        this.entryPanel = entryPanel;
        this.exitPanel = exitPanel;
    }

    isFull(){
        return this.parkingFloors.every(floor=> this.isFull());
    }
    
    addParkingFloor(Floor){
        this.parkingFloors.push(Floor);
    }

    parkVehicle(vehicle){
        const parkingFloor = this.entryPanel.computeFloorToBeParkedOn(this.parkingFloors,vehicle.getVehicleType());
        const ticket = this.entryPanel.generateParkingTicket(vehicle,parkingFloor);
        console.log(`vehicle parked : ${ticket.getTicketId()}`);
        
    }
}
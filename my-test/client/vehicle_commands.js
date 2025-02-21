// TODO Figure out how to remove the vehicle on here.

addCommandHandler("removeveh", function(command, text) {
	let player = localPlayer;
	let tempCar = 0;
	let isInVehicle = natives.isCharInAnyCar(player);


    if(isInVehicle){
        let vehicle = natives.storeCarCharIsInNoSave(player, tempCar);
        natives.deleteCar(vehicle);
    }
});
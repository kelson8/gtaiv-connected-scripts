
// let car1posX = -559.5;
// let car1posY = 1139.4;
// let car1posZ = 10.1;

// addCommandHandler("createcar", function(command, text, client) {
addCommandHandler("createcar", function(command, text) {
		// console.log("Test");
		// https://wiki.gtaconnected.com/Resources/GTASA/VehicleModels
		// https://wiki.gtaconnected.com/gta.createVehicle
		// 
		


		// let player = client.player;
		// let playerPos = client.player.position;
		// Add 3 to the X and Y.
		// let vehicleSpawnPos = [playerPos.x + 3, playerPos.y + 3, playerPos.z];
		let vehicleSpawnPos = [car1posX, car1posY, car1posZ];


		// Create the vehicle
		// var vehicle = gta.createVehicle(415, vehicleSpawnPos);
		// Infernus GTA 4
		// https://wiki.gtaconnected.com/Resources/GTAIV/VehicleModels
		// This complains in gta 4, says Cannot randomise car colour 418536135!
		let infernus = 418536135
		// var vehicle = gta.createVehicle(infernus, vehicleSpawnPos);
		natives.createCar(infernus, vehicleSpawnPos, 1);
		// addToWorld(vehicle);

		// Warp the player into the vehicle
		// player.warpIntoVehicle(vehicle, 0);
});
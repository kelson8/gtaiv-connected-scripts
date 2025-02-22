///////////////
// Warps
///////////////


// TODO Figure out how to change the spawn point for party modes.

// Taken from v-sandbox
addCommandHandler("goto", function (command, text) {

	let splitText = text.split(" ");
	let positionX = Number(splitText[0].replace(",", ""));
	let positionY = Number(splitText[1].replace(",", ""));
	let positionZ = Number(splitText[2].replace(",", ""));

	if (localPlayer.vehicle != null) {
		localPlayer.vehicle.velocity = new Vec3(0.0, 0.0, 0.0);
		localPlayer.vehicle.turnVelocity = new Vec3(0.0, 0.0, 0.0);
		localPlayer.vehicle.position = new Vec3(positionX, positionY, positionZ);
	} else {
		localPlayer.velocity = new Vec3(0.0, 0.0, 0.0);
		localPlayer.turnVelocity = new Vec3(0.0, 0.0, 0.0);
		localPlayer.position = new Vec3(positionX, positionY, positionZ);
	}
})


/*
TODO Adapt this for the below code, I wonder how to check for 
	if (localPlayer.vehicle != null) {
		localPlayer.vehicle.velocity = new Vec3(0.0, 0.0, 0.0);
		localPlayer.vehicle.turnVelocity = new Vec3(0.0, 0.0, 0.0);
		localPlayer.vehicle.position = new Vec3(positionX, positionY, positionZ);
	} else {
		localPlayer.velocity = new Vec3(0.0, 0.0, 0.0);
		localPlayer.turnVelocity = new Vec3(0.0, 0.0, 0.0);
		localPlayer.position = new Vec3(positionX, positionY, positionZ);
	}
*/

/*


	let isInVehicle = natives.isCharInAnyCar(player);


    if(isInVehicle){
        let vehicle = natives.storeCarCharIsInNoSave(player, tempCar);
        natives.deleteCar(vehicle);
    }
*/

// TODO Move this
function isPlayerInVehicle(){
	let isInVehicle = natives.isCharInAnyCar(player);

	return isInVehicle;
}

// Position should be a vector3
// I finally figured this out.
// Warp the player and vehicle if they are in a vehicle.
// This fades the screen out and back in.
function warpPlayerVehicle(posX, posY, posZ){
	let warpCharFromCarToCoord = natives.warpCharFromCarToCoord;
	let getCarCharIsUsing = natives.getCarCharIsUsing;

	// I had these reversed, I need to do "doScreenFadeOut" first then run "doScreenFadeIn"
	let doScreenFadeOut = natives.doScreenFadeOut;
	let doScreenFadeIn = natives.doScreenFadeIn;
	
	let setCarCoordinates = natives.setCarCoordinates;
	let tempCar = 0;
	let player = localPlayer;

	if(isPlayerInVehicle()){
		// let vehicle = natives.storeCarCharIsInNoSave(player, tempCar);
		let vehicle = getCarCharIsUsing(player, tempCar);
		// warpCharFromCarToCoord(player, vehicle, position);
		// Well this forces the player out of the vehicle and warps, hmm, could be useful for something.
		// How could I teleport the vehicle?
		// warpCharFromCarToCoord(player, position, vehicle);
		doScreenFadeOut(500);	
		setCarCoordinates(vehicle, posX, posY, posZ);
		doScreenFadeIn(500);
	}
}

// Teleport player with a fade in option
function warpPlayerFadeIn(posX, posY, posZ){
	let doScreenFadeOut = natives.doScreenFadeOut;
	let doScreenFadeIn = natives.doScreenFadeIn;
	let loadScene = natives.loadScene;

	let requestCollisionAtPosn = natives.requestCollisionAtPosn;
	
	doScreenFadeOut(1000);
	// This seems to work.
	requestCollisionAtPosn([posX, posY, posZ]);
	player.position = [posX, posY, posZ];
	// This seems to freeze the game for a second, TODO Fix this to work, it should fix the map taking a second to load in.
	// loadScene([posX, posY, posZ]);


	doScreenFadeIn(1000);
}

function teleportPlayer(teleportLocation){
	switch (teleportLocation) {

		// Spawn, at party mode spawn.
		case "spawn":
			if(isPlayerInVehicle()){
				warpPlayerVehicle(spawnPosX, spawnPosY, spawnPosZ);
			} else {
				warpPlayerFadeIn(spawnPosX, spawnPosY, spawnPosZ);
			}
			break;

		// Parking lot #1
		case "test1":
			if(isPlayerInVehicle()){
				warpPlayerVehicle(car1posX + 3, car1posY + 3, car1posZ);
			} else {
				// player.position = [car1posX + 3, car1posY + 3, car1posZ];
				warpPlayerFadeIn(car1posX + 3, car1posY + 3, car1posZ);
			}
			
			// message("You have been teleported to parking lot #1.");
			break;
		case "garage1":
			if(isPlayerInVehicle()){
				warpPlayerVehicle(garage1PosX, garage1PosY, garage1PosZ);
			} else {
				// player.position = [garage1PosX, garage1PosY, garage1PosZ];
				warpPlayerFadeIn(garage1PosX, garage1PosY, garage1PosZ);
			}
			break;

        case "airport1":
			if(isPlayerInVehicle()){
				warpPlayerVehicle(airport1PosX, airport1PosY, airport1PosZ);
			} else {
				// player.position = [airport1PosX, airport1PosY, airport1PosZ];
				warpPlayerFadeIn(airport1PosX, airport1PosY, airport1PosZ);
			}			
			break;
	
        case "hospital":
			if(isPlayerInVehicle()){
				warpPlayerVehicle(hospitalPosX, hospitalPosY, hospitalPosZ);
			} else {
            	// player.position = [hospitalPosX, hospitalPosY, hospitalPosZ];
				warpPlayerFadeIn(hospitalPosX, hospitalPosY, hospitalPosZ);
			}
            break;

		// TODO Add these
        // case "prison":
        //    player.position = [hospitalPosX, hospitalPosY, hospitalPosZ];
        // break;

        // Happiness island
        // case "island1":
        //     player.position = [hospitalPosX, hospitalPosY, hospitalPosZ];
        //     break;

        // Happiness island statue
        // case "island1st":
        //     player.position = [hospitalPosX, hospitalPosY, hospitalPosZ];
        //     break;

        // Party mode spawn
		default:
			message("Invalid warp! Warp list: spawn, test1, garage1, airport1, hospital.");
	// }
	}
}

// Moved function for this into teleportPlayer function above.
addCommandHandler("warp", function (command, text) {
	// switch (text) {
		teleportPlayer(text);
	// }
});

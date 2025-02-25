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
function isPlayerInVehicle() {
	if (game.game == GAME_GTA_IV) {
	let isInVehicle = natives.isCharInAnyCar(player);

	return isInVehicle;
	} else {
		message("This only works on GTA IV");
	}

}

// Position should be a vector3
// I finally figured this out.
// Warp the player and vehicle if they are in a vehicle.
// This fades the screen out and back in.
function warpPlayerVehicle(posX, posY, posZ) {
	if (game.game == GAME_GTA_IV) {
		let warpCharFromCarToCoord = natives.warpCharFromCarToCoord;
		let getCarCharIsUsing = natives.getCarCharIsUsing;

		// I had these reversed, I need to do "doScreenFadeOut" first then run "doScreenFadeIn"
		let doScreenFadeOut = natives.doScreenFadeOut;
		let doScreenFadeIn = natives.doScreenFadeIn;

		let setCarCoordinates = natives.setCarCoordinates;
		let tempCar = 0;
		let player = localPlayer;

		if (isPlayerInVehicle()) {
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
	} else {
		message("This only works on GTA IV");
	}

}

// Teleport player with a fade in option
function warpPlayerFadeIn(posX, posY, posZ) {
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

function teleportPlayer(teleportLocation) {
	switch (teleportLocation) {

		// Spawn, at party mode spawn.
		case "spawn":
			if (isPlayerInVehicle()) {
				warpPlayerVehicle(spawnPosX, spawnPosY, spawnPosZ);
			} else {
				warpPlayerFadeIn(spawnPosX, spawnPosY, spawnPosZ);
			}
			break;

		// Parking lot #1
		case "parkinglot1":
			if (isPlayerInVehicle()) {
				warpPlayerVehicle(car1posX + 3, car1posY + 3, car1posZ);
			} else {
				// player.position = [car1posX + 3, car1posY + 3, car1posZ];
				warpPlayerFadeIn(car1posX + 3, car1posY + 3, car1posZ);
			}

			// message("You have been teleported to parking lot #1.");
			break;
		case "garage1":
			if (isPlayerInVehicle()) {
				warpPlayerVehicle(garage1PosX, garage1PosY, garage1PosZ);
			} else {
				// player.position = [garage1PosX, garage1PosY, garage1PosZ];
				warpPlayerFadeIn(garage1PosX, garage1PosY, garage1PosZ);
			}
			break;

		case "airport1":
			if (isPlayerInVehicle()) {
				warpPlayerVehicle(airport1PosX, airport1PosY, airport1PosZ);
			} else {
				// player.position = [airport1PosX, airport1PosY, airport1PosZ];
				warpPlayerFadeIn(airport1PosX, airport1PosY, airport1PosZ);
			}
			break;

		case "hospital":
			if (isPlayerInVehicle()) {
				warpPlayerVehicle(hospitalPosX, hospitalPosY, hospitalPosZ);
			} else {
				warpPlayerFadeIn(hospitalPosX, hospitalPosY, hospitalPosZ);
			}
			break;

		// Inside of the prison
		case "prisonin":
			if (isPlayerInVehicle()) {
				warpPlayerVehicle(prisonInPosX, prisonInPosY, prisonInPosZ);
			} else {
				warpPlayerFadeIn(prisonInPosX, prisonInPosY, prisonInPosZ);
			}
			break;

		// Outside of the prison
		case "prisonout":
			if (isPlayerInVehicle()) {
				warpPlayerVehicle(prisonOutPosX, prisonOutPosY, prisonOutPosZ);
			} else {
				warpPlayerFadeIn(prisonOutPosX, prisonOutPosY, prisonOutPosZ);
			}
			break;

		// Happiness island
		case "island":
			if (isPlayerInVehicle()) {
				warpPlayerVehicle(happinessIslandPosX, happinessIslandPosY, happinessIslandPosZ);
			} else {
				warpPlayerFadeIn(happinessIslandPosX, happinessIslandPosY, happinessIslandPosZ);
			}
			break;

		// Happiness island statue
		case "islandst":
			if (isPlayerInVehicle()) {
				warpPlayerVehicle(happinessIslandStPosX, happinessIslandStPosY, happinessIslandStPosZ);
			} else {
				warpPlayerFadeIn(happinessIslandStPosX, happinessIslandStPosY, happinessIslandStPosZ);
			}
			break;

		// Swingset 1
		case "swings1":
			if (isPlayerInVehicle()) {
				warpPlayerVehicle(swings1PosX, swings1PosY, swings1PosZ);
			} else {
				warpPlayerFadeIn(swings1PosX, swings1PosY, swings1PosZ);
			}
			break;

		default:
			message("Invalid warp! Warp list: spawn, parkinglot1, garage1, airport1, hospital, prisonin, prisonout, swings1.");
		// }
	}
}

// Moved function for this into teleportPlayer function above.
// TODO Move this to using the crossgame_test once I fix it up.
addCommandHandler("warp", function (command, text) {
	if (game.game == GAME_GTA_IV) {
	teleportPlayer(text);
	} else {
		message("This only works on GTA IV");
	}
});


// If none of the values are set, the ped is set to just wander around.
// givePedWeapon bool: If this is true the ped will get a weapon
// doesPedHatePlayer bool: If this is true it will make the ped kill the player
// doesPedEnterVehicle bool: If this is true the ped will enter the vehicle
// TODO Add option (doesPlayerWarpIntoVehicle, bool): If this is true the player will warp into the vehicle
// TODO Test doesPlayerWarpIntoVehicle option

/* TODO Separate these functions out of createPed function
* Driving ped, have them drive the player around, drive to coords, or wander.
* Regular ped, have them wander around, attack the player, attack other peds, 
*/

// This stores the value from the tempCiv
let ped = 0;
// This stores the value from the tempVehicle in the spawn_vehicles file.
let pedVeh = 0;


// This seems to work
// TODO Make my other ped command possibly use this.
// pedModel = model hash
// pedType = 1 or 2, civMale = 1, civFemale = 2;
// x, y, z - Position for the ped
// wanderAround - If this is true, the ped will wander around.
function createPedNew(pedModel, pedType, x, y, z, wanderAround) {
	// Taken idea from v-sandbox in ped.js
	if (game.game == GAME_GTA_IV) {
		let pedPosition = [x, y, z];

		let civMale = 1;
		let civFemale = 2;

		natives.requestModel(pedModel);
		natives.loadAllObjectsNow();

		if (natives.hasModelLoaded(pedModel)) {
			// tempCiv = natives.createChar(civMale, pedModel, [playerX, playerY, playerZ], true);
			tempCiv = natives.createChar(pedType, pedModel, pedPosition, true);
			// Set the ped with the variable from above.
			ped = tempCiv;
		}

		// Check if the ped exists
		if (!tempCiv) {
			message("The ped could not be added!");
			return false;
		}

		// Set their position
		tempCiv.position = pedPosition;

		// Make the ped wander around if this is enabled.
		if (wanderAround) {
			let taskWanderStandard = natives.taskWanderStandard;

			taskWanderStandard(tempCiv);
		}
	} else {
		message("This only works on GTA IV");
	}
}

// TODO Test this
function createVehicleForPed() {
	let player = localPlayer;
	let playerCoords = player.position;

	// https://gtamods.com/wiki/Ped_type
	// https://gtamods.com/wiki/List_of_models_hashes#Peds

	let playerX = playerCoords.x + 3;
	let playerY = playerCoords.y + 3;
	let playerZ = playerCoords.z + 1.5;

	// Taken idea from v-sandbox in ped.js
	if (game.game == GAME_GTA_IV) {
		let civMale = 1;
		// M_Y_DOWNTOWN_01
		let downTownPed1 = 1207402441;
		let taskEnterCarAsDriver = natives.taskEnterCarAsDriver;

		createPedNew(downTownPed1, civMale, playerX, playerY, playerZ, false);

		// Create the vehicle
		createVehicleNative();
		// Make the ped enter the vehicle.
		taskEnterCarAsDriver(ped, tempVehicle);
	} else {
		message("This only works on GTA IV");
	}


}

// 1: pedModel (Model hash {int})
// 2: X coord
// 3: Y coord
// 4: Z coord
function createPedDriveToCoords(pedModel, x, y, z) {
	// natives.taskCarDriveToCoord(ped, Vehicle, float, float, float, float, int, int, int, float, int)
	if (game.game == GAME_GTA_IV) {
		let taskCarDriveToCoord = natives.taskCarDriveToCoord;

		let civMale = 1;
		let civFemale = 2;

		natives.requestModel(pedModel);
		natives.loadAllObjectsNow();

		if (natives.hasModelLoaded(ped)) {
			tempCiv = natives.createChar(civMale, pedModel, [playerX, playerY, playerZ], true);
		}

	} else {
		message("This only works on GTA IV");
	}

}

function createPed(givePedWeapon, doesPedHatePlayer, doesPedEnterVehicle, doesPlayerWarpIntoVehicle) {
	let player = localPlayer;
	let playerCoords = player.position;

	// https://gtamods.com/wiki/Ped_type
	// https://gtamods.com/wiki/List_of_models_hashes#Peds

	let playerX = playerCoords.x + 3;
	let playerY = playerCoords.y + 3;
	let playerZ = playerCoords.z + 1.5;

	// 1: Ped Type
	// 2: Ped Model
	// 3: X
	// 4: Y
	// 5: Z
	// 6: Variable to store handle
	// 7: Unknown, always set to 1 (true)

	// natives.createChar(civFemale, angiePed, [playerX, playerY, playerZ], ped, true);
	// Oops this crashed it.

	// Taken idea from v-sandbox in ped.js
	if (game.game == GAME_GTA_IV) {
		// TODO Figure out how to get the playerChar with natives.
		// let getPlayerChar = natives.getPlayerChar;
		// let playerChar = getPlayerChar(0);

		let pedPosition = [playerX, playerY, playerZ];
		let angiePed = 4167490662;

		// M_Y_DOWNTOWN_01
		let downTownPed1 = 1207402441;
		let civMale = 1;
		let civFemale = 2;
		let tempCiv = false;

		// Weapon
		let giveWeaponToChar = natives.giveWeaponToChar;
		let taskAimGunAtChar = natives.taskAimGunAtChar;
		let taskCombat = natives.taskCombat;
		let setCharAccuracy = natives.setCharAccuracy;
		let setCharAsEnemy = natives.setCharAsEnemy;

		// First request the model.
		// Oops forgot to change this.. That'll cause a crash if this isn't loaded..
		natives.requestModel(downTownPed1);
		// Then load the objects now
		natives.loadAllObjectsNow();

		// If the model has loaded, then assign tempCiv
		if (natives.hasModelLoaded(downTownPed1)) {
			// tempCiv = natives.createChar(civFemale, angiePed, [playerX, playerY, playerZ], true);
			// tempCiv = natives.createChar(civMale, angiePed, [playerX, playerY, playerZ], true);
			tempCiv = natives.createChar(civMale, downTownPed1, [playerX, playerY, playerZ], true);
			// Set the ped with variable from above.
			ped = tempCiv;
		}

		// Well I changed it and now it always says this.
		if (!tempCiv) {
			message("The ped could not be added!");
			return false;
		}

		tempCiv.position = pedPosition;

		if (givePedWeapon) {
			// 1: Ped
			// 2: Weapon - https://gtamods.com/wiki/List_of_Weapons_(GTA4)
			// 3: Ammo
			// 4: Show/Hide
			// Set to pistol, they seem to run away if I do no weapon or melee weapons.
			giveWeaponToChar(tempCiv, 7, 100, true);
			// giveWeaponToChar(tempCiv, 1, 100, true);
			// Test for setting the char accuracy
			// This seems to work.
			// setCharAccuracy(tempCiv, 75);
		}

		if (doesPedHatePlayer) {
			// Test for setting them as an enemy
			// setCharAsEnemy(player, true);

			// These seem to work, the ped starts aiming at and attacking the player.
			taskAimGunAtChar(tempCiv, player, 2000);
			taskCombat(tempCiv, player);
		}

		// TODO Move most of this into createVehicleforped
		if (doesPedEnterVehicle) {
			// Spawn a car for them to get in.
			createVehicleNative();
			let taskCarDriveWander = natives.taskCarDriveWander;
			let taskWarpCharIntoCarAsPassenger = natives.taskWarpCharIntoCarAsPassenger;
			let speed = 30;
			// I think 3 might be a little more aggresive, like avoiding lights and going faster.
			// Possible options (Possibly more): 0, 2, 3, 6 
			let drivingMode = 2;


			natives.taskEnterCarAsDriver(tempCiv, tempVehicle, 1000);
			taskCarDriveWander(tempCiv, tempVehicle, speed, drivingMode);
			// taskWarpCharIntoCarAsPassenger(player, tempVehicle);
			// taskWarpCharIntoCarAsPassenger(playerChar, tempVehicle);

			if (doesPlayerWarpIntoVehicle) {
				// This makes the ped drive the player around.
				player.warpIntoVehicle(tempVehicle, 1);
			}

		}

		if (!givePedWeapon && !doesPedHatePlayer && !doesPedEnterVehicle) {
			let taskWanderStandard = natives.taskWanderStandard;
			taskWanderStandard(tempCiv);

		}

		// Not sure what the mission char does.
		natives.setCharAsMissionChar(tempCiv, true);
		natives.setCharStayInCarWhenJacked(tempCiv, true);
	} else {
		message("This only works on GTA IV");
	}
}

// TODO Make this create a ped, create a vehicle, make them go into it, and have option for driving the player around.
// function createDrivingPed(){

// }


// This works now, just not on the new ped command
function explodePed() {
	if (game.game == GAME_GTA_IV) {
		let explodeCharHead = natives.explodeCharHead;
		let isCharDead = natives.isCharDead;

		if (!isCharDead(ped)) {
			explodeCharHead(ped);
		}
	} else {
		message("This only works on GTA IV");
	}
}

// Well this works for blowing up the peds vehicle lol
function explodePedVehicle() {
	if (game.game == GAME_GTA_IV) {
		let explodeCar = natives.explodeCar;
		let doesVehicleExist = natives.doesVehicleExist;

		// This is set by the spawn_vehicles.js
		if (doesVehicleExist(tempVehicle)) {
			explodeCar(tempVehicle, true, false);
		}
	} else {
		message("This only works on GTA IV");
	}
}

addCommandHandler("explodeped", function (command, text) {
	explodePed();
});

// Well this works for blowing up the peds vehicle lol
addCommandHandler("explodepedveh", function (command, text) {
	explodePedVehicle();
});

// This works like this, I moved the functions around. I would like to keep it like that.
addCommandHandler("newped", function (command, text) {
	if (game.game == GAME_GTA_IV) {
		let player = localPlayer;
		let playerCoords = player.position;

		let playerX = playerCoords.x + 3;
		let playerY = playerCoords.y + 3;
		let playerZ = playerCoords.z + 1.5;


		let civMale = 1;
		let downTownPed1 = 1207402441;
		createPedNew(downTownPed1, civMale, playerX, playerY, playerZ, false);
	} else {
		message("This only works on GTA IV");
	}
});

// Moved out of commands.js
// 1: Kill player
// 2: Drive player
addCommandHandler("createped", function (command, text) {
	if (game.game == GAME_GTA_IV) {
		switch (text) {
			// TODO Drive player, and have attacker kill player, add multiple of these.

			// 1: givePedWeapon - This and 2 needs to be enabled to work.
			// 2: doesPedHatePlayer - This and 1 needs to be enabled to work.
			// 3: doesPedEnterVehicle - Does the ped enter the vehicle
			// 4: doesPlayerWarpIntoVehicle - Does the player warp into the vehicle
			// Kill player
			case "1":
				createPed(true, true, false, false);
				break;
			case "2":
				// Drive around, don't warp player into car
				createPed(false, false, true, false);
				break;

			// Drive around, warp player into car
			case "3":
				createPed(false, false, true, true);
				break;
			// TODO Drive to coords set, for now set to parkinglot1
			case "4":
				break;

		}
	} else {
		message("This only works on GTA IV");
	}
	// createPed(false, false, true);
});
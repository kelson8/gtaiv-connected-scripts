"use strict";

// TODO Figure out how to get the host, once I do that I can make this work on GTA 3, Vice City, and SA.

let player = localPlayer;
let playerPos = player.position;

// https://forum.gtaconnected.com/index.php/topic,37.0.html
// let weaponNames = ["Fist", "Brass Knuckles", "Golf Club", "Nightstick", "Knife", "Baseball Bat",
// 	"Shovel", "Pool Cue", "Katana", "Chainsaw", "Purple Dildo",
// 	"Dildo", "Vibrator", "Silver Vibrator", "Flowers", "Cane", "Grenade",
// 	"Teargas", "Molotov Cocktail", "Unknown", "Unknown", "Unknown",
// 	"9mm", "Silenced 9mm", "Desert Eagle", "Shotgun", "Sawnoff Shotgun",
// 	"Combat Shotgun", "Uzi", "MP5", "AK-47", "M4", "Tec-9", "Country Rifle",
// 	"Sniper Rifle", "RPG", "HS Rocket", "Flamethrower", "Minigun", "Satchel Charge",
// 	"Detonator", "Spraycan", "Fire Extinguisher", "Camera", "Night Vision Goggles",
// 	"Thermal Goggles", "Parachute", "Cellphone", "Jetpack", "Skateboard"];

// TODO Figure out how to make this work for my values in config.js.

// TODO Figure out how to clear the chat with a command.
// It acts like they don't exist but it works for the blip command.
// gta.createBlip([groveX, groveY, groveZ], 8);


// https://wiki.gtaconnected.com/Resources/GTASA/RadarBlips
// addCommandHandler("blip", function(command, text){
// gta.createBlip([groveX, groveY, groveZ], 8);
// Why was this function reversed compared to the wiki?
// This is using the vec3 for argument 1, and the blip for argument 2.
// gta.createBlip(player.position, 8);
// });


// Teleport to spawn
// https://github.com/squishylemon/Lspawns/blob/main/Client/player.js
// addCommandHandler("spawn", function(command, text, client) {
addCommandHandler("spawn", function (command, text) {
	if (isPlayerInVehicle()) {
		warpPlayerVehicle(spawnPosX, spawnPosY, spawnPosZ);
	} else {
		warpPlayerFadeIn(spawnPosX, spawnPosY, spawnPosZ);
	}
	message("You have been teleported to the spawn");

});


///////////////
// Wanted level
///////////////

// Clear the players wanted level
addCommandHandler("clearwl", function (command, text) {
	player.wantedLevel = 0;
});

// Give the player 6 stars
addCommandHandler("maxwl", function (command, text) {
	player.wantedLevel = 6;
});


///////////////
// Weapons
///////////////

// https://gtamods.com/wiki/List_of_Weapons_(GTA4)
// Give the player poolcue, grenades, pistol, shotgun, mp5, ak47, rocket launcher, Sniper
// TODO Move into client/functions/give_weapons.js
addCommandHandler("weaponall", function (command, text) {
	// https://wiki.gtaconnected.com/ped.giveWeapon
	// player.giveWeapon(29, 999, false);
	if (game.game == GAME_GTA_IV) {
		player.giveWeapon(2, 99, false); // Pool cue
		player.giveWeapon(4, 999, false); // Grenades
		player.giveWeapon(7, 999, false); // Pistol
		player.giveWeapon(10, 999, false); // Shotgun
		player.giveWeapon(13, 999, false); // MP5
		player.giveWeapon(14, 999, false); // AK47
		player.giveWeapon(16, 999, false); // Rocket Launcher
		player.giveWeapon(18, 999, false); // Sniper
		message("You have been given most of the weapons!");
	}

});


// Gui test, not sure how these work at all, they aren't documented
// https://wiki.gtaconnected.com/Client/Functions#Gui_Functions
// addCommandHandler("guitest", function(command, text) {

// });

///////////////
// Test
///////////////

// TODO Set this up.
addCommandHandler("blipcoords", function (command, text) {
	let doesBlipExist = natives.doesBlipExist;
	let getFirstBlipInfoId = natives.getFirstBlipInfoId;
	let getBlipCoords = natives.getBlipCoords;
	// https://gtamods.com/wiki/Blip_(GTA_IV)
	let targetMarkerBlipId = 8;
	let coords = 0;
	let tempPos = 0;

	// if (doesBlipExist(targetMarkerBlipId)) {
	if (doesBlipExist(getFirstBlipInfoId(targetMarkerBlipId))) {


		// if (getFirstBlipInfoId(targetMarkerBlipId)) {
		coords = getBlipCoords(targetMarkerBlipId, tempPos);
		// This shows "Object vec3, I wonder how to display it."
		// message(`${coords}`);
		message(`TempPos: ${tempPos}, coords: ${coords.x}, ${coords.y}, ${coords.z}`);
		// player.position = [coords.x, coords.y, coords.z];
		// }
	}
});

// 722.57110000, 1383.07900000, 13.30010000
// Open a garage
addCommandHandler("opengarage", function (command, text) {
	let isGarageClosed = natives.isGarageClosed;
	let openGarage = natives.openGarage;

	if (isGarageClosed("BxGRG1")) {
		openGarage("BxGRG1");
	}

});

// Close a garage, this doesn't seem to work.
addCommandHandler("closegarage", function (command, text) {
	let isGarageOpen = natives.isGarageOpen;
	let closeGarage = natives.closeGarage;

	if (isGarageOpen("BxGRG1")) {
		closeGarage("BxGRG1");
	}

});

// Attempt to start a game script
// This works now? I think I just figured out how to start the mission scripts and stuff.
addCommandHandler("startscript", function (command, text) {
	// https://gtamods.com/wiki/START_NEW_SCRIPT
	// This script launches the computer in game.
	let scriptName = "computerMain";
	// let scriptName = "MPcellphoneMain";
	// let scriptName = "SPcellphone";
	// Script names: darts, go_on_date, SPcellphoneEndCall, faustin5_fire, Ilyena_calls,
	// SPcellphone, ambControlLoader, MultiplayerTutorial, emergencyCall, taxi, MPcellphoneMain
	startScript(scriptName);
});

// TODO Add user input for the scripts.
// addCommandHandler("startscript", function(command, text) {
// 	// https://gtamods.com/wiki/START_NEW_SCRIPT
// 	// This script launches the computer in game.
// 	// let scriptName = "computerMain";
// 	// let scriptName = "SPcellphone";
// 	// Script names: darts, go_on_date, SPcellphoneEndCall, faustin5_fire, Ilyena_calls,
// 	// SPcellphone, ambControlLoader, MultiplayerTutorial, emergencyCall, taxi

// 	if(doesScriptExist(text))
// 	{
// 		startScript(text);
// 	} else {
// 		// TODO Print a message
// 	}

// });

// TODO Test this, should kill the scripts.
// Well this seems to possibly stop the phone script, but it starts back up.
// Could be auto loaded?
// Actually I don't think this kills the scripts.
addCommandHandler("stopscript", function (command, text) {
	let destoryThread = natives.destroyThread;
	let markScriptAsNoLongerNeeded = natives.markScriptAsNoLongerNeeded;


	// let scriptName = "MPcellphoneMain";
	let scriptName = "computerMain";
	// destoryThread(scriptName);
	markScriptAsNoLongerNeeded(scriptName);
});


// This should create and destroy the phone

// This crashes it
// addCommandHandler("cphone", function(command, text) {
// 	let createMobilePhone = natives.createMobilePhone;

// 	createMobilePhone(1);
// });

// This didn't work at all.
// addCommandHandler("dphone", function(command, text) {
// 	let destoryMobilePhone = natives.destroyMobilePhone;

// 	destoryMobilePhone();
// });



// addCommandHandler("", function(command, text){

// });

// TODO Look into creating a vehicle, creating a ped, warping the ped into the vehicle.
// And warping the player into the passenger seat with the task_wander native for the vehicle

let tempCiv = null;
let tempVehicleNew = null;

// addCommandHandler("drivingped", function(command, text) {

// This works for creating a ped in a car, store the ped to tempCiv, vehicle to tempVehicleNew
addCommandHandler("createped", function (command, text) {

	// Adapted some of this from ped.js in v-sandbox
	if (game.game == GAME_GTA_IV) {
		// let tempCiv = false;

		// Kill the ped if they already exist
		if(tempCiv){
			natives.explodeCharHead(tempCiv);
		}

		if(tempVehicleNew){
			natives.explodeCar(tempVehicleNew, true, true);
		}

		let requestModel = natives.requestModel;
		let hasModelLoaded = natives.hasModelLoaded
		let createChar = natives.createChar;
		let loadAllObjectsNow = natives.loadAllObjectsNow;
		let wait = natives.wait;

		// Vehicle
		let createCar = natives.createCar; // 1: Model, 2: X, 3: Y, 4: Z, 5: Car handle, 6: Always set to true

    	let infernusModel = 418536135;
    	// Request the model
    	requestModel(infernusModel);
		
		// Player
		let position = localPlayer.position;
		let heading = localPlayer.heading;
		let newPosition = new Vec3(position.x + 3, position.y + 4, position.z);

		let vehiclePosition = new Vec3(position.x - 3, position.y - 4, position.z);
		let vehicleSpawnPos = vehiclePosition;
		// = new Vec3(positionX, positionY, positionZ)
		//

		let pedDriveAround = true;
		let pedDrivePlayerAround = true;

		let getPlayerGroup = natives.getPlayerGroup;
		let getGroupSize = natives.getGroupSize;


		let setCharRelationship = natives.setCharRelationship;
		let setCharRelationshipGroup = natives.setCharRelationshipGroup;
		// TODO Figure this out, should be able to make the peds attack.
		// let currentPlayerGroup = getPlayerGroup(localPlayer )

		// https://gtamods.com/wiki/List_of_models_hashes#Peds
		// IG_PACKIE_MC
		let pedModel = 1690783035;
		// https://gtamods.com/wiki/Ped_type
		// Civmale
		let pedType = 1;
		requestModel(pedModel);

		// I think I was missing this
		loadAllObjectsNow();

		// TODO Test this
		// while (!hasModelLoaded(pedModel)) {
		// 	wait(0);
		// }

		// Possible fix for crashing?
		if (hasModelLoaded(pedModel)) {
			tempCiv = createChar(pedType, pedModel, newPosition, true);
		}

		// Load the car model.
		if(hasModelLoaded(infernusModel))
		{
			let vehicle = createCar(infernusModel, vehicleSpawnPos, true);
    		tempVehicleNew = vehicle;
		}


		if (!tempCiv) {
			message("The civilian could not be added!", errorMessageColour);
			return false;
		}

		// TODO Figure this out, should be able to make the peds attack.
		// setCharRelationship(tempCiv, 8, 1);
		// setCharRelationshipGroup(tempCiv, 8);

		tempCiv.position = position;

		tempCiv.heading = heading;

		natives.setCharAsMissionChar(tempCiv, true);
		natives.setCharStayInCarWhenJacked(tempCiv, true);

		// Make the ped enter the vehicle
		if(pedDriveAround){
			natives.taskWarpCharIntoCarAsDriver(tempCiv, tempVehicleNew);

			// Make the ped wander around
			// This seems to work now.
			natives.taskCarDriveWander(tempCiv, tempVehicleNew, 30.0, 6);
		}


		if(pedDrivePlayerAround){
			// Make the player enter as a passenger
			// 0 is the passenger seat.
			// I guess this goes from 0-3.
			natives.taskWarpCharIntoCarAsPassenger(localPlayer, tempVehicleNew, 0);
		}

	} else {
        message("This only works on GTA IV");
    }
});

// Delete the ped and the vehicle if they exist
addCommandHandler("deleteped", function(command, text){
	if(tempCiv){
		// natives.deleteChar(tempCiv);
		natives.explodeCharHead(tempCiv);
		natives.markCharAsNoLongerNeeded(tempCiv);
		tempCiv = null;
	}

	if(tempVehicleNew){
		natives.explodeCar(tempVehicleNew, true, true);
		natives.markCarAsNoLongerNeeded(tempVehicleNew);
		tempVehicleNew = null;
	}
});

addCommandHandler("cleararea", function(command, text){
	// Player
	let position = localPlayer.position;
	let heading = localPlayer.heading;

	let clearArea = natives.clearArea;

	// CLEAR_AREA(Vec3 position, float radius, bool deleteProjectilesFlag);
	clearArea(position, 25, true);
});

// These can be useful, sub_659 in ambtunnelcops.c within the decompiled scripts.
/*
									CREATE_CAR( uVar6, l_U11._fU0, l_U11._fU4, l_U11._fU8, ref l_U15, 1 );
									SET_ROOM_FOR_CAR_BY_NAME( l_U15, l_U24 );
									SET_CAR_HEADING( l_U15, l_U14 );

									SET_CAR_COORDINATES( l_U15, l_U11._fU0, l_U11._fU4, l_U11._fU8 );
									CREATE_RANDOM_CHAR_AS_DRIVER( l_U15, ref l_U16 );
									SET_ROOM_FOR_CHAR_BY_NAME( l_U16, l_U24 );

									TASK_CAR_TEMP_ACTION( l_U16, l_U15, 1, 999999 );
									GET_OFFSET_FROM_CAR_IN_WORLD_COORDS( l_U15, 0.00000000, -sub_2311( uVar6 ), 0.00000000, ref uVar3._fU0, ref uVar3._fU4, ref uVar3._fU8 );
								    
									SET_CHAR_COORDINATES( l_U3, uVar3._fU0, uVar3._fU4, uVar3._fU8 );
									SET_CHAR_HEADING( l_U3, l_U14 );
								    
									SET_NEXT_DESIRED_MOVE_STATE( 2 );
									GET_OFFSET_FROM_CAR_IN_WORLD_COORDS( l_U15, 0.00000000, 0.25000000, 0.00000000, ref uVar3._fU0, ref uVar3._fU4, ref uVar3._fU8 );
									OPEN_SEQUENCE_TASK( ref l_U1 );
								    
									TASK_PLAY_ANIM( 0, "Open_Boot", "AMB@BRIDGECOPS", 4.00000000, 0, 0, 0, 1, -1 );
									TASK_STAND_STILL( 0, 7000 );
									TASK_PLAY_ANIM( 0, "Close_Boot", "AMB@BRIDGECOPS", 4.00000000, 0, 0, 0, 0, -1 );
									TASK_GO_STRAIGHT_TO_COORD( 0, l_U4._fU0, l_U4._fU4, l_U4._fU8, 2, -2 );
									TASK_ACHIEVE_HEADING( 0, l_U7 );
									TASK_START_SCENARIO_IN_PLACE( 0, "Scenario_Bouncer", -1082130432 );
									CLOSE_SEQUENCE_TASK( l_U1 );
									TASK_PERFORM_SEQUENCE( l_U3, l_U1 );
									CLEAR_SEQUENCE_TASK( l_U1 );

*/
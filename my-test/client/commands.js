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
	// let scriptName = "SPcellphone";
	// Script names: darts, go_on_date, SPcellphoneEndCall, faustin5_fire, Ilyena_calls,
	// SPcellphone, ambControlLoader, MultiplayerTutorial, emergencyCall, taxi
	startScript(scriptName);
});



// addCommandHandler("", function(command, text){

// });
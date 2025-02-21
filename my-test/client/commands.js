"use strict";

// TODO Figure out how to get the host, once I do that I can make this work on GTA 3, Vice City, and SA.

let player = localPlayer;
let playerPos = player.position;

// https://forum.gtaconnected.com/index.php/topic,37.0.html
let weaponNames = ["Fist", "Brass Knuckles", "Golf Club", "Nightstick", "Knife", "Baseball Bat",
	"Shovel", "Pool Cue", "Katana", "Chainsaw", "Purple Dildo",
	"Dildo", "Vibrator", "Silver Vibrator", "Flowers", "Cane", "Grenade",
	"Teargas", "Molotov Cocktail", "Unknown", "Unknown", "Unknown",
	"9mm", "Silenced 9mm", "Desert Eagle", "Shotgun", "Sawnoff Shotgun",
	"Combat Shotgun", "Uzi", "MP5", "AK-47", "M4", "Tec-9", "Country Rifle",
	"Sniper Rifle", "RPG", "HS Rocket", "Flamethrower", "Minigun", "Satchel Charge",
	"Detonator", "Spraycan", "Fire Extinguisher", "Camera", "Night Vision Goggles",
	"Thermal Goggles", "Parachute", "Cellphone", "Jetpack", "Skateboard"];

// TODO Figure out how to make this work for my values in config.js.
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
	// let player = client.player;
	// if(player != null) {
	// 	// let playerPos = client.player.position;
	// }
	// ped.position(0, 0, 3);

	// localPlayer.position = [spawnX, spawnY, spawnZ];
	player.position = [spawnX, spawnY, spawnZ];
	message("You have been teleported to the spawn");

});

///////////////
// Vehicle
///////////////

// TODO Move these into vehicle_commands.js
// Blow up the current vehicle, this is incomplete.

// Fix the players current vehicle
addCommandHandler("fixveh", function (command, text) {
	if (player.isInVehicle) {
		let vehicle = player.vehicle;
		// player.vehicle.fix();
		vehicle.fix();
	}
});

// I figured out how to check if a player is in a vehicle.
addCommandHandler("explodeveh", function (command, text) {
	let player = localPlayer;
	let tempCar = 0;
	let isInVehicle = natives.isCharInAnyCar(player);

	if (isInVehicle) {
		let vehicle = natives.storeCarCharIsInNoSave(player, tempCar);
		natives.explodeCar(vehicle, true, false);
		// message("You are in a vehicle");
	} else {
		message("You are not in a vehicle.");
	}
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
// Give the player poolcue, grenades, pistol, mp5, ak47, rocket launcher, Sniper
addCommandHandler("weapon1", function (command, text) {
	// https://wiki.gtaconnected.com/ped.giveWeapon
	// player.giveWeapon(29, 999, false);
	player.giveWeapon(2, 99, false); // Pool cue
	player.giveWeapon(4, 999, false); // Grenades
	player.giveWeapon(7, 999, false); // Pistol 
	player.giveWeapon(13, 999, false); // MP5
	player.giveWeapon(14, 999, false); // AK47
	player.giveWeapon(16, 999, false); // Rocket Launcher
	player.giveWeapon(18, 999, false); // Sniper
	message("You have been given most of the weapons!");
});

///////////////
// Player
///////////////

let pInvincible = false;

// I modified this a bit to figure it out.
// Toggle god mode on/off

/*
	This could be useful if I want spawn protection or something.
if(localPlayer.position.distance(spawnPosition) <= 100) {
}
*/
addCommandHandler("god", function (command, text) {
	pInvincible = !pInvincible;
	if (pInvincible) {

		localPlayer.invincible = false;
		// 
		natives.setCharProofs(localPlayer, false, false, false, false, false);
		message("Invincibility disabled.");
	} else {
		localPlayer.invincible = true;
		natives.setCharProofs(localPlayer, true, true, true, true, true);
		message("Invincibility enabled.");

	}
});

// TODO Fix this to work, it should toggle the bike helmet on or off the player
let helmet = false;
addCommandHandler("helmet", function (command, text) {
	helmet = !helmet;
	player = localPlayer;
	if (helmet) {
		player.giveHelmet();
	} else {
		player.removeHelmet();
	}
});

// Set the players health and armor to max
addCommandHandler("heal", function (command, text) {
	player.health = 100;
	player.armour = 250;
});

// Kill the player
// Well I don't know what changed but this works now..
// It sometimes doesn't work if the player respawns.
addCommandHandler("kill", function (command, text) {
	player.health = 0;
	player.armour = 0;
});

// Display the players current coords.
addCommandHandler("coords", function (command, text) {
	let pos = player.position;
	// Theres too many decimals, I'll remove them here
	let posx = pos.x.toFixed(3);
	let posy = pos.y.toFixed(3);
	let posz = pos.z.toFixed(3);
	// message(`Your coords are {pos.x} {pos.y} {pos.z}`);
	message('Your coords are X: ' + posx + " Y: " + posy + " Z:" + posz);
});

addCommandHandler("sky", function (command, text) {
	let player = localPlayer;
	let playerPos = player.position;
	playerPos.z = playerPos.z + 50;
	player.position = [playerPos.x, playerPos.y, playerPos.z];
	message("Good luck on your death! You shouldn't have typed this...")

})


// Set your wanted level
// This actually works.
addCommandHandler("setmaxwl", function (command, text) {
	switch (text) {
		case "0":
			natives.setMaxWantedLevel(0);
			message("Set max wanted level to 0");
			break;
		case "1":
			natives.setMaxWantedLevel(1);
			message("Set max wanted level to 1");
			break;
		case "2":
			natives.setMaxWantedLevel(2);
			message("Set max wanted level to 2");
			break
		case "3":
			natives.setMaxWantedLevel(3);
			message("Set max wanted level to 3");
			break;
		case "4":
			natives.setMaxWantedLevel(4);
			message("Set max wanted level to 4");
			break;
		case "5":
			natives.setMaxWantedLevel(5);
			message("Set max wanted level to 5");
			break;
		case "6":
			natives.setMaxWantedLevel(6);
			message("Set max wanted level to 6");
			break;
		default:
			message("You can choose from 0-6, 0 meaning wanted level is disabled.");
			break;
	}
})


// Gui test, not sure how these work at all, they aren't documented
// https://wiki.gtaconnected.com/Client/Functions#Gui_Functions
// addCommandHandler("guitest", function(command, text) {

// });


///////////////
// Warps
///////////////


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

addCommandHandler("warp", function (command, text) {
	switch (text) {
		// Parking lot #1
		case "test1":
			player.position = [car1posX + 3, car1posY + 3, car1posZ];
			message("You have been teleported to parking lot #1.")
			break;
		case "garage1":
			player.position = [garage1PosX, garage1PosY, garage1PosZ];
			break;
		default:
			message("Invalid warp! Warp list: test1, garage1");
	}
});

///////////////
// Test
///////////////

// 722.57110000, 1383.07900000, 13.30010000
// Open a garage
addCommandHandler("opengarage", function (command, text) {
	natives.openGarage("BxGRG1");
});

// Close a garage, this doesn't seem to work.
addCommandHandler("closegarage", function (command, text) {
	natives.closeGarage("BxGRG1");
});




addCommandHandler("createped", function (command, text) {
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
	// TODO Fix this to work, they spawn in but their back is broken or something.
	// Their texture doesn't even look right.
	if (game.game == GAME_GTA_IV) {
		let pedPosition = [playerX, playerY, playerZ]
		let ped = 0;
		let angiePed = 4167490662;
		let civMale = 1;
		let civFemale = 2;
		let tempCiv = false;

		// First request the model.
		natives.requestModel(angiePed);
		// Then load the objects now
		natives.loadAllObjectsNow();

		if (natives.hasModelLoaded(angiePed)) {
			// tempCiv = natives.createChar(civFemale, angiePed, [playerX, playerY, playerZ], true);
			tempCiv = natives.createChar(civMale, angiePed, [playerX, playerY, playerZ], true);
		}

		if(!tempCiv){
			message("The ped could not be added!");
			return false;
		}

		tempCiv.position = pedPosition;

		// Umm I think this is needed? Their back is broken lol.
		natives.setCharAsMissionChar(tempCiv, true);
		natives.setCharStayInCarWhenJacked(tempCiv, true);

	}


});


addCommandHandler("scmtest", function (command, text) {
	// gta.scriptCommand("ADD_BLIP_FOR_COORD", 0, 0, 0);
	// natives.ADD_BLIP_FOR_COORD(0, 0, 0);

});

// addCommandHandler("", function(command, text){

// });

// Moved out of commands.js
// This seems to work now
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
	if (game.game == GAME_GTA_IV) {
		let pedPosition = [playerX, playerY, playerZ]
		let ped = 0;
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
		}

		// Well I changed it and now it always says this.
		if(!tempCiv){
			message("The ped could not be added!");
			return false;
		}

		tempCiv.position = pedPosition;
		// 1: Ped
		// 2: Weapon - https://gtamods.com/wiki/List_of_Weapons_(GTA4)
		// 3: Ammo
		// 4: Show/Hide
		// Set to pistol.
		giveWeaponToChar(tempCiv, 7, 100, true);

		// Test for setting the char accuracy
		// This seems to work.
		// setCharAccuracy(tempCiv, 75);

		// Test for setting them as an enemy
		setCharAsEnemy(tempCiv, true);

		// These seem to work, the ped starts aiming at and attacking the player.
		taskAimGunAtChar(tempCiv, player, 2000);
		taskCombat(tempCiv, player);


		// Not sure what the mission char does.
		natives.setCharAsMissionChar(tempCiv, true);
		natives.setCharStayInCarWhenJacked(tempCiv, true);

	}


});
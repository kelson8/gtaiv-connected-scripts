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
	let player = localPlayer;

    // player.health = 0;
	// player.armour = 0;
    // let taskDie = natives.taskDie;
    // taskDie(true);

    let explodeCharHead = natives.explodeCharHead;
    explodeCharHead(player);
    
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
	message("Good luck on your death! You shouldn't have typed this...");

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
});
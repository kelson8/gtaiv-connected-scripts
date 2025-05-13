// TODO Set to fade player in, and teleport to a random location
// For now I'll set this to something quick like the airport

// Teleport player with a fade in option
function warpPlayerFadeIn(posX, posY, posZ) {
	if (game.game == GAME_GTA_IV) {
	let doScreenFadeOut = natives.doScreenFadeOut;
	let doScreenFadeIn = natives.doScreenFadeIn;
	let loadScene = natives.loadScene;

	let requestCollisionAtPosn = natives.requestCollisionAtPosn;

	// doScreenFadeOut(1000);
	// This seems to work.
	requestCollisionAtPosn([posX, posY, posZ]);
	player.position = [posX, posY, posZ];
	// This seems to freeze the game for a second, TODO Fix this to work, it should fix the map taking a second to load in.
	// loadScene([posX, posY, posZ]);

	doScreenFadeIn(1000);
	} else {
		message("This only works on GTA IV");
	}
}

// TODO Test this, this is located in teleport_commands.js
// Doesn't work on here
warpPlayerFadeIn(airport1PosX, airport1PosY, airport1PosZ);


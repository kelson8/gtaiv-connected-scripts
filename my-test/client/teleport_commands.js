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

addCommandHandler("warp", function (command, text) {
	switch (text) {
		// Parking lot #1
		case "test1":
			player.position = [car1posX + 3, car1posY + 3, car1posZ];
			// message("You have been teleported to parking lot #1.");
			break;
		case "garage1":
			player.position = [garage1PosX, garage1PosY, garage1PosZ];
			break;
        case "airport1":
			player.position = [airport1PosX, airport1PosY, airport1PosZ];
			break;
        case "hospital":
            player.position = [hospitalPosX, hospitalPosY, hospitalPosZ];
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
			message("Invalid warp! Warp list: test1, garage1, airport1, hospital.");
	}
});

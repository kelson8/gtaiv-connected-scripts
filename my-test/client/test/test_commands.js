// TODO Figure this out for San Andreas
addCommandHandler("scmtest", function (command, text) {
    if(game.game == GAME_GTA_SA){
        message("Not implemented yet");
    } else {
        message("This is only tested on GTA San Andreas.");
    }
	// gta.scriptCommand("ADD_BLIP_FOR_COORD", 0, 0, 0);
	// natives.ADD_BLIP_FOR_COORD(0, 0, 0);

});

// Test with the invalid params check from util.js in v-sandbox.
addCommandHandler("paramstest", function(command, params) {

	// This cancels the message but it doesn't show this error message..
	if (isParamsInvalid(params)) {
        // TODO Fix error message to show up.
		message("Command: /" + String(command) + " <message>");
		return false;
	}

	message("You wrote: " + String(params));
});

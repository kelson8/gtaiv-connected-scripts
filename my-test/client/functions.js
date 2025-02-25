///
// Scripts
///

// Start a script in the game, I made this into its own function
function startScript(scriptName) {
	if (game.game == GAME_GTA_IV) {
		let startNewScript = natives.startNewScript;
		let hasScriptLoaded = natives.hasScriptLoaded;
		let requestScript = natives.requestScript;

		// First request the script, or the game will crash.
		requestScript(scriptName);
		// Then load in the script.
		startNewScript(scriptName, 1024);
	}
}
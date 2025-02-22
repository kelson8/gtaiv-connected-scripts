// This is disabled in the meta.xml, I moved the cutscene testing into this file.

let cutsceneStarted = false;

let doScreenFadeOut = natives.doScreenFadeOut;
let doScreenFadeIn = natives.doScreenFadeIn;
let hasCutsceneFinished = natives.hasCutsceneFinished;

let wasCutsceneSkipped = natives.wasCutsceneSkipped;
let clearNamedCutscene = natives.clearNamedCutscene;

function startCutscene(){

	natives.startCutsceneNow("rpbad1");
	cutsceneStarted = true;
	// if(hasCutsceneFinished){
	// 	doScreenFadeIn(500);
	// }

	while(cutsceneStarted){
		// if(hasCutsceneFinished){
		if(wasCutsceneSkipped){
			doScreenFadeIn(500);
			cutsceneStarted = false;
			// This should clean it up, but it always runs and fades the screen in instantly.
			clearNamedCutscene("rpbad1");
		}
	}

}

// This starts the cutscenes but kills the game when it is skipped or exited.
// addCommandHandler("startcs", function(command, text){
// 	startCutscene();
// });
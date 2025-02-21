// Got idea for this from freeroam server.js, TODO Test this.

// addEventHandler("OnPlayerJoined", (event,client) => {
// 	if (server.game == GAME_GTA_IV){
//         let player = localPlayer;
//         let setCharCoordinates = natives.setCharCoordinates;

//         setCharCoordinates(player, [airport1PosX, airport1PosY, airport1PosZ])
//     }
// });

// TODO Figure out how to warp the player when they die.
addEventHandler("OnPedDead", (event, ped) => {
    if (server.game == GAME_GTA_IV){
        // let player = localPlayer;
        let player = ped;
        let setCharCoordinates = natives.setCharCoordinates;

        setCharCoordinates(player, [airport1PosX, airport1PosY, airport1PosZ])
    }
});
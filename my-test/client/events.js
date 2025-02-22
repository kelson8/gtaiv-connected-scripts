// Got idea for this from freeroam server.js, TODO Test this.

// TODO Move this into server events
// addEventHandler("OnPlayerJoined", (event,client) => {
// 	if (server.game == GAME_GTA_IV){
//         let player = localPlayer;
//         let setCharCoordinates = natives.setCharCoordinates;

//         setCharCoordinates(player, [airport1PosX, airport1PosY, airport1PosZ])
//     }
// });

// https://wiki.gtaconnected.com/OnPedSpawn
// https://wiki.gtaconnected.com/OnPedDead

// TODO Figure out how to warp the player when they die.
// addEventHandler("OnPedDead", (event, ped) => {
// addEventHandler("OnPedSpawn", (event, ped) => {
//     if (server.game == GAME_GTA_IV){
//         // let player = localPlayer;
//         let player = ped;
//         let setCharCoordinates = natives.setCharCoordinates;

//         setCharCoordinates(player, [airport1PosX, airport1PosY, airport1PosZ]);
//     }
// });

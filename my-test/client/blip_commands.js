// Blip sprite list: https://public.sannybuilder.com/GTA4/blips/

// TODO Figure out how to remove a blip on the map.
// TODO Figure out how to not make this a destination blip.
// TODO Make this not stay on the game forever.
// addCommandHandler("addblip", function(command, text){
//     let position = [car1posX, car1posY, car1posZ];
//     let tempBlip = 0;

//     let blip = natives.addBlipForCoord(position, tempBlip);
//     let doesBlipExist = natives.doesBlipExist(tempBlip);

//     // Check if blip doesn't exist, if so create it.
//     if(!doesBlipExist){
//         natives.changeBlipSprite(tempBlip, 30);
//     } else {
//         natives.removeBlip(tempBlip);
//     }
    
//     // natives
// });

/* Possible concept for making a loop to check if the player is in the blip, then remove it.
while(doesBlipExist){
    TODO Set values for these
    let position1 = 2, 2, 2;
    let position2 = 4, 4, 4;
    // 1: Player
    // 2: Vector3D for area1
    // 3: Vector3D for area2
    // 4: Unknown, seems to be 0 (false) in the scripts.

    if(natives.isCharInArea3d(player, position1, position2, false)){
        natives.removeBlip(blip);
    }
}

*/
// Blip sprite list: https://public.sannybuilder.com/GTA4/blips/

let tempBlip = 0;

// TODO Figure out how to not make this a destination blip.
// I finally got this working!!! Thats amazing.
// This shows a blip, sets the value of tempBlip to the blip and can be removed in the command.
function addBlipForCoord(){
    let position = [car1posX, car1posY, car1posZ];
 
    let blip = natives.addBlipForCoord(position, tempBlip);
    

    tempBlip = blip;
    return blip;
}

addCommandHandler("bliptest", function(command, text) {
    // let blip = addBlipForCoord();
    let doesBlipExist = natives.doesBlipExist(tempBlip);

    if(!doesBlipExist){
        addBlipForCoord();
    } else {
        natives.removeBlip(tempBlip);
    }
});

    
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
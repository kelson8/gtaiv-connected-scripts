// Blip sprite list: https://public.sannybuilder.com/GTA4/blips/

// TODO Setup event for the blip for server resource stop to remove it.
// This seems a bit complicated, I'll deal with it later, just look into the v-events resource.
// addEvent("BlipDisableOnResourceStop", 2);
//

let tempBlip = 0;
let blipEnabled = false;

let isCharInArea3D = natives.isCharInArea3D;
let setRoute = natives.setRoute;

// TODO Remove the blip when the resource stops, otherwise it breaks it.

// TODO Remove the blip when the player is in range of it.

// TODO Figure out how to not make this a destination blip.
// TODO Make this have a switch statement for the blips, so if set to blip 1 it goes to test1 warp,
// If set to blip 2 it goes to the hospital, and others.
// I finally got this working!!! Thats amazing.
// This shows a blip, sets the value of tempBlip to the blip and can be removed in the command.
function addBlipForCoord(){
    let position = [car1posX, car1posY, car1posZ];
 
    let blip = natives.addBlipForCoord(position, tempBlip);
    
    // Set the blip route
    setRoute(blip, true);

    tempBlip = blip;
    blipEnabled = true;

    return blip;
}

// Remove the blip
function removeBlip(){
    natives.removeBlip(tempBlip);
    setRoute(tempBlip, false);
    // Test
    blipEnabled = false;
}

addCommandHandler("toggleblip", function(command, text) {
    // let blip = addBlipForCoord();
    let doesBlipExist = natives.doesBlipExist(tempBlip);

    if(!doesBlipExist){
        addBlipForCoord();
    } else {
        removeBlip();
    }
});

// while(blipEnabled){
//     if(isCharInArea3D(player, [car1posX, car1posY, car1posZ], [car1posX + 5, car1posY + 5, car1posZ + 5], false)){
//         removeBlip();
//     }
// }

    
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
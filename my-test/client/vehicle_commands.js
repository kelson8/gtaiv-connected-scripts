

///////////////
// Vehicle
///////////////

// TODO Figure out how to remove the vehicle on here.

// TODO Figure out how to use this SET_CAR_ON_GROUND_PROPERLY

// Fix the players current vehicle
addCommandHandler("fixveh", function (command, text) {
    if (player.isInVehicle) {
        let vehicle = player.vehicle;
        // player.vehicle.fix();
        vehicle.fix();
    }
});

// I figured out how to check if a player is in a vehicle.
// Moved into crossgame_test.js, that one works better.
// addCommandHandler("explodeveh", function (command, text) {
//     let player = localPlayer;

//     if (game.game == GAME_GTA_IV) {

//         let tempCar = 0;
//         let isInVehicle = natives.isCharInAnyCar(player);

//         if (isInVehicle) {
//             let vehicle = natives.storeCarCharIsInNoSave(player, tempCar);
//             natives.explodeCar(vehicle, true, false);
//             // message("You are in a vehicle");
//         } else {
//             message("You are not in a vehicle.");
//         }
//     } else {
//         message("This only works on GTA IV");
//     }

// });


addCommandHandler("removeveh", function (command, text) {
    let player = localPlayer;

    if (game.game == GAME_GTA_IV) {
        let tempCar = 0;
        let isInVehicle = natives.isCharInAnyCar(player);

        let deleteCar = natives.deleteCar;
        let markCarAsNoLongerNeeded = natives.markCarAsNoLongerNeeded;


        if (isInVehicle) {
            let vehicle = natives.storeCarCharIsInNoSave(player, tempCar);
            // natives.deleteCar(vehicle);
            deleteCar(vehicle);
            markCarAsNoLongerNeeded(vehicle);
        }
    } else {
        message("This only works on GTA IV");
    }
});

// Fix the players vehicle
addCommandHandler("fixveh", function (command, text) {
    let player = localPlayer;

    if (game.game == GAME_GTA_IV) {
        let tempCar = 0;
        let isInVehicle = natives.isCharInAnyCar(player);


        if (isInVehicle) {
            let vehicle = natives.storeCarCharIsInNoSave(player, tempCar);
            natives.fixCar(vehicle);
        }

    } else {
        message("This only works on GTA IV");
    }

});

// Toggle god mode on the players vehicle.
// TODO Fix this one to work.
let vInvincible = false;
addCommandHandler("godveh", function (command, text) {
    vInvincible = !vInvincible;
    let player = localPlayer;
    let tempCar = 0;
    let isInVehicle = natives.isCharInAnyCar(player);

    if (game.game == GAME_GTA_IV) {
        message("Not implemented yet!");

    } else {
        message("Not implemented yet!");
    }
    // if(isInVehicle){
    //     let vehicle = natives.storeCarCharIsInNoSave(player, tempCar);

    //     if(vInvincible){
    //         // https://gtamods.com/wiki/SET_CAR_PROOFS
    //         // 1: Vehicle
    //         // 2: Bullet proof
    //         // 3: Fire proof
    //         // 4: Explosion proof
    //         // 5: Collison proof
    //         // 6: Melee proof
    //         natives.setCarProofs(vehicle, false, false, false, false, false);
    //         message("Your vehicle is no longer invincible.");

    //     } else {
    //         natives.setCarProofs(vehicle, true, true, true, true, true);
    //         message("Your vehicle is now invincible.");
    //     }
    // }
});

// TODO Test this
addCommandHandler("removevehwindows", function (command, text) {
    let player = localPlayer;

    if (game.game == GAME_GTA_IV) {
        let tempCar = 0;
        let isInVehicle = natives.isCharInAnyCar(player);


        if (isInVehicle) {
            let vehicle = natives.storeCarCharIsInNoSave(player, tempCar);
            // natives.fixCar(vehicle);
            for (i = 1; i < 4; i++) {
                natives.removeCarWindow(vehicle, i);
            }

            message("Vehicle windows removed.");
        } else {
            message("You are not in a car.");
        }
    } else {
        message("This only works on GTA IV");
    }

});
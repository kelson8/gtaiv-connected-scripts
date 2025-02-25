// This seems to work now on the client.

addCommandHandler("createboat", function (command, text) {
    if (game.game == GAME_GTA_IV) {
    let player = localPlayer;
    let playerPos = player.position;
    // Add 3 to the X and Y.
    let vehicleSpawnPos = [playerPos.x + 3, playerPos.y + 3, playerPos.z];

    // https://wiki.gtaconnected.com/Resources/GTAIV/VehicleModels
    let jetmax = 861409633
    var vehicle = gta.createVehicle(jetmax, vehicleSpawnPos);

    // Warp the player into the vehicle
    player.warpIntoVehicle(vehicle, 0);
    } else {
        message("This only works on GTA IV"); 
    }
});

// Using natives
// This works now, I forgot to request the model.
// Adding this below makes it to where the vehicle can be modified, so it can be blown up if the player isn't in it.
let tempVehicle = 0;
function createVehicleNative() {
    let player = localPlayer;
    let playerPos = player.position;
    // Add 3 to the X and Y.
    let vehicleSpawnPos = [playerPos.x + 3, playerPos.y + 3, playerPos.z];
    if (game.game == GAME_GTA_IV) {
    let requestModel = natives.requestModel;

    let createCar = natives.createCar; // 1: Model, 2: X, 3: Y, 4: Z, 5: Car handle, 6: Always set to true

    let infernus = 418536135;
    // Request the model
    requestModel(infernus);

    let vehicle = createCar(infernus, vehicleSpawnPos, true);
    tempVehicle = vehicle;
    } else {
        message("This only works on GTA IV");
    }
}

// TODO Test this.
function addPedIntoVehicle(ped, vehicle) {
    if (game.game == GAME_GTA_IV) {
        let taskWarpCharIntoCarAsDriver = natives.taskWarpCharIntoCarAsDriver;
        let doesVehicleExist = natives.doesVehicleExist;

        if (doesVehicleExist(vehicle)) {
            taskWarpCharIntoCarAsDriver(ped, vehicle);
        }
    } else {
        message("This only works on GTA IV");
    }
}

addCommandHandler("cveht", function (command, text) {
    createVehicleNative();
});

// Using GTA Connected
addCommandHandler("createveh", function (command, text) {
    let player = localPlayer;
    let playerPos = player.position;
    // Add 3 to the X and Y.
    let vehicleSpawnPos = [playerPos.x + 3, playerPos.y + 3, playerPos.z];

    if (game.game == GAME_GTA_IV) {
        let infernus = 418536135;
        let turismo = -1896659641;
        let sabre2 = 1264386590;
        let annihilator = 837858166;

        let pcj600 = -909201658;

        let phantom = -2137348917;

        let dukes = 723973206;

        // TODO Test this
        let tempCar = 0;
        let isInVehicle = natives.isCharInAnyCar(player);


        // TODO Make remove the player vehicle if a new one is spawned.


        switch (text) {
            case "1":
                // This makes it to where it wont run if the player is in a vehicle but doesn't remove it.
                if (isInVehicle) {
                    let storeCarCharIsInNoSave = natives.storeCarCharIsInNoSave;
                    let deleteCar = natives.deleteCar;

                    storeCarCharIsInNoSave(player, tempCar);
                    // deleteCar(storeCarCharIsInNoSave);
                    // deleteCar(tempCar);
                    deleteCar(tempCar);
                } else {
                    var vehicle = gta.createVehicle(infernus, vehicleSpawnPos);
                    // Warp the player into the vehicle
                    player.warpIntoVehicle(vehicle, 0);
                }

                break;
            case "2":
                var vehicle = gta.createVehicle(turismo, vehicleSpawnPos);
                player.warpIntoVehicle(vehicle, 0);
                break;
            case "3":
                var vehicle = gta.createVehicle(sabre2, vehicleSpawnPos);
                player.warpIntoVehicle(vehicle, 0);
                break;
            case "4":
                var vehicle = gta.createVehicle(annihilator, vehicleSpawnPos);
                player.warpIntoVehicle(vehicle, 0);
                break;
            case "5":
                var vehicle = gta.createVehicle(pcj600, vehicleSpawnPos);
                player.warpIntoVehicle(vehicle, 0);
                break;
            case "6":
                var vehicle = gta.createVehicle(phantom, vehicleSpawnPos);
                player.warpIntoVehicle(vehicle, 0);
                break;
            case "7":
                var vehicle = gta.createVehicle(dukes, vehicleSpawnPos);
                player.warpIntoVehicle(vehicle, 0);
                break;
            default:
                message("Usage: /createveh <num>; 1: Infernus, 2: Turismo, 3: Sabre 2, 4: Annihilator, 5: PCJ 600, 6: Phantom, 7: Dukes");
                break;
        }
    } else {
        message("This only works on GTA IV");
    }

});
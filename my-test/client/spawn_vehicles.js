// This seems to work now on the client.

addCommandHandler("createboat", function(command, text) {
    let player = localPlayer;
    let playerPos = player.position;
    // Add 3 to the X and Y.
    let vehicleSpawnPos = [playerPos.x + 3, playerPos.y + 3, playerPos.z];

    // https://wiki.gtaconnected.com/Resources/GTAIV/VehicleModels
    let jetmax = 861409633 
    var vehicle = gta.createVehicle(jetmax, vehicleSpawnPos);

    // Warp the player into the vehicle
    player.warpIntoVehicle(vehicle, 0);
});

// Using natives
// This works now, I forgot to request the model.
function createVehicleNative(){
    let player = localPlayer;
    let playerPos = player.position;
    // Add 3 to the X and Y.
    let vehicleSpawnPos = [playerPos.x + 3, playerPos.y + 3, playerPos.z];
    let requestModel = natives.requestModel;

    let createCar = natives.createCar; // 1: Model, 2: X, 3: Y, 4: Z, 5: Car handle, 6: Always set to true

    let infernus = 418536135;
    // Request the model
    requestModel(infernus);

    let vehicle = createCar(infernus, vehicleSpawnPos, true);
}

// TODO Test this.
function addPedIntoVehicle(ped, vehicle){
    let taskWarpCharIntoCarAsDriver = natives.taskWarpCharIntoCarAsDriver;
    let doesVehicleExist = natives.doesVehicleExist;

    if(doesVehicleExist(vehicle)){
        taskWarpCharIntoCarAsDriver(ped, vehicle);
    }
}

addCommandHandler("cveht", function(command, text){
    createVehicleNative();
});

// Using GTA Connected
addCommandHandler("createveh", function(command, text){
    let player = localPlayer;
    let playerPos = player.position;
    // Add 3 to the X and Y.
    let vehicleSpawnPos = [playerPos.x + 3, playerPos.y + 3, playerPos.z];
    let infernus = 418536135;
    let turismo = -1896659641;
    let sabre2 = 1264386590;
    let annihilator = 837858166;

    let pcj600 = -909201658;

    switch(text){
        case "1":
            var vehicle = gta.createVehicle(infernus, vehicleSpawnPos);
            // Warp the player into the vehicle
            player.warpIntoVehicle(vehicle, 0);
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
        default:
            message("Usage: /createveh <num>; 1: Infernus, 2: Turismo, 3: Sabre 2, 4: Annihilator, 5: PCJ 600");
            break;
    }
});
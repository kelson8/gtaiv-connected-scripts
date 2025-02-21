// This seems to work now on the client.

addCommandHandler("createcar", function(command, text) {
    // console.log("Test");
    // https://wiki.gtaconnected.com/Resources/GTASA/VehicleModels
    // https://wiki.gtaconnected.com/gta.createVehicle
    // 
    


    // let player = client.player;
    let player = localPlayer;
    // let playerPos = client.player.position;
    let playerPos = player.position;
    // Add 3 to the X and Y.
    let vehicleSpawnPos = [playerPos.x + 3, playerPos.y + 3, playerPos.z];
    // let vehicleSpawnPos = [car1posX, car1posY, car1posZ];

    let tempCar = 0

    // Create the vehicle
    // var vehicle = gta.createVehicle(415, vehicleSpawnPos);
    // Infernus GTA 4
    // https://wiki.gtaconnected.com/Resources/GTAIV/VehicleModels
    let infernus = 418536135;
    var vehicle = gta.createVehicle(infernus, vehicleSpawnPos);
    // TODO Figure out how to get natives to work with this.
    // let vehicle = natives.createCar(infernus, vehicleSpawnPos, tempCar, true);
    // var vehicle = natives.createCar(infernus, vehicleSpawnPos, false);
    addToWorld(vehicle);

    // Warp the player into the vehicle
    player.warpIntoVehicle(vehicle, 0);
});

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

// TODO Look into using switch statements for this.
addCommandHandler("createveh", function(command, text){
    let player = localPlayer;
    let playerPos = player.position;
    // Add 3 to the X and Y.
    let vehicleSpawnPos = [playerPos.x + 3, playerPos.y + 3, playerPos.z];
    let infernus = 418536135;
    let turismo = -1896659641;
    let sabre2 = 1264386590;

    // if(!text){
        // message("1: Infernus, 2: Turismo, 3: Sabre 2");
    // }

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
        default:
            message("1: Infernus, 2: Turismo, 3: Sabre 2");
            break;
    }
});
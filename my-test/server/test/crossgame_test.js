
// From v-sandbox
// TODO Figure out how exactly this works.
addNetworkHandler("kc.v.add", function (client, modelID, position, heading) {
    let tempVehicle = game.createVehicle(Number(modelID), position);
    tempVehicle.heading = heading;

    // Add the vehicle to the world
    addToWorld(tempVehicle);

    // These are a bit new to me
    // setTimeout(function() {
    //     tempVehicle.setData("kc.v.addedby", client, false);
    // }, 500);
});

// This actually works, tested on GTA 3.
addNetworkHandler("kc.a.admincheck", function (client) {
    if (client.administrator) {
        message("You are an admin");
    } else {
        message("You are not an admin");
    }
});

// Taken from v-sandbox in client/player.js
// TODO Figure out how to run these on other clients
// addNetworkHandler("kc.a.godmode", function (client) {
addCommandHandler("godtest", function (command, params, client) {
    if (!client.administrator) {
        messageClient(`You need to be an admin to use this command!`, client, errorMessageColour);
        return false;
    }

    triggerNetworkEvent("kc.a.god");
});

// TODO Fix this to work right, I moved it to the client command.
// addCommandHandler("weapon1", function (command, params, client) {
//     if (!client.administrator) {
//         messageClient(`You need to be an admin to use this command!`, client, errorMessageColour);
//         return false;
//     }

//     triggerNetworkEvent("kc.a.weapons");
// });
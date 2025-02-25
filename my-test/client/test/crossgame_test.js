// TODO Add command test for 3, Vice City, San Andreas and IV.
// Use if (game.game == GAME_GTA_IV) {

// TODO Try to use these functions
// TODO Document these functions a bit later.
/*
* https://wiki.gtaconnected.com/gta.createBlip
gta.createBlip

* https://wiki.gtaconnected.com/gta.createBlipAttachedTo
gta.createBlipAttachedTo

* https://wiki.gtaconnected.com/gta.createPed
gta.createPed

* https://wiki.gtaconnected.com/gta.createObject
gta.createObject

* https://wiki.gtaconnected.com/gta.createSphere
gta.createSphere

Particles:----------------
* https://wiki.gtaconnected.com/gta.createSingleParticle
gta.createSingleParticle

* https://wiki.gtaconnected.com/gta.addParticleEffect
gta.addParticleEffect

* https://wiki.gtaconnected.com/gta.addMovingParticleEffect
gta.addMovingParticleEffect

Player/Spawned peds:------------

* https://wiki.gtaconnected.com/ped.walkStyle
player.walkStyle

Weapons:----
* https://wiki.gtaconnected.com/ped.weaponState
player.weaponState


* https://wiki.gtaconnected.com/ped.weapon
player.weapon

* https://wiki.gtaconnected.com/ped.giveWeapon
player.giveWeapon

* https://wiki.gtaconnected.com/ped.getWeaponAmmunition
player.getWeaponAmmunition

* https://wiki.gtaconnected.com/ped.getWeaponClipAmmunition
player.getWeaponClipAmmunition

Element:------------
* https://wiki.gtaconnected.com/element.type
element.type


Game checking:------------
* https://wiki.gtaconnected.com/gta.paused
gta.paused



*/

//


// This actually works, tested on GTA 3.
// I finally somewhat figured out network events.
addCommandHandler("admincheck", function (command, params) {
    if (isConnected) {
        triggerNetworkEvent("kc.a.admincheck")
    } else {
        message("You are not connected to a server");
    }
});


//-------------------
// God mode event
//-------------------

let godMode = false;
addNetworkHandler("kc.a.god", function () {
    if (isConnected) {
        // if (client.administrator) {
        godMode = !godMode;
        localPlayer.invincible = godMode;
        // This concept seems useful, if the game is less then GAME_GTA_IV..
        if (game.game < GAME_GTA_IV) {
            localPlayer.setProofs(godMode, godMode, godMode, godMode, godMode);
        } else {
            natives.setCharProofs(localPlayer, godMode, godMode, godMode, godMode, godMode);
        }
        //triggerNetworkEvent("sb.p.god", localPlayer.id, godMode);

        let outputText = `You are ${(godMode) ? "now" : "no longer"} invincible`;
        message(outputText);
        return true;
        // }
    }
});

//-------------------
// Give weapon event
//-------------------

// https://wiki.gtaconnected.com/ped.giveWeapon
// https://wiki.gtaconnected.com/Defines/III#GTA_III_-_Weapon_Defines
// This almost works in GTA 3.
// TODO Why does this always give me an AK and baseball bat? The event fires off though.
// This gives all weapons in GTA SA also? I have no idea why I'm not doing a for loop
// addNetworkHandler("kc.a.weapons", function() {
//     let player = localPlayer;
//     let ammo = 999;

//     if(game.game == GAME_GTA_III) {
//         let ak47 = WEAPON_AK47;
//         let grenade = WEAPON_GRENADE;
//         // let rocketLauncher = WEAPON_ROCKETLAUNCHER;
//         let rocketLauncher = 8;

//         // TODO Fix this loop to work.
//         // for(let i = 0; i < grenade; i++) {
//             // player.giveWeapon(i, ammo, false);
//         // }
//         // player.giveWeapon(rocketLauncher, ammo, false);
//         // player.giveWeapon(grenade, ammo, false);
//         player.giveWeapon(weaponNames[game.game][9], ammo, false);
//     }

//     if(game.game == GAME_GTA_SA) {
//         // let grenade = 16;
//         let grenade = weaponNames[game.game][16];
//         player.giveWeapon(grenade, ammo, true);
//     }
// });

// Moved out of event test.
addCommandHandler("weapon1", function (command, params) {
    let player = localPlayer;
    let ammo = 999;

    if (game.game == GAME_GTA_III) {
        let ak47 = WEAPON_AK47;
        let grenade = WEAPON_GRENADE;
        // let rocketLauncher = WEAPON_ROCKETLAUNCHER;
        let rocketLauncher = 8;

        // TODO Fix this loop to work.
        // for(let i = 0; i < grenade; i++) {
        // player.giveWeapon(i, ammo, false);
        // }
        // player.giveWeapon(rocketLauncher, ammo, false);
        // player.giveWeapon(grenade, ammo, false);
        player.giveWeapon(weaponNames[game.game][9], ammo, false);
    }

    if (game.game == GAME_GTA_SA) {
        // let grenade = weaponNames[game.game][16];
        // Copied a bit of this from v-sandbox, under client/player.js
        // TODO Fix this
        let wep = getWeaponIdFromParams(params) || 1;
        // let wep = getWeaponIdFromParams(grenade) || 1;

        if (wep > weaponNames[game.game].length - 1 || wep < 0) {
            message("❗ Invalid weapon! Use /guns for weapon ID or use a name instead", errorMessageColour);
            return false;
        }


        player.giveWeapon(wep, ammo, true);
    }
});

//------------------
// Fade functions
//------------------

// TODO Figure out how to use this
// https://wiki.gtaconnected.com/gta.fadeCamera


function fadeScreenIn(time) {
    gta.fadeCamera(true, time, 0);
}

function fadeScreenOut(time) {
    gta.fadeCamera(false, time, 0);
}


// fadeTimer: int (This is the timer for the fadeScreenOut and fadeScreenIn functions)
// fadeScreenTime: int (This is the timer for the timeout of the screen fading back in.)
function fadeScreen(fadeTimer, fadeScreenTime) {
    fadeScreenOut(fadeTimer);
    setTimeout(() => {
        fadeScreenIn(fadeTimer);
    }, fadeScreenTime * 1000);
}

// Taken some of this from Lspawns server/main.js
// Screen fade time in seconds.
let fadeScreenTime = 2;
addCommandHandler("fade", function(command, params){
    fadeScreen(0.5, 2);
    // fadeScreenOut(0.5);
    // setTimeout(() => {
    //     fadeScreenIn(0.5);
    // }, fadeScreenTime * 1000);
    // fadeScreenIn(1.0);
    
});

//------------------
// Warps
//------------------

// From v-sandbox, player.js
// I refactored this code a bit, to make it easier to read
// I added a fade timer to this.
// TODO Figure out how exactly this is working
addCommandHandler("warp", function(command, params) {
    let player = localPlayer;
    let playerVeh = player.vehicle;
    let fadeTimer = 0.5

    for (let i in gameLocations[game.game]) {
        let loc0 = gameLocations[game.game][i][0];
        let loc1 = gameLocations[game.game][i][1];
        // if(gameLocations[game.game][i][0].toLowerCase().indexOf(params.toLowerCase()) != -1) {
        if(loc0.toLowerCase().indexOf(params.toLowerCase()) != -1) {
            if(playerVeh) {
                // playerVeh.position = gameLocations[game.game][i][1];
                playerVeh.position = loc1;
            } else {
                fadeScreenOut(fadeTimer);
                // These are somewhat new to me, or at least I haven't used them in a while.
                setTimeout(() => {
                    fadeScreenIn(fadeTimer);
                }, fadeScreenTime * 1000);
                // fadeScreen(0.5, 2);
                // player.position = gameLocations[game.game][i][1];
                player.position = loc1;
            }
            // message(`Teleported to ${gameLocations[game.game][i][0]}`)
            message(`Teleported to ${loc0}`)
            break;
        }
    }
});

//------------------
// Vehicle
//------------------

// This works on gta 3, it should work on all of the games.
// TODO Test this in GTA IV
function isPlayerInVehicle() {
    // if (game.game < GAME_GTA_IV) {
    let player = localPlayer;
    let currentVehicle = player.vehicle;

    if (currentVehicle) {
        // message("You are in a vehicle.");
        return true;
    } else {
        return false;
        // message("You are not in a vehicle.");
    }
    // }
}

addCommandHandler("explodeveh", function (command, params) {
    if (isPlayerInVehicle) {
        let player = localPlayer;
        let currentVehicle = player.vehicle;

        // Hmm, some fun.
        // This blows up the current vehicle.
        currentVehicle.blow();
    }

});

// https://wiki.gtaconnected.com/GameIdentifiers

// Vehicle model - String
// Vec3 - Position
// bool warpIntoVehicle (Toggle the player warping into the vehicle.)
// TODO Consolidate this function, I don't think I need all of these.
function createVehicleFunc(vehicle, vehicleSpawnPos, warpIntoVehicle) {
    // TODO Test a switch statement
    // switch(game.game){

    // }
    if (game.game == GAME_GTA_IV) {
        // IV Spawner
        var vehicle = gta.createVehicle(vehicle, vehicleSpawnPos);
        if (warpIntoVehicle) {
            player.warpIntoVehicle(vehicle, 0);
        }
    }

    if (game.game == GAME_GTA_VC) {
        // Vice City spawner
        var vehicle = gta.createVehicle(vehicle, vehicleSpawnPos);
        if (warpIntoVehicle) {
            player.warpIntoVehicle(vehicle, 0);
        }
    }

    if (game.game == GAME_GTA_III) {
        // III spawner
        var vehicle = gta.createVehicle(vehicle, vehicleSpawnPos);
        if (warpIntoVehicle) {
            player.warpIntoVehicle(vehicle, 0);
        }
    }

    if (game.game == GAME_GTA_SA) {
        // San Andreas spawner
        var vehicle = gta.createVehicle(vehicle, vehicleSpawnPos);
        if (warpIntoVehicle) {
            player.warpIntoVehicle(vehicle, 0);
        }
    }
}



// I mostly copied this from v-sandbox
// https://github.com/VortrexFTW/v-essentials/blob/master/v-sandbox/client/vehicle.js#L15-L168
// This seems to work on Vice City, 3, San Andreas, and IV.
// Hmm, I can implement a lot between all of the games above, this will be fun.
addCommandHandler("spawnvehgm", function (command, params) {
    // This cancels the message but it doesn't show this error message..
    let player = localPlayer;
    let playerPos = player.position;
    let vehicleSpawnPos = [playerPos.x + 3, playerPos.y + 3, playerPos.z];

    let modelId = getVehicleModelIdFromParams(params, game.game);
    let position = getPosInFrontOfPos(localPlayer.position, localPlayer.heading, 10.0);
    let heading = localPlayer.heading;

    if (isParamsInvalid(params)) {
        // TODO Fix error message to show up.
        message("Command: /" + String(command) + " <message>");
        return false;
    }

    if (game.game < GAME_GTA_IV) {
        if (!isValidVehicleModel(modelId)) {
            message("Invalid vehicle model!");
            return false;
        }
    }

    // Copied some of this from v-sandbox
    // switch (game.game) {
    if (game.game == GAME_GTA_III) {
        // case GAME_GTA_III:
        // Make sure boats only go in water!
        if (modelId == MODELVEHICLE_BOAT_PREDATOR || modelId == MODELVEHICLE_BOAT_GHOST || modelId == MODELVEHICLE_BOAT_REEFER || modelId == MODELVEHICLE_BOAT_SPEEDER) {
            if (game.findGroundZForCoord(position.x, position.y) != 20) {
                message("You need to be next to water to spawn a boat!", errorMessageColour);
                return false;
            }
        }


        // Make sure it isn't a heli
        if (modelId == MODELVEHICLE_HELI_CHOPPER || modelId == MODELVEHICLE_HELI_ESCAPE) {
            if (!onlineHelicoptersEnabled) {
                message("Helicopters have been disabled on this server!", errorMessageColour);
                return false;
            }
        }

        // Make sure it isn't a train
        if (modelId == MODELVEHICLE_TRAIN_TRAIN) {
            message("Use /train to spawn a train!", errorMessageColour);
            return false;
        }

        // Make sure it isn't an airtrain or deaddodo
        if (modelId == MODELVEHICLE_PLANE_AIRTRAIN || modelId == MODELVEHICLE_PLANE_DEADDODO) {
            message("That vehicle has been been disabled!", errorMessageColour);
            return false;
        }
        // break; // GAME_GTA_III
    }

    if (game.game == GAME_GTA_VC) {
        // case GAME_GTA_VC:
        // Make sure boats only go in water!
        if (modelId == MODELVEHICLE_BOAT_COASTG || modelId == MODELVEHICLE_BOAT_DINGHY || modelId == MODELVEHICLE_BOAT_JETMAX || modelId == MODELVEHICLE_BOAT_MARQUIS || modelId == MODELVEHICLE_BOAT_PREDATOR || modelId == MODELVEHICLE_BOAT_REEFER || modelId == MODELVEHICLE_BOAT_RIO || modelId == MODELVEHICLE_BOAT_SKIMMER || modelId == MODELVEHICLE_BOAT_SQUALO || modelId == MODELVEHICLE_BOAT_TROPIC) {
            if (game.findGroundZForCoord(position.x, position.y) != 20) {
                message("You need to be next to water to spawn a boat or skimmer!", errorMessageColour);
                return false;
            }
        }
        // break; // GAME_GTA_VC

    }

    if (game.game == GAME_GTA_IV) {


        // case GAME_GTA_IV:
        // Make sure it isn't a train
        if (modelId == MODEL_SUBWAY_HI || modelId == MODEL_SUBWAY_LO || modelId == MODEL_CABLECAR) {
            message("Use /train to spawn a train!", errorMessageColour);
            return false;
        }
        // break; // GAME_GTA_IV
    }

    let thisVeh = false;
    if (game.game == GAME_GTA_IV) {
        thisVeh = createVehicle2(modelId, position, true);
        thisVeh.heading = heading;
        // lastVehicleSpawn = getCurrentUnixTimestamp();
    } else {
        // Check if player is connected to a server, hmm, for offline usage too?
        // https://wiki.gtaconnected.com/isConnected
        if (isConnected) {
            triggerNetworkEvent("kc.v.add", modelId, position, heading);
        } else {
            thisVeh = game.createVehicle(modelId, position, heading);
            thisVeh.heading = heading;
        }
    }

    // if(isValidVehicleModel(text[1])){
    //     createVehicleFunc(text[1], vehicleSpawnPos, false);
    // }
});
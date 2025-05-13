// TODO Test these, make these set some hospital respawns on startup

// TODO Figure out what is overriding these, sometimes I spawn at the hospital but get sent back to party mode spawn.
// Also tested in v-spawn

// Unsure if this is working, doesn't seem to set my respawn.
bindEventHandler("OnResourceStart", thisResource, function(event, resource) {
    // SetPoliceRespawns();

    // Original script values:
    /*
    SetPoliceRespawns( 0, 0, 1232.57200000, -89.69760000, 27.02420000, 270.80440000 );
    SetPoliceRespawns( 1, 0, 896.84080000, -355.56640000, 16.63910000, 317.92790000 );
    SetPoliceRespawns( 2, 0, 1232.19200000, 517.28770000, 27.57370000, 176.10820000 );
    SetPoliceRespawns( 3, 0, 2172.29900000, 449.18780000, 5.08020000, 271.42560000 );
    SetPoliceRespawns( 4, 1, 991.06670000, 1877.50400000, 22.89280000, 25.88270000 );
    SetPoliceRespawns( 5, 1, 435.26210000, 1594.44800000, 15.33110000, 9.17450000 );
    SetPoliceRespawns( 6, 2, 85.57061000, 1189.12600000, 13.75600000, 203.16790000 );
    SetPoliceRespawns( 7, 2, -416.83880000, 1102.39600000, 10.72210000, 201.71590000 );
    SetPoliceRespawns( 8, 2, 48.41780000, 679.95230000, 13.66270000, 88.55010000 );
    SetPoliceRespawns( 9, 2, -416.18250000, 278.27630000, 10.95020000, 200.56330000 );
    SetPoliceRespawns( 10, 2, 224.55200000, -215.17490000, 9.73680000, 205.17850000 );
    SetPoliceRespawns( 11, 2, -378.14180000, -263.86910000, 10.04100000, 245.03360000 );
    SetPoliceRespawns( 12, 3, -924.12320000, 1265.74300000, 23.57260000, 137.19690000 );
    SetPoliceRespawns( 13, 3, -1716.64400000, 276.68920000, 21.20240000, 250.00490000 );
    SetPoliceRespawns( 14, 3, -1223.23600000, -233.32100000, 2.03350000, 308.33580000 );
    */

    /*
    SetHospitalRespawns( 0, 0, 1190.96500000, 201.09010000, 31.59560000, 148.37250000 );
    SetHospitalRespawns( 1, 0, 1242.93900000, 497.13550000, 27.41460000, 28.45530000 );
    SetHospitalRespawns( 2, 1, 975.74330000, 1822.26000000, 19.09530000, 87.84350000 );
    SetHospitalRespawns( 3, 2, -391.22820000, 1280.00800000, 22.05360000, 225.15350000 );
    SetHospitalRespawns( 4, 2, 94.86770000, 147.33100000, 13.77200000, 185.87280000 );
    SetHospitalRespawns( 5, 3, -1306.34600000, 1286.18800000, 20.77930000, 312.24850000 );
    SetHospitalRespawns( 6, 3, -1512.16900000, 400.12190000, 18.67960000, 315.57750000 );
    */

    // For some reason these don't work in here
    let hospital1Position = [1190.96500000, 201.09010000, 31.59560000];
    let hospital1PositionX = 1190.965;
    let hospital1PositionY = 201.090;
    let hospital1PositionZ = 31.595;

    let hospital1Heading = 148.37250000;
    let hospital1ID = 0;
    SetHospitalRespawns(hospital1PositionX, hospital1PositionY, hospital1PositionZ, hospital1Heading, hospital1ID);

    natives.overrideNextRestart(hospital1Position, hospital1Heading);
    // natives.OVERRIDE_NEXT_RESTART(1190.96500000, 201.09010000, 31.59560000, hospital1Heading);
});


// float posX, float posY, float posZ, float posHeading, int policeStationID
// function SetPoliceRespawns(posX, posY, posZ, posHeading, policeStationID){
//     let position = [posX, posY, posZ];
//     // natives.addPoliceRestart(posX, posY, posZ, posHeading, policeStationID);
//     // natives.addPoliceRestart(position, posHeading, policeStationID);
//     natives.addPoliceRestart(position, 1.0, policeStationID);
// }

function SetHospitalRespawns(posX, posY, posZ, posHeading, hospitalID){
    // let position = [posX, posY, posZ];
    // let position = toVector3(posX, posY, posZ);
    let position = new Vec3(posX, posY, posZ);

    // toVector3(scaleFactor.x, scaleFactor.y, scaleFactor.z)
    // natives.addHospitalRestart(position, posHeading, hospitalID);
    // natives.addHospitalRestart(position, 1.0, hospitalID);
    natives.addHospitalRestart(position, 1.0, 0);
}

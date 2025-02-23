// https://gtamods.com/wiki/Weather_(GTA_IV)
let extraSunny = 0;
let sunny = 1;
let sunnyAndWindy = 2;
let cloudy = 3;
let raining = 4;
let drizzle = 5;
let foggy = 6;
let thunderstorm = 7;
let extraSunny2 = 8;
let sunnyAndWindy2 = 9;

// This works for changing the weather type.
addCommandHandler("weather", function(command, text) {
    switch(text){
        case "sunny":
            gta.forceWeather(sunny);
            break;
        case "rain":
            gta.forceWeather(raining);
            break;
        case "storm":
            gta.forceWeather(thunderstorm);
            break;
        // default:
            // message("Weather list");
    }
});
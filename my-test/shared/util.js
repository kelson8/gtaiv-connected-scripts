// Most items from here came from util.js in the v-sandbox resource.
// https://github.com/VortrexFTW/v-essentials/blob/master/v-sandbox/shared/util.js
// Please check out the author of those example scripts for most of this stuff.
// I will be using it in my project.

// DONT TOUCH THIS
let thisGame = (typeof server == "undefined") ? game.game : server.game;
let isServer = (typeof server == "undefined") ? false : true;

// ----------------------------------------------------------------------------

// exportFunction("getSkinName", getSkinNameFromId);
// exportFunction("getVehicleModelName", getVehicleNameFromModelId);

// ----------------------------------------------------------------------------


//------------------
// Game locations
//------------------

let gameLocations = [
	[],

	[ // GTA III
		// Police Stations
		["Portland Police Station", [1143.875, -675.1875, 14.97], 0.0, [1127.95, -666.06, 14.413]],
		["Staunton Island Police Station", [340.25, -1123.375, 25.98], 0.0, null],
		["Shoreside Vale Police Station", [-1253.0, -138.1875, 58.75], 0.0, null],

		// Hospitals
		["Portland Hospital", [1144.25, -596.875, 14.97], 0.0, [1127.64, -586.84, 14.414]],
		["Staunton Island Hospital", [183.5, -17.75, 16.21], 0.0, null],
		["Shoreside Vale Hospital", [-1259.5, -44.5, 58.89], 0.0, null],

		// Fire Stations
		["Portland Fire Station", [1103.70, -52.45, 7.49], 0.0, null],
		["Staunton Island Fire Station", [-78.48, -436.80, 16.17], 0.0, null],
		["Shoreside Vale Fire Station", [-1202.10, -14.67, 53.20], 0.0, null],

		// Pay and Sprays
		["Portland Pay and Spray", [925.4, -360.3, 10.83], 0.0, [928.35, -335.53, 9.413]],
		["Staunton Island Pay and Spray", [381.8, -493.8, 25.95], 0.0, null],
		["Shoreside Vale Pay and Spray", [-1142.4, 35.01, 58.61], 0.0, null],

		// Ammunations
		["Portland Ammunation", [1068.3, -400.9, 15.24], 0.0, null],
		["Staunton Island Ammunation", [348.2, -717.9, 26.43], 0.0, null],

		// Train Stations
		["Bedford Point Train Station (Subway)", [178.52, -1551.40, 26.162], -3.105, [188.24, -1603.86, 25.700]],
		["Francis International Airport Train Station (Subway)", [-633.42, -760.06, 18.919], 1.586, [-693.17, -725.14, 8.313]],
		["Rockford Train Station (Subway)", [225.66, -69.07, 20.998], -3.115, [227.01, -59.56, 20.697]],
		["Saint Marks Train Station (Portland EL)", [1306.69, -512.38, 40.078], -2.458, [1312.85, -506.36, 40.641]],
		["Hepburn Heights Train Station (Portland EL)", [1029.07, -164.18, 4.972], 0.005, [1020.75, -166.69, 4.412]],
		["Chinatown Train Station (Portland EL)", [775.27, -622.28, 14.747], 0.006, [812.43, -630.49, 14.413]],

		// Safehouses
		["Portland Safehouse", [885.52, -308.47, 8.615], -1.532, [839.16, -298.12, 4.717]],

		// Other
		["St Mathias College", [201.59, -281.42, 15.779], -0.005, null],
		["Newport Parking Garage", [294.22, -547.87, 25.780], 3.119, null],
		["City Hall", [96.60, -951.61, 26.168], 3.138, null],
		["Belleville Park East", [109.15, -695.76, 26.168], 1.594, null],
		["Belleville Park Bathroom", [38.69, -724.96, 22.756], -3.104, null],
		["Belleville Park West", [0.40, -773.05, 26.056], -1.476, null],
		["Stadium Entrance", [-18.65, -231.80, 29.861], 0.002, null],
		["Kenji's Casino", [454.10, -1421.26, 26.124], -0.769, null],
		["Saint Marks Bistro", [1345.48, -457.41, 49.549], 1.537, null],
		["Leone Mansion", [1417.94, -194.18, 49.905], -1.570, [1378.31, -296.16, 49.414]],
		["Ciprianis Ristorante", [1202.50, -320.78, 24.973], -1.553, [1199.28, -321.10, 24.413]],
		["Luigi's Club", [904.82, -425.37, 14.929], 1.602, [907.36, -423.80, 14.413]],
		["Portland Fuel Station", [1157.34, -75.45, 7.065], -0.027, null],
		["Easy Credit Autos", [1217.81, -113.87, 14.973], -3.051, null],
		["Head Radio Headquarters", [986.40, -46.40, 7.473], -1.615, null],
		["Borgnine Taxi Headquarters", [929.36, -48.59, 7.473], -2.935, null],
		["Fuzz Ball", [1000.03, -877.82, 14.547], -3.136, null],
		["Portland Docks", [1360.55, -818.08, 14.415], -1.574, [1356.94, -816.28, 14.413]],
		["Punk Noodle Diner", [1040.10, -653.10, 14.973], 1.551, [1042.29, -656.87, 14.413]],
		["Greasy Joe's Diner", [864.45, -999.86, 4.646], -0.020, null],
		["Hepburn Heights Projects", [913.98, -227.83, 4.413], 0.001, null],
	],

	[ // GTA VC
		// Police Stations
		["Washington Beach Police Station", [399.77, -468.90, 11.73], 0.0, null],
		["Vice Point Police Station", [508.96, 512.07, 12.10], 0.0, null],
		["Downtown Police Station", [-657.43, 762.31, 11.59], 0.0, null],
		["Little Havana Police Station", [-885.08, -470.44, 13.11], 0.0, null],

		// Hospitals
		["Downtown Hospital", [-822.57, 1152.82, 12.41], 0.0, null],
		["Little Havana Medical Center", [-885.08, -470.44, 13.11], 0.0, null],
		["Ocean Beach Hospital", [-133.19, -980.76, 10.46], 0.0, null],

		// Misc/Other
		["Paper Products", [-1085.83, -232.72, 11.446], -3.139, null],
		["Little Haiti Slums", [-958.90, 116.41, 9.300], 0.031, null],
		["Kaufman Cabs", [-1013.35, 198.70, 11.266], -1.680, null],
		["Moist Palms Hotel", [-703.50, 545.30, 11.099], -3.105, null],
		["North Point Mall", [486.50, 1124.89, 16.348], 1.610, null],
		["Ocean View Hotel", [238.14, -1280.48, 11.071], 1.282, null],
		["Ocean Beach Fuel Station", [63.32, -1074.50, 10.006], 0.102, null],
		["Ken Rosenberg's Office", [115.48, -823.76, 10.463], -2.221, null]

		// Bar, Restaurants and Food
		["Little Havana Donut Shop", [-856.28, -649.32, 11.047], 1.700, null],
		["Robina's Cafe", [-1170.36, -604.25, 11.640], -2.973, null],
		["Biker Bar", [-601.72, 654.60, 11.073], -1.463, null],

		// Clubs
		["Malibu Club", [492.23, -81.41, 11.261], -2.306, null],
		["Poll Position Club", [100.09, -1477.78, 10.432], 0.484, null],

		// Tool Shops
		["Little Havana Tool Shop", [-969.01, -684.27, 11.456], -2.994, null],
		["Washington Beach Tool Shop", [197.83, -486.04, 11.127], 0.000, null]

		// Gunshops
		["Ocean Beach Ammunation", [-53.41, -1482.25, 10.293], 1.441, null],

		// Pay-n-sprays
		["Ocean Beach Pay-n-spray", [-18.51, -1256.76, 10.463], -1.556, null]

	],

	[ // GTA SA
		// Police Stations
		["Los Santos Police Department", [1545.53, -1675.64, 13.561], -1.575, null],
		["San Fierro Police Department", [-1605.16, 720.79, 11.90], 0.0, null],
		["Las Venturas Police Department", [2339.68, 2453.99, 14.97], 0.0, null],

		// Ammunations
		["Market Ammunation", [1364.84, -1283.79, 13.547], -0.541, null],

		// Hospitals
		["All Saints General Hospital", [1182.67, -1323.81, 13.579], 1.543, null],
		["County General Hospital", [2034.7567, -1403.1083, 17.2931], 0.0, null],

		// Strip Clubs
		["Pig Pen Strip Club", [2420.906982, -1222.321777, 25.348423], 0.0, null],

		// Night/Dance Clubs
		["Club Tableau", [551.877502, -1506.095581, 14.550004], 1.0, null],
		["Club Alhambra", [1832.55, -1681.91, 13.510], -1.561, null],

		// Bars
		["Ten Green Bottles Bar", [2305.922363, -1646.797241, 14.461124], 1.0, null],

		// Restaurants and Food
		["Market Donut Shop", [1040.932006, -1336.229492, 13.550251], 1.0, null],
		["Idlewood Pizza Stack", [2099.827636, -1806.375610, 13.554687], 0.0, null],
		["Temple Burger Shot", [1212.020019, -924.311462, 42.930198], 1.0, null],

		// Clothes Shops
		["Ganton Binco", [2244.837402, -1664.232299, 15.476562], 1.0, null],
		["Los Santos Victim ", [456.31, -1501.53, 31.041], -1.378, null],
		["Los Santos Didier Sachs", [449.68, -1479.94, 30.639], -1.149, null],
		["ProLaps Los Santos", [502.37, -1355.58, 16.133], 2.659, null],
		["Market Cluckin Bell", [923.53, -1352.72, 13.377], -1.596, null],
		["Marina Burger Shot", [816.55, -1617.00, 13.859], 1.396, null],

		// Airports
		["Los Santos International Airport Gate", [1958.201049, -2182.789794, 13.546875], 1.0, null],
		["Los Santos International Airport Runway", [2054.12, -2493.84, 13.547], 1.569, null],
		["Los Santos Stadium", [2694.261474, -1703.194335, 11.506717], 1.0, null],

		// Sex Shops
		["El Corona Sex Shop", [1944.994873, -2116.641113, 13.550632], 1.0, null],
		["Temple Sex Shop", [1090.181884, -927.265869, 43.182197], 1.0, null],
		["Market Sex Shop", [1090.181884, -927.265869, 43.182197], 1.0, null]

		// Misc/Other
		["Grotti Dealership", [540.6011, -1291.2489, 17.2422], 0.0, null],
		["Santa Maria Beach", [302.994567, -1900.099121, 1.938840], 0.0, null],
		["Glen Park Bridge", [1968.33, -1195.10, 25.70], 0.0, null],
		["Los Santos Skate Park", [1865.96, -1380.53, 13.50], 0.0, null],
		["Los Santos Garbage Dump", [2194.91, -1977.58, 13.55], 0.0, null],

		// Train Stations
		["Unity Station", [1742.60, -1859.98, 13.414], -3.112, null],
		["Market Station", [814.26, -1345.38, 13.532], -1.624, null],
	],

	[ // GTA UG
		// Coming Soon!
	],

	[ // GTA IV
		// Police Stations
		["Broker Police Station", [894.99, -357.39, 18.185], 2.923, null],
		["South Bohan Police Station", [435.40, 1592.29, 17.353], 3.087, null],
		["Northern Gardens Police Station", [974.93, 1870.45, 23.073], -1.621, null],
		["South Slopes Police Station", [1233.25, -89.13, 28.034], 1.568, null],
		["Middle Part East Police Station", [50.12, 679.88, 15.316], 1.569, null],
		["East Holland Police Station", [85.21, 1189.82, 14.755], 3.127, null],
		["Francis International Airport Police Station", [2170.87, 448.87, 6.085], 1.501, null],
		["Chinatown Police Station", [213.12, -211.70, 10.752], 0.200, null],
		["Acter Police Station", [-1714.95, 276.31, 22.134], 1.127, null],
		["Port Tudor Police Station", [-1220.73, -231.53, 3.024], 2.210, null],
		["Leftwood Police Station", [-927.66, 1263.63, 24.587], -0.913, null],

		// Fire Stations
		["Broker Fire Station", [953.13, 95.90, 35.004], 1.595, null],
		["Northwood Fire Station", [-271.02, 1542.15, 20.420], -1.160, null],
		["Northern Gardens Fire Station", [1120.47, 1712.36, 10.534], -0.682, null],
		["Francis International Airport Fire Station", [2364.87, 166.83, 5.813], 0.156, null],
		["Chinatown Fire Station", [295.40, -336.88, 4.963], 2.887, null],
		["Berchem Fire Station", [-1574.90, 546.54, 25.449], -0.509, null],
		["Tudor Fire Station", [-2144.97, 164.15, 12.051], -2.149, null],

		// Safehouses
		["Hove Beach Safehouse Parking", [904.27, -498.00, 14.522], 3.127, null],
		["South Bohan Safehouse", [589.42, 1402.15, 10.364], 0.007, null],

		// Hospitals
		["Schottler Medical Center", [1199.59, 196.78, 33.554], 1.633, null],
		["Northern Gardens Medical Center", [980.71, 1831.61, 23.898], -0.049, null],
		["Leftwood Hospital", [-1317.27, 1277.20, 22.370], 2.246, null],
		["Acter Medical Center", [-1538.43, 344.58, 20.943], -0.156, null],

		// Fuel Stations
		["Hove Beach Fuel Station", [1128.51, -359.55, 18.441], -0.052, null],
		["Lancaster Fuel Station", [108.37, 1135.13, 13.975], 0.007, null],
		["The Meat Quarter Fuel Station", [-434.30, -19.47, 9.864], 1.469, null],
		["Cerveza Heights Fuel Station", [1123.50, 328.84, 29.245], -0.154, null],
		["Tudor Fuel Station", [-1389.91, 29.19, 6.875], 0.982, null],

		// Restaurants
		["Star Junction Burger Shot", [-174.00, 276.96, 14.818], -0.029, null],
		["South Bohan Burger Shot", [441.95, 1516.64, 16.289], -2.682, null],
		["Industrial Burger Shot", [1096.93, 1598.33, 16.721], -2.289, null],

		// Night Clubs/Strip Clubs/Bars
		["Perestroika Club", [957.58, -292.58, 19.644], -0.009, null],
		["Triangle Club", [1210.90, 1718.18, 16.667], 1.819, null],
		["Bahama Mamas Club", [-387.33, 412.33, 5.674], 2.997, null],
		["Maisonette Club", [-482.28, 155.56, 7.555], -1.559, null],

		// TW@ Cafes
		["Outlook Internet Cafe", [977.42, -169.11, 24.013], 1.844, null],
		["Berchem Internet Cafe", [-1584.46, 466.05, 25.398], -2.441, null],

		// Pay-n-Sprays
		["Hove Beach Pay-n-Spray", [1058.57, -282.58, 20.760], -3.135, null],
		["Leftwood Pay-n-Spray", [-1148.69, 1171.52, 16.457], -0.059, null],

		// Clothes Shops
		["Hove Beach Russian Clothes Shop", [896.31, -442.59, 15.888], 1.500, null],

		// Car Wash
		["Willis Car Wash", [1831.02, 360.20, 22.061], -1.515, null],
		["Tudor Car Wash", [-1371.68, 35.13, 7.028], 1.029, null],

		// Gun Shops
		["Downtown Broker Gun Shop", [1054.11, 86.84, 33.408], -1.574, null],
		["Chinatown Gun Shop", [65.43, -342.36, 14.767], -1.589, null],
		["Port Tudor Gun Shop", [-1338.77, 307.61, 13.378], -1.530, null],

		// Train Stations
		["Hove Beach Train Station", [1000.41, -544.82, 14.854], -1.576, null],
		["Schottler Train Station", [1303.93, -37.75, 28.377], 3.065, null],
		["Cerveza Heights Train Station", [1386.87, 374.13, 23.063], 3.111, null],
		["Lynch Street Train Station", [1594.73, 364.80, 25.226], -0.965, null],
		["East Park Train Station", [-35.78, 634.79, 14.663], -0.050, null],
		["West Park Train Station", [-377.13, 677.05, 14.679], -0.069, null],
		["North Park Train Station", [-135.08, 1153.95, 14.773], -1.567, null],
		["Vespucci Circus Train Station", [-85.11, 1427.04, 20.421], 1.501, null],
		["Frankfort Low Train Station", [-331.94, 1427.05, 12.617], 1.541, null],
		["Frankfort High Train Station", [-343.79, 1433.12, 12.283], 0.113, null],
		["Vauxite Train Station", [-483.38, 1333.91, 17.481], 1.509, null],
		["Quartz Street West Train Station", [-545.54, 926.22, 9.945], -1.524, null],
		["Manganese West Train Station", [-461.60, 530.56, 9.857], 3.091, null],
		["Frankfort Ave Train Station", [-377.52, 371.91, 14.762], -3.125, null],
		["Suffolk Train Station", [-252.77, -171.83, 14.447], 1.594, null],
		["Feldspar Train Station", [-350.62, -335.35, 4.909], -2.287, null],
		["City Hall Train Station", [-115.31, -501.22, 14.755], -1.365, null],
		["Castle Gardens Train Station", [82.95, -757.81, 4.965], -1.006, null],
		["Emerald Train Station", [116.57, -318.15, 14.768], 1.499, null],
		["Easton Train Station", [-35.76, -18.50, 14.769], 3.137, null],
		["Manganese East Train Station", [131.46, 522.74, 14.661], 0.005, null],
		["Quartz Street East Train Station", [134.35, 910.15, 14.717], -0.112, null],
		["San Quentin Ave Train Station", [373.12, 1625.93, 16.347], -2.249, null],
		["Windmill Street Train Station", [749.97, 1447.44, 14.252], -0.120, null],
		["Francis International Airport Train Station", [2297.57, 474.62, 6.086], 0.066, null],

		// Misc
		["Hove Beach Laundromat", [1011.74, -325.33, 20.339], -1.402, null],
		["The Exchange Docks", [-354.68, -661.62, 4.791], 2.066, null],
		["Firefly Island Bowling", [1198.99, -681.49, 16.445], -0.017, null],
		["Broker Bus Depot", [1004.15, 279.19, 31.512], -2.193, null],
		["The Lost MC Clubhouse", [-1713.29, 358.25, 25.449], 2.566, null],
		["Alderney State Correctional Facility (Prison)", [-1155.21, -374.34, 2.885], -1.680, null],
		["Chinatown Bank of Liberty", [-34.92, -466.80, 14.75], -1.52, null],
		["Suffolk Church", [-274.30, -281.63, 14.36], 1.56],
		["Francis International Airport Runway", [2610.75, 262.42, 5.875], 2.381, null],
		["Happiness Island", [-621.81, -963.22, 4.843], -0.109, null],

		// More will be added soon!
	],
];

//------------------
// Weapons
//------------------

let weaponNames = [
	["Unknown"], // Game 0 is invalid (GTA 3 is the first game, and is ID 1)

	[ // GTA III
		"Fist",
		"Bat",
		"Pistol",
		"Uzi",
		"Shotgun",
		"AK47",
		"M16",
		"Sniper Rifle",
		"Rocket Launcher",
		"Flamethrower",
		"Molotov",
		"Grenade"
	],

	[ // GTA VC
		"Fist",
		"Brass Knuckles",
		"Screwdriver",
		"Golf Club",
		"Nitestick",
		"Knife",
		"Baseball Bat",
		"Hammer",
		"Meat Cleaver",
		"Machete",
		"Katana",
		"Chainsaw",
		"Grenade",
		"Remote Grenade",
		"Teargas",
		"Molotov Cocktail",
		"Missile",
		"Colt .45",
		"Python",
		"Shotgun",
		"Spaz Shotgun",
		"Stubby Shotgun",
		"Tec-9",
		"Uzi",
		"Ingram",
		"MP5",
		"M4",
		"Ruger",
		"Sniper Rifle",
		"Laser Sniper",
		"RPG",
		"Flame Thrower",
		"M60",
		"Minigun"
	],

	[ // GTA San Andreas
		"Fist",
		"Brass Knuckles",
		"Golf Club",
		"Nightstick",
		"Knife",
		"Baseball Bat",
		"Shovel",
		"Pool Cue",
		"Katana",
		"Chainsaw",
		"Purple Dildo",
		"Dildo",
		"Vibrator",
		"Silver Vibrator",
		"Flowers",
		"Cane",
		"Grenade",
		"Teargas",
		"Molotov Cocktail",
		"Unknown",
		"Unknown",
		"Unknown",
		"9mm",
		"Silenced 9mm",
		"Desert Eagle",
		"Shotgun",
		"Sawnoff Shotgun",
		"Combat Shotgun",
		"Uzi",
		"MP5",
		"AK-47",
		"M4",
		"Tec-9",
		"Country Rifle",
		"Sniper Rifle",
		"RPG",
		"HS Rocket",
		"Flamethrower",
		"Minigun",
		"Satchel Charge",
		"Detonator",
		"Spraycan",
		"Fire Extinguisher",
		"Camera",
		"Night Vision Goggles",
		"Thermal Goggles",
		"Parachute",
		"Cellphone",
		"Jetpack",
		"Skateboard"
	],

	[ // GTA Underground
		"Fist",
		"Brass Knuckles",
		"Golf Club",
		"Nightstick",
		"Knife",
		"Baseball Bat",
		"Shovel",
		"Pool Cue",
		"Katana",
		"Chainsaw",
		"Purple Dildo",
		"Dildo",
		"Vibrator",
		"Silver Vibrator",
		"Flowers",
		"Cane",
		"Grenade",
		"Teargas",
		"Molotov Cocktail",
		"Unknown",
		"Unknown",
		"Unknown",
		"9mm",
		"Silenced 9mm",
		"Desert Eagle",
		"Shotgun",
		"Sawnoff Shotgun",
		"Combat Shotgun",
		"Uzi",
		"MP5",
		"AK-47",
		"M4",
		"Tec-9",
		"Country Rifle",
		"Sniper Rifle",
		"RPG",
		"HS Rocket",
		"Flamethrower",
		"Minigun",
		"Satchel Charge",
		"Detonator",
		"Spraycan",
		"Fire Extinguisher",
		"Camera",
		"Night Vision Goggles",
		"Thermal Goggles",
		"Parachute",
		"Cellphone",
		"Jetpack",
		"Skateboard",
	],

	[ // GTA IV
		"Fist",
		"Bat",
		"Pool Cue",
		"Knife",
		"Grenade",
		"Molotov",
		"Rocket",
		"Pistol",
		"UNUSED",
		"Desert Eagle",
		"Stubby Shotgun",
		"Baretta Shotgun",
		"Micro Uzi",
		"MP5",
		"AK-47",
		"M4",
		"Combat Sniper",
		"M40A1",
		"RPG",
		"Flamethrower",
		"Minigun",
		"EFLC Weapon 1",
		"EFLC Weapon 2",
		"EFLC Weapon 3",
		"EFLC Weapon 4",
		"EFLC Weapon 5",
		"EFLC Weapon 6",
		"EFLC Weapon 7",
		"EFLC Weapon 8",
		"EFLC Weapon 9",
		"EFLC Weapon 10",
		"EFLC Weapon 11",
		"EFLC Weapon 12",
		"EFLC Weapon 13",
		"EFLC Weapon 14",
		"EFLC Weapon 15",
		"EFLC Weapon 16",
		"EFLC Weapon 17",
		"EFLC Weapon 18",
		"EFLC Weapon 19",
		"EFLC Weapon 20",
		"EFLC Weapon 21",
		"EFLC Weapon 22",
		"EFLC Weapon 23",
		"EFLC Weapon 24",
		"Camera",
	],

	[ // GTA IV (EFLC)
		"Fist",
		"Bat",
		"Pool Cue",
		"Knife",
		"Grenade",
		"Molotov",
		"UNUSED",
		"Pistol",
		"Desert Eagle",
		"Stubby Shotgun",
		"Baretta Shotgun",
		"Shotgun",
		"Micro Uzi",
		"MP5",
		"AK-47",
		"M4",
		"Combat Sniper",
		"M40A1",
		"RPG",
		"Flamethrower",
		"Minigun",
		"EFLC Weapon 1",
		"EFLC Weapon 2",
		"EFLC Weapon 3",
		"EFLC Weapon 4",
		"EFLC Weapon 5",
		"EFLC Weapon 6",
		"EFLC Weapon 7",
		"EFLC Weapon 8",
		"EFLC Weapon 9",
		"EFLC Weapon 10",
		"EFLC Weapon 11",
		"EFLC Weapon 12",
		"EFLC Weapon 13",
		"EFLC Weapon 14",
		"EFLC Weapon 15",
		"EFLC Weapon 16",
		"EFLC Weapon 17",
		"EFLC Weapon 18",
		"EFLC Weapon 19",
		"EFLC Weapon 20",
		"EFLC Weapon 21",
		"EFLC Weapon 22",
		"EFLC Weapon 23",
		"EFLC Weapon 24",
		"Camera",
	],
];

//------------------
// Game announce colours
//------------------

let gameAnnounceColours = [
	COLOUR_BLACK,					// Invalid
	COLOUR_SILVER,					// GTA III
	COLOUR_AQUA,					// GTA Vice City
	COLOUR_ORANGE,					// GTA San Andreas
	COLOUR_ORANGE,					// GTA Underground
	COLOUR_SILVER,					// GTA IV
	COLOUR_SILVER					// GTA IV (EFLC)
];


//------------------
// Game garages
//------------------

let gameGarages = [
	false,
	[ // GTA III
		// Name									Location Name							Position						Opened
		["Car Crusher Garage", "Harwood, Portland", [], true],
		["Safe House", "Red Light District, Portland", [], true],
		["Import/Export Garage", "Portland Harbor, Portland", [], true],
		["8 Balls Bomb Shop", "Harwood, Portland", [], true],
		["Pay-n-Spray", "Red Light District, Portland", [], true],
		["Salvatore's Garage", "Saint Mark's, Portland", [], true],
		["Securicar Garage", "Portland Harbor, Portland", [], true],
		["Luigi's Lockup", "Portland View, Portland", [], true],
		["Safe House", "Belleville Park, Staunton Island", [], true],
		["8 Balls Bomb Shop", "Newport, Staunton Island", [], true],
		["Pay-n-Spray", "Newport, Staunton Island", [], true],
		["Ray's Lockup", "Bedford Point, Staunton Island", [], true],
		["Witness Protection Safe House", "Newport, Staunton Island", [], true],
		["Kenji's Lockup", "Newport, Staunton Island", [], true],
		["Columbian Garage 1", "Aspatria, Staunton Island", [], true],
		["Columbian Garage 2", "Aspatria, Staunton Island", [], true],
		["Columbian Garage 3", "Aspatria, Staunton Island", [], true],
		["Columbian Garage 4", "Aspatria, Staunton Island", [], true],
		["Columbian Garage 5", "Aspatria, Staunton Island", [], true],
		["Yardie's Lockup", "Newport, Staunton Island", [], true],
		["Safe House", "Wichita Gardens, Shoreside Vale", [], true],
		["Pay-n-Spray", "Pike Creek, Shoreside Vale", [], true],
		["8 Balls Bomb Shop", "Pike Creek, Shoreside Vale", [], true],
		["Import/Export Garage", "Pike Creek, Shoreside Vale", [], true],
		["Hoodz's Bomb Defusal Garage", "Saint Mark's, Portland", [], true],
		["Platinum Dropoff Garage", "Pike Creek, Shoreside Vale", [], true],
		["Donald Love's Stash Garage", "Pike Creek, Shoreside Vale", [], true],
	],

	[ // GTA Vice City
		["Vice Port Pay-n-spray", "Vice Port", [], false],
		["Sunshine Autos", "Little Havana", [], false],
		["Little Haiti Pay-n-spray", "Little Haiti", [], false],
		["Vice Point Pay-n-spray", "Vice Point", [], false],
		["Ocean Beach Pay-n-spray", "Ocean Beach", [], false],
		["Sir yes sir mission", "Little Havana", [], false],
		["Sir yes sir mission", "Vice Port", [], false],
		["Sunshine Autos", "Little Haiti", [], false],
		["Copland mission", "Vice Point", [], false],
		["Bomb Shop", "Vice Port", [], false],
		["Links View Apartment", "Vice Point", [], false],
		["Hyman Condo 1", "Downtown", [], false],
		["Hyman Condo 2", "Downtown", [], false],
		["Ocean Heights Apartment", "Ocean Beach", [], false],
		["El Swanko Casa", "Unknown", [], false],
		["Sunshine Autos 1", "Unknown", [], false],
		["Sunshine Autos 2", "Unknown", [], false],
		["Sunshine Autos 3", "Unknown", [], false],
		["Sunshine Autos 4", "Unknown", [], false],
		["Vercetti Estate", "Starfish Island", [], false],
	],

	[ // GTA San Andreas
		// Name									Location Name							Position						Opened
		["Life's a Beach Mission Garage", "Commerce, Los Santos", [1643.43, -1521.95, 13.56], true],
		["Los Desperados Mission Garage", "El Corona, Los Santos", [1877.30, -2097.85, 13.53], true],
		["Eight Ball Autos", "El Corona, Los Santos", [1842.32, -1856.37, 13.38], true],
		["Cesar Vialpando Mission Garage", "El Corona, Los Santos", [1797.62, -2146.73, 13.55], true],
		["Player Garage", "El Corona, Los Santos", [1699.06, -2089.99, 13.55], true],
		["LS Burglary Garage", "Playa del Seville, Los Santos", [2741.21, -2003.46, 13.55], true],
		["LowRider Tuning Garage", "Willowfield, Los Santos", [2644.90, -2038.41, 13.55], true],
		["Pay 'n' Spray", "Idlewood, Los Santos", [2072.40, -1831.38, 13.55], true],
		["Player Garage", "Ganton, Los Santos", [2505.68, -1689.95, 13.56], true],
		["Transfender", "Temple, Los Santos", [1041.42, -1026.78, 32.10], true],
		["Pay 'n' Spray", "Temple, Los Santos", [1025.09, -1030.52, 32.04], true],
		["Pay 'n' Spray", "Santa Maria Beach, Los Santos", [488.41, -1733.88, 11.18], true],
		["Player Garage", "Santa Maria Beach, Los Santos", [322.60, -1769.86, 4.72], true],
		["Player Garage", "Mulholland, Los Santos", [1353.23, -625.68, 109.13], true],
		["Wheel Archangels", "Ocean Flats, San Fierro", [-2715.30, 217.61, 4.32], true],
		["T-Bone Mendez Mission Garage", "Ocean Flats, San Fierro", [-2730.48, 74.22, 4.34], true],
		["Player Garage", "Hashbury, San Fierro", [-2455.66, -123.73, 26.09], true],
		["Transfender", "Doherty, San Fierro", [-1935.88, 237.90, 34.31], true],
		["Pay 'n' Spray", "Downtown, San Fierro", [-1904.53, 276.63, 41.05], true],
		["SF Burglary Garage", "Doherty, San Fierro", [-2101.90, -16.07, 35.32], true],
		["Player Garage", "Doherty, San Fierro", [-2026.94, 130.57, 28.84], true],
		["Mission Garage", "Doherty, San Fierro", [-2038.18, 178.87, 28.84], true],
		["Michelle's Pay 'n' Spray", "Downtown, San Fierro", [-1786.78, 1208.87, 25.13], true],
		["Player Garage", "Calton Height, San Fierro", [-2105.22, 897.84, 76.71], true],
		["Pay 'n' Spray", "Juniper Hollow, San Fierro", [-2425.70, 1029.37, 50.39], true],
		["Player Garage", "Paradiso, San Fierro", [-2695.94, 820.34, 49.98], true],
		["Airport Hangar", "Las Venturas Airport, San Fierro", [1585.90, 1226.73, 10.81], true],
		["LV Burglary Garage", "Pilgrim, Las Venturas", [2609.68, 1436.90, 10.82], true],
		["Transfender", "Come-A-Lot, Las Venturas", [2386.75, 1042.44, 10.82], true],
		["Player Garage", "Rockshore West, Las Venturas", [2448.44, 697.76, 11.46], true],
		["Welding Wedding Bomb-workshop", "Redsands East, Las Venturas", [2006.11, 2302.69, 10.82], true],
		["Pay 'n' Spray", "Redsands East, Las Venturas", [1967.55, 2162.43, 10.82], true],
		["Player Garage", "Redsands West, Las Venturas", [1407.23, 1902.37, 11.46], true],
		["Player Garage", "Prickle Pine, Las Venturas", [1280.85, 2529.82, 10.82], true],
		["Player Garage", "Whitewood Estates, Las Venturas", [928.43, 2011.86, 11.46], true],
		["Pay 'n' Spray", "El Quebrados, Tierra Robada", [-1420.43, 2591.78, 55.82], true],
		["Pay 'n' Spray", "Fort Carson, Bone County", [-100.00, 1110.53, 19.74], true],
		["Player Garage", "Fort Carson, Bone County", [-360.72, 1193.05, 19.74], true],
		["Player Garage", "Verdant Meadows, Bone County", [428.90, 2546.57, 16.21], true],
		["Interdiction Mission Garage", "El Castillo del Diablo, Bone County", [-388.78, 2228.05, 42.43], true],
		["Airport Hangar", "Verdant Meadows, Bone County", [404.97, 2478.38, 16.48], true],
		["Puncture Wounds Mission Garage", "Angel Pine, Flint County", [-2113.93, -2459.94, 30.63], true],
		["Pay 'n' Spray", "Dillimore, Red County", [719.96, -464.34, 16.34], true],
		["Player Garage", "Palomino Creek, Red County", [2231.22, 167.27, 27.48], true],
		["Player Garage", "Dillimore, Red County", [785.95, -494.23, 17.34], true],
	],

	[ // GTA Underground
		["Life's a Beach Mission Garage", "Commerce, Los Santos", [1643.43, -1521.95, 13.56], true],
		["Los Desperados Mission Garage", "El Corona, Los Santos", [1877.30, -2097.85, 13.53], true],
		["Eight Ball Autos", "El Corona, Los Santos", [1842.32, -1856.37, 13.38], true],
		["Cesar Vialpando Mission Garage", "El Corona, Los Santos", [1797.62, -2146.73, 13.55], true],
		["Player Garage", "El Corona, Los Santos", [1699.06, -2089.99, 13.55], true],
		["LS Burglary Garage", "Playa del Seville, Los Santos", [2741.21, -2003.46, 13.55], true],
		["LowRider Tuning Garage", "Willowfield, Los Santos", [2644.90, -2038.41, 13.55], true],
		["Pay 'n' Spray", "Idlewood, Los Santos", [2072.40, -1831.38, 13.55], true],
		["Player Garage", "Ganton, Los Santos", [2505.68, -1689.95, 13.56], true],
		["Transfender", "Temple, Los Santos", [1041.42, -1026.78, 32.10], true],
		["Pay 'n' Spray", "Temple, Los Santos", [1025.09, -1030.52, 32.04], true],
		["Pay 'n' Spray", "Santa Maria Beach, Los Santos", [488.41, -1733.88, 11.18], true],
		["Player Garage", "Santa Maria Beach, Los Santos", [322.60, -1769.86, 4.72], true],
		["Player Garage", "Mulholland, Los Santos", [1353.23, -625.68, 109.13], true],
		["Wheel Archangels", "Ocean Flats, San Fierro", [-2715.30, 217.61, 4.32], true],
		["T-Bone Mendez Mission Garage", "Ocean Flats, San Fierro", [-2730.48, 74.22, 4.34], true],
		["Player Garage", "Hashbury, San Fierro", [-2455.66, -123.73, 26.09], true],
		["Transfender", "Doherty, San Fierro", [-1935.88, 237.90, 34.31], true],
		["Pay 'n' Spray", "Downtown, San Fierro", [-1904.53, 276.63, 41.05], true],
		["SF Burglary Garage", "Doherty, San Fierro", [-2101.90, -16.07, 35.32], true],
		["Player Garage", "Doherty, San Fierro", [-2026.94, 130.57, 28.84], true],
		["Mission Garage", "Doherty, San Fierro", [-2038.18, 178.87, 28.84], true],
		["Michelle's Pay 'n' Spray", "Downtown, San Fierro", [-1786.78, 1208.87, 25.13], true],
		["Player Garage", "Calton Height, San Fierro", [-2105.22, 897.84, 76.71], true],
		["Pay 'n' Spray", "Juniper Hollow, San Fierro", [-2425.70, 1029.37, 50.39], true],
		["Player Garage", "Paradiso, San Fierro", [-2695.94, 820.34, 49.98], true],
		["Airport Hangar", "Las Venturas Airport, San Fierro", [1585.90, 1226.73, 10.81], true],
		["LV Burglary Garage", "Pilgrim, Las Venturas", [2609.68, 1436.90, 10.82], true],
		["Transfender", "Come-A-Lot, Las Venturas", [2386.75, 1042.44, 10.82], true],
		["Player Garage", "Rockshore West, Las Venturas", [2448.44, 697.76, 11.46], true],
		["Welding Wedding Bomb-workshop", "Redsands East, Las Venturas", [2006.11, 2302.69, 10.82], true],
		["Pay 'n' Spray", "Redsands East, Las Venturas", [1967.55, 2162.43, 10.82], true],
		["Player Garage", "Redsands West, Las Venturas", [1407.23, 1902.37, 11.46], true],
		["Player Garage", "Prickle Pine, Las Venturas", [1280.85, 2529.82, 10.82], true],
		["Player Garage", "Whitewood Estates, Las Venturas", [928.43, 2011.86, 11.46], true],
		["Pay 'n' Spray", "El Quebrados, Tierra Robada", [-1420.43, 2591.78, 55.82], true],
		["Pay 'n' Spray", "Fort Carson, Bone County", [-100.00, 1110.53, 19.74], true],
		["Player Garage", "Fort Carson, Bone County", [-360.72, 1193.05, 19.74], true],
		["Player Garage", "Verdant Meadows, Bone County", [428.90, 2546.57, 16.21], true],
		["Interdiction Mission Garage", "El Castillo del Diablo, Bone County", [-388.78, 2228.05, 42.43], true],
		["Airport Hangar", "Verdant Meadows, Bone County", [404.97, 2478.38, 16.48], true],
		["Puncture Wounds Mission Garage", "Angel Pine, Flint County", [-2113.93, -2459.94, 30.63], true],
		["Pay 'n' Spray", "Dillimore, Red County", [719.96, -464.34, 16.34], true],
		["Player Garage", "Palomino Creek, Red County", [2231.22, 167.27, 27.48], true],
		["Player Garage", "Dillimore, Red County", [785.95, -494.23, 17.34], true],
	],

	[ // GTA IV

	],

	[ // GTA IV (EFLC)

	]
];

//------------------
// Weather names
//------------------

// ----------------------------------------------------------------------------

// - These need fixed!
let weatherNames = [
	["Unknown"],
	[ // GTA III
		"Clear",
		"Overcast",
		"Thunderstorm",
		"Fog",
		"Clear",
		"Rainy",
		"Dark/Cloudy",
		"Light/Cloudy",
		"Overcast/Cloudy",
		"Grey/Cloudy"
	],

	[ // GTA Vice City
		"Clear",
		"Overcast",
		"Thunderstorm",
		"Fog",
		"Clear",
		"Rainy",
		"Dark/Cloudy",
		"Light/Cloudy",
		"Overcast/Cloudy",
		"Grey/Cloudy"
	],

	[ // GTA San Andreas
		"Blue Skies",
		"Blue Skies",
		"Blue Skies",
		"Blue Skies",
		"Blue Skies",
		"Blue Skies",
		"Blue Skies",
		"Blue Skies",
		"Thunderstorm",
		"Cloudy/Foggy",
		"Clear Blue Skies",
		"Heatwave",
		"Dull/Colorless",
		"Dull/Colorless",
		"Dull/Colorless",
		"Dull/Colorless",
		"Dull/Rainy",
		"Heatwave",
		"Heatwave",
		"Sandstorm",
		"Greenish/Foggy"
	],

	[ // GTA Underground
		"Blue Skies",
		"Blue Skies",
		"Blue Skies",
		"Blue Skies",
		"Blue Skies",
		"Blue Skies",
		"Blue Skies",
		"Blue Skies",
		"Thunderstorm",
		"Cloudy/Foggy",
		"Clear Blue Skies",
		"Heatwave",
		"Dull/Colorless",
		"Dull/Colorless",
		"Dull/Colorless",
		"Dull/Colorless",
		"Dull/Rainy",
		"Heatwave",
		"Heatwave",
		"Sandstorm",
		"Greenish/Foggy"
	],

	[ // GTA IV
		"Extra Sunny",
		"Sunny",
		"Sunny/Windy",
		"Cloudy",
		"Rain",
		"Light Rain",
		"Foggy",
		"Thunderstorm",
		"Extra Sunny",
		"Sunny/Windy",
	],

	[ // GTA IV (EFLC)
		"Extra Sunny",
		"Sunny",
		"Sunny/Windy",
		"Cloudy",
		"Rain",
		"Light Rain",
		"Foggy",
		"Thunderstorm",
		"Extra Sunny",
		"Sunny/Windy",
	]
];


//------------------
// Game names
//------------------

// ----------------------------------------------------------------------------

let gameNames = [
	"Unknown",
	"GTA III",
	"GTA Vice City",
	"GTA San Andreas",
	"GTA Underground",
	"GTA IV",
	"GTA IV: Episodes from Liberty City",
];

//------------------
// Radio station list
//------------------

let vehicleRadioStationNames = [
	[],
	[  // GTA III
		"Head Radio",
		"Double Cleff FM",
		"Jah Radio",
		"Rise FM",
		"Lips 106",
		"Flashback FM",
		"Chatterbox 109",
		"MP3 Player"
	],

	[ // GTA Vice City
		"Wildstyle",
		"Flash FM",
		"K CHAT",
		"Fever 105",
		"VROCK",
		"VCPR",
		"Espantoso",
		"Emotion 98.3",
		"Wave 103",
		"MP3 Player"
	],

	[ // GTA San Andreas
		"KROSE",
		"KDST",
		"Bounce FM",
		"SFUR",
		"Radio Los Santos",
		"Radio X",
		"CSR Radio",
		"KJAH West",
		"Master Sounds",
		"WCTR",
		"User Track Player"
	],

	[ // GTA IV
		"The Vibe 98.9",
		"97.8 Liberty Rock Radio",
		"JAZZ NATION RADIO 108.5",
		"Massive B",
		"K109 The Studio",
		"WKTT Radio",
		"Liberty City Hardcore",
		"The Journey",
		"Fusion FM",
		"The Beat 102.7",
		"Radio Broker",
		"Vladivostok FM",
		"PLR - Public Liberty Radio",
		"San Juan Sounds",
		"Electro-Choc",
		"The Classics 104.1",
		"IF99 - International Funk",
		"Tuff Gong",
		"Independence FM",
		"Integrity 2.0",
	],

	[ // GTA IV (EFLC)
		"The Vibe 98.9",
		"97.8 Liberty Rock Radio",
		"JAZZ NATION RADIO 108.5",
		"Massive B",
		"K109 The Studio",
		"WKTT Radio",
		"Liberty City Hardcore",
		"The Journey",
		"Fusion FM",
		"The Beat 102.7",
		"Radio Broker",
		"Vladivostok FM",
		"PLR - Public Liberty Radio",
		"San Juan Sounds",
		"Electro-Choc",
		"The Classics 104.1",
		"IF99 - International Funk",
		"Tuff Gong",
		"Independence FM",
		"Integrity 2.0",
	],
];


//------------------
// Other vehicle stuff
//------------------

// ----------------------------------------------------------------------------

let vehicleWheelStateNames = [
	"normal",
	"flat",
	"gone"
];

// ----------------------------------------------------------------------------

let vehicleWheelStateActionNames = [
	"repaired",
	"flattened",
	"destroyed"
];

// ----------------------------------------------------------------------------

let vehicleDoorStateNames = [
	"closed",
	"closed",
	"swinging",
	"open"
];

// ----------------------------------------------------------------------------

let vehicleDoorStateActionNames = [
	"closed",
	"closed",
	"opened",
	"opened"
];

// ----------------------------------------------------------------------------

let vehicleWheelNames = [
	"front left",
	"rear left",
	"front right",
	"rear right"
];

// ----------------------------------------------------------------------------

let vehicleLightNames = [
	"front left",
	"rear left",
	"front right",
	"rear right"
];

//------------------
// Vehicle list
//------------------

let vehicleModelIdStart = [
	0,
	90, 	// GTA III
	130, 	// GTA Vice City
	400, 	// GTA San Andreas
	400,	// GTA Underground
	84,		// GTA IV
	84,		// GTA EFLC
];

// ----------------------------------------------------------------------------

let vehicleNames = [
	[],
	[ // GTA III
		"Landstalker",
		"Idaho",
		"Stinger",
		"Linerunner",
		"Perennial",
		"Sentinel",
		"Patriot",
		"Fire Truck",
		"Trashmaster",
		"Stretch",
		"Manana",
		"Infernus",
		"Blista",
		"Pony",
		"Mule",
		"Cheetah",
		"Ambulance",
		"FBI Car",
		"Moonbeam",
		"Esperanto",
		"Taxi",
		"Kuruma",
		"Bobcat",
		"Mr. Whoopee",
		"BF Injection",
		"Manana (Corpse)",
		"Police Car",
		"Enforcer",
		"Securicar",
		"Banshee",
		"Predator",
		"Bus",
		"Rhino",
		"Barracks OL",
		"Train",
		"Police Helicopter",
		"Dodo",
		"Coach",
		"Cabbie",
		"Stallion",
		"Rumpo",
		"RC Bandit",
		"Bellyup",
		"Mr. Wongs",
		"Mafia Sentinel",
		"Yardie Lobo",
		"Yakuza Stinger",
		"Diablo Stallion",
		"Cartel Cruiser",
		"Hoods Rumpo XL",
		"Air Train",
		"Dead Dodo",
		"Speeder",
		"Reefer",
		"Panlantic",
		"Flatbed",
		"Yankee",
		"Escape",
		"Borgnine Taxi",
		"Toyz Van",
		"Ghost"
	],

	[ // GTA Vice City
		"Landstalker",
		"Idaho",
		"Stinger",
		"Linerunner",
		"Perennial",
		"Sentinel",
		"Rio",
		"Firetruck",
		"Trashmaster",
		"Stretch",
		"Manana",
		"Infernus",
		"Voodoo",
		"Pony",
		"Mule",
		"Cheetah",
		"Ambulance",
		"FBI Washington",
		"Moonbeam",
		"Esperanto",
		"Taxi",
		"Washington",
		"Bobcat",
		"Mr.Whoopee",
		"BF-Injection",
		"Hunter",
		"Police",
		"Enforcer",
		"Securicar",
		"Banshee",
		"Predator",
		"Bus",
		"Rhino",
		"Barracks OL",
		"Cuban Hermes",
		"Helicopter",
		"Angel",
		"Coach",
		"Cabbie",
		"Stallion",
		"Rumpo",
		"RC Bandit",
		"Romero's Hearse",
		"Packer",
		"Sentinel XS",
		"Admiral",
		"Squalo",
		"Sea Sparrow",
		"Pizza Boy",
		"Gang Burrito",
		"Airtrain",
		"Deaddodo",
		"Speeder",
		"Reefer",
		"Tropic",
		"Flatbed",
		"Yankee",
		"Caddy",
		"Zebra Cab",
		"Top Fun",
		"Skimmer",
		"PCJ-600",
		"Faggio",
		"Freeway",
		"Rcbaron",
		"RC Raider",
		"Glendale",
		"Oceanic",
		"Sanchez",
		"Sparrow",
		"Patriot",
		"Love Fist",
		"Coast Guard",
		"Dinghy",
		"Hermes",
		"Sabre",
		"Sabre Turbo",
		"Phoenix",
		"Walton",
		"Regina",
		"Comet",
		"Deluxo",
		"Burrito",
		"Spand Express",
		"Marquis",
		"Baggage Handler",
		"Kaufman Cab",
		"Maverick",
		"VCN Maverick",
		"Rancher",
		"FBI Rancher",
		"Virgo",
		"Greenwood",
		"Cuban Jetmax",
		"Hotring Racer 1",
		"Sandking",
		"Blista Compact",
		"Police Maverick",
		"Boxville",
		"Benson",
		"Mesa Grande",
		"RC Goblin",
		"Hotring Racer 2",
		"Hotring Racer 3",
		"Bloodring Banger 1",
		"Bloodring Banger 2",
		"VCPD Cheetah"
	],

	[ // GTA San Andreas
		"Landstalker",
		"Bravura",
		"Buffalo",
		"Linerunner",
		"Pereniel",
		"Sentinel",
		"Dumper",
		"Firetruck",
		"Trashmaster",
		"Stretch",
		"Manana",
		"Infernus",
		"Voodoo",
		"Pony",
		"Mule",
		"Cheetah",
		"Ambulance",
		"Leviathan",
		"Moonbeam",
		"Esperanto",
		"Taxi",
		"Washington",
		"Bobcat",
		"Mr Whoopee",
		"BF Injection",
		"Hunter",
		"Premier",
		"Enforcer",
		"Securicar",
		"Banshee",
		"Predator",
		"Bus",
		"Rhino",
		"Barracks",
		"Hotknife",
		"Trailer",
		"Previon",
		"Coach",
		"Cabbie",
		"Stallion",
		"Rumpo",
		"RC Bandit",
		"Romero",
		"Packer",
		"Monster",
		"Admiral",
		"Squalo",
		"Seasparrow",
		"Pizzaboy",
		"Tram",
		"Trailer",
		"Turismo",
		"Speeder",
		"Reefer",
		"Tropic",
		"Flatbed",
		"Yankee",
		"Caddy",
		"Solair",
		"Berkley's RC Van",
		"Skimmer",
		"PCJ-600",
		"Faggio",
		"Freeway",
		"RC Baron",
		"RC Raider",
		"Glendale",
		"Oceanic",
		"Sanchez",
		"Sparrow",
		"Patriot",
		"Quad",
		"Coastguard",
		"Dinghy",
		"Hermes",
		"Sabre",
		"Rustler",
		"ZR-350",
		"Walton",
		"Regina",
		"Comet",
		"BMX",
		"Burrito",
		"Camper",
		"Marquis",
		"Baggage",
		"Dozer",
		"Maverick",
		"News Maverick",
		"Rancher",
		"FBI Rancher",
		"Virgo",
		"Greenwood",
		"Jetmax",
		"Hotring-Racer A",
		"Sandking",
		"Blista",
		"Police Maverick",
		"Boxville",
		"Benson",
		"Mesa",
		"RC Goblin",
		"Hotring-Racer B",
		"Hotring-Racer C",
		"Bloodring-Banger",
		"Rancher",
		"Super-GT",
		"Elegant",
		"Journey",
		"Bike",
		"Mountain Bike",
		"Beagle",
		"Cropdust",
		"Stunt",
		"Tanker",
		"RoadTrain",
		"Nebula",
		"Majestic",
		"Buccaneer",
		"Shamal",
		"Hydra",
		"FCR-900",
		"NRG-500",
		"HPV1000",
		"Cement Truck",
		"Tow Truck",
		"Fortune",
		"Cadrona",
		"FBI Truck",
		"Willard",
		"Forklift",
		"Tractor",
		"Combine",
		"Feltzer",
		"Remington",
		"Slamvan",
		"Blade",
		"Freight",
		"Streak",
		"Vortex",
		"Vincent",
		"Bullet",
		"Clover",
		"Sadler",
		"Firetruck",
		"Hustler",
		"Intruder",
		"Primo",
		"Cargobob",
		"Tampa",
		"Sunrise",
		"Merit",
		"Utility",
		"Nevada",
		"Yosemite",
		"Windsor",
		"Monster Truck A",
		"Monster Truck B",
		"Uranus",
		"Jester",
		"Sultan",
		"Stratum",
		"Elegy",
		"Raindance",
		"RC Tiger",
		"Flash",
		"Tahoma",
		"Savanna",
		"Bandito",
		"Freight",
		"Trailer",
		"Kart",
		"Mower",
		"Duneride",
		"Sweeper",
		"Broadway",
		"Tornado",
		"AT-400",
		"DFT-30",
		"Huntley",
		"Stafford",
		"BF-400",
		"Newsvan",
		"Tug",
		"Trailer",
		"Emperor",
		"Wayfarer",
		"Euros",
		"Hotdog",
		"Club",
		"Trailer",
		"Trailer",
		"Andromada",
		"Dodo",
		"RC Cam",
		"Launch",
		"Police Car (LSPD)",
		"Police Car (SFPD)",
		"Police Car (LVPD)",
		"Police Ranger",
		"Picador",
		"S.W.A.T. Van",
		"Alpha",
		"Phoenix",
		"Broken Glendale",
		"Broken Sadler",
		"Luggage Trailer",
		"Luggage Trailer 2",
		"Stair Trailer",
		"Boxville",
		"Farm Plow",
		"Utility Trailer"
	],

	[ // GTA Underground
		"Landstalker",
		"Bravura",
		"Buffalo",
		"Linerunner",
		"Pereniel",
		"Sentinel",
		"Dumper",
		"Firetruck",
		"Trashmaster",
		"Stretch",
		"Manana",
		"Infernus",
		"Voodoo",
		"Pony",
		"Mule",
		"Cheetah",
		"Ambulance",
		"Leviathan",
		"Moonbeam",
		"Esperanto",
		"Taxi",
		"Washington",
		"Bobcat",
		"Mr Whoopee",
		"BF Injection",
		"Hunter",
		"Premier",
		"Enforcer",
		"Securicar",
		"Banshee",
		"Predator",
		"Bus",
		"Rhino",
		"Barracks",
		"Hotknife",
		"Trailer",
		"Previon",
		"Coach",
		"Cabbie",
		"Stallion",
		"Rumpo",
		"RC Bandit",
		"Romero",
		"Packer",
		"Monster",
		"Admiral",
		"Squalo",
		"Seasparrow",
		"Pizzaboy",
		"Tram",
		"Trailer",
		"Turismo",
		"Speeder",
		"Reefer",
		"Tropic",
		"Flatbed",
		"Yankee",
		"Caddy",
		"Solair",
		"Berkley's RC Van",
		"Skimmer",
		"PCJ-600",
		"Faggio",
		"Freeway",
		"RC Baron",
		"RC Raider",
		"Glendale",
		"Oceanic",
		"Sanchez",
		"Sparrow",
		"Patriot",
		"Quad",
		"Coastguard",
		"Dinghy",
		"Hermes",
		"Sabre",
		"Rustler",
		"ZR-350",
		"Walton",
		"Regina",
		"Comet",
		"BMX",
		"Burrito",
		"Camper",
		"Marquis",
		"Baggage",
		"Dozer",
		"Maverick",
		"News Maverick",
		"Rancher",
		"FBI Rancher",
		"Virgo",
		"Greenwood",
		"Jetmax",
		"Hotring-Racer A",
		"Sandking",
		"Blista",
		"Police Maverick",
		"Boxville",
		"Benson",
		"Mesa",
		"RC Goblin",
		"Hotring-Racer B",
		"Hotring-Racer C",
		"Bloodring-Banger",
		"Rancher",
		"Super-GT",
		"Elegant",
		"Journey",
		"Bike",
		"Mountain Bike",
		"Beagle",
		"Cropdust",
		"Stunt",
		"Tanker",
		"RoadTrain",
		"Nebula",
		"Majestic",
		"Buccaneer",
		"Shamal",
		"Hydra",
		"FCR-900",
		"NRG-500",
		"HPV1000",
		"Cement Truck",
		"Tow Truck",
		"Fortune",
		"Cadrona",
		"FBI Truck",
		"Willard",
		"Forklift",
		"Tractor",
		"Combine",
		"Feltzer",
		"Remington",
		"Slamvan",
		"Blade",
		"Freight",
		"Streak",
		"Vortex",
		"Vincent",
		"Bullet",
		"Clover",
		"Sadler",
		"Firetruck",
		"Hustler",
		"Intruder",
		"Primo",
		"Cargobob",
		"Tampa",
		"Sunrise",
		"Merit",
		"Utility",
		"Nevada",
		"Yosemite",
		"Windsor",
		"Monster Truck A",
		"Monster Truck B",
		"Uranus",
		"Jester",
		"Sultan",
		"Stratum",
		"Elegy",
		"Raindance",
		"RC Tiger",
		"Flash",
		"Tahoma",
		"Savanna",
		"Bandito",
		"Freight",
		"Trailer",
		"Kart",
		"Mower",
		"Duneride",
		"Sweeper",
		"Broadway",
		"Tornado",
		"AT-400",
		"DFT-30",
		"Huntley",
		"Stafford",
		"BF-400",
		"Newsvan",
		"Tug",
		"Trailer",
		"Emperor",
		"Wayfarer",
		"Euros",
		"Hotdog",
		"Club",
		"Trailer",
		"Trailer",
		"Andromada",
		"Dodo",
		"RC Cam",
		"Launch",
		"Police Car",
		"Police Car",
		"Police Car",
		"Police Ranger",
		"Picador",
		"S.W.A.T. Van",
		"Alpha",
		"Phoenix",
		"Broken Glendale",
		"Broken Sadler",
		"Luggage Trailer",
		"Luggage Trailer",
		"Stair Trailer",
		"Boxville",
		"Farm Plow",
		"Utility Trailer"
	],
	[ // GTA IV
		"Admiral",
		"Airtug",
		"Ambulance",
		"Banshee",
		"Benson",
		"Biff",
		"Blista",
		"Bobcat",
		"Boxville",
		"Buccaneer",
		"Burrito",
		"Burrito 2",
		"Bus",
		"Cabby",
		"Cavalcade",
		"Chavos",
		"Cognoscenti",
		"Comet",
		"Coquette",
		"DF8",
		"Dillettante",
		"Dukes",
		"E109",
		"Emperor",
		"Rusty Emperor",
		"Esperanto",
		"Faction",
		"FIB Car",
		"Feltzer",
		"Feroci",
		"Airport Feroci",
		"Firetruck",
		"Flatbed",
		"Fortune",
		"Forklift",
		"Futo",
		"FXT",
		"Habanero",
		"Hakumai",
		"Huntley",
		"Infernus",
		"Ingot",
		"Intruder",
		"Landstalker",
		"Lokus",
		"Manana",
		"Marbella",
		"Merit",
		"Minivan",
		"Moonbeam",
		"Mr. Tasty",
		"Mule",
		"Noose Patrol Car",
		"Noose Stockade",
		"Oracle",
		"Packer",
		"Patriot",
		"Perennial",
		"Airport Perennial",
		"Peyote",
		"Phantom",
		"Pinnacle",
		"PMP-600",
		"Police Cruiser",
		"Police Patrol",
		"Police Patriot",
		"Pony",
		"Premier",
		"Presidente",
		"Primo",
		"Police Stockade",
		"Rancher",
		"Rebla",
		"Reply",
		"Romero",
		"Roman's Taxi",
		"Ruiner",
		"Sabre",
		"Sabre 2",
		"Sabre GT",
		"Schafter",
		"Sentinel",
		"Solair",
		"Speedo",
		"Stallion",
		"Steed",
		"Stockade",
		"Stratum",
		"Stretch",
		"Sultan",
		"Sultan RS",
		"Super GT",
		"Taxi",
		"Taxi 2",
		"Trashmaster",
		"Turismo",
		"Uranus",
		"Vigero",
		"Vigero 2",
		"Vincent",
		"Virgo",
		"Voodoo",
		"Washington",
		"Willard",
		"Yankee",
		"Bobber",
		"Faggio",
		"Hellfury",
		"NRG-900",
		"PCJ-600",
		"Sanchez",
		"Zombie",
		"Annihilator",
		"Maverick",
		"Police Maverick",
		"Tour Maverick",
		"Dinghy",
		"Jetmax",
		"Marquis",
		"Predator",
		"Reefer",
		"Squalo",
		"Tuga",
		"Tropic",
		"Cablecar",
		"Subway",
		"El Train",
	],
	[ // GTA IV (EFLC)
		"Admiral",
		"Airtug",
		"Ambulance",
		"Banshee",
		"Benson",
		"Biff",
		"Blista",
		"Bobcat",
		"Boxville",
		"Buccaneer",
		"Burrito",
		"Burrito 2",
		"Bus",
		"Cabby",
		"Cavalcade",
		"Chavos",
		"Cognoscenti",
		"Comet",
		"Coquette",
		"DF8",
		"Dillettante",
		"Dukes",
		"E109",
		"Emperor",
		"Rusty Emperor",
		"Esperanto",
		"Faction",
		"FIB Car",
		"Feltzer",
		"Feroci",
		"Airport Feroci",
		"Firetruck",
		"Flatbed",
		"Fortune",
		"Forklift",
		"Futo",
		"FXT",
		"Habanero",
		"Hakumai",
		"Huntley",
		"Infernus",
		"Ingot",
		"Intruder",
		"Landstalker",
		"Lokus",
		"Manana",
		"Marbella",
		"Merit",
		"Minivan",
		"Moonbeam",
		"Mr. Tasty",
		"Mule",
		"Noose Patrol Car",
		"Noose Stockade",
		"Oracle",
		"Packer",
		"Patriot",
		"Perennial",
		"Airport Perennial",
		"Peyote",
		"Phantom",
		"Pinnacle",
		"PMP-600",
		"Police Cruiser",
		"Police Patrol",
		"Police Patriot",
		"Pony",
		"Premier",
		"Presidente",
		"Primo",
		"Police Stockade",
		"Rancher",
		"Rebla",
		"Reply",
		"Romero",
		"Roman's Taxi",
		"Ruiner",
		"Sabre",
		"Sabre 2",
		"Sabre GT",
		"Schafter",
		"Sentinel",
		"Solair",
		"Speedo",
		"Stallion",
		"Steed",
		"Stockade",
		"Stratum",
		"Stretch",
		"Sultan",
		"Sultan RS",
		"Super GT",
		"Taxi",
		"Taxi 2",
		"Trashmaster",
		"Turismo",
		"Uranus",
		"Vigero",
		"Vigero 2",
		"Vincent",
		"Virgo",
		"Voodoo",
		"Washington",
		"Willard",
		"Yankee",
		"Bobber",
		"Faggio",
		"Hellfury",
		"NRG-900",
		"PCJ-600",
		"Sanchez",
		"Zombie",
		"Annihilator",
		"Maverick",
		"Police Maverick",
		"Tour Maverick",
		"Dinghy",
		"Jetmax",
		"Marquis",
		"Predator",
		"Reefer",
		"Squalo",
		"Tuga",
		"Tropic",
		"Cablecar",
		"Subway",
		"El Train",
	],
];

// ----------------------------------------------------------------------------

let vehicleColourHex = [
	[],
	[ // GTA III
		"#050505",
		"#F5F5F5",
		"#2A77A1",
		"#B3363A",
		"#263739",
		"#86446E",
		"#F3ED47",
		"#4C75B7",
		"#667292",
		"#5E7072",
		"#352224",
		"#5A2124",
		"#662B2B",
		"#63322E",
		"#842827",
		"#8A3A42",
		"#682731",
		"#8B3C44",
		"#9E2F2B",
		"#A33A2F",
		"#D25633",
		"#925635",
		"#F4723A",
		"#D35733",
		"#E25A59",
		"#772A25",
		"#E17743",
		"#C44636",
		"#E17844",
		"#C35938",
		"#464840",
		"#747761",
		"#757763",
		"#918A3D",
		"#948C66",
		"#998D79",
		"#D8A534",
		"#C9BD7D",
		"#C9C591",
		"#D4C84E",
		"#1A332E",
		"#062505",
		"#1D373F",
		"#3C4A3B",
		"#2D5037",
		"#3A6C60",
		"#3A623C",
		"#7CA282",
		"#4C524E",
		"#56775B",
		"#101450",
		"#485E84",
		"#1C2745",
		"#1F3468",
		"#2B4878",
		"#475C83",
		"#447C92",
		"#3D67AB",
		"#4B7D82",
		"#80B0B7",
		"#3D2333",
		"#1C2948",
		"#343941",
		"#40454C",
		"#4A2D2B",
		"#563E33",
		"#41464C",
		"#672731",
		"#835A75",
		"#868587",
		"#171717",
		"#2E2E2E",
		"#454545",
		"#5C5C5C",
		"#737373",
		"#8A8A8A",
		"#A1A1A1",
		"#B8B8B8",
		"#CFCFCF",
		"#E6E6E6",
		"#AAAFAA",
		"#6A736B",
		"#AAAFAA",
		"#BBBEB5",
		"#BBBEB5",
		"#6A6F70",
		"#60635F",
		"#6A736B",
		"#AAAFAA",
		"#BBBEB5",
		"#21292B",
		"#343842",
		"#414648",
		"#4E5960",
		"#41454C"
	],

	[ // GTA Vice City
		"#050505",
		"#F5F5F5",
		"#2A77A1",
		"#B3363A",
		"#263739",
		"#86446E",
		"#F3ED47",
		"#4C75B7",
		"#667292",
		"#5E7072",
		"#352224",
		"#5A2124",
		"#662B2B",
		"#63322E",
		"#842827",
		"#8A3A42",
		"#682731",
		"#8B3C44",
		"#9E2F2B",
		"#A33A2F",
		"#D25633",
		"#925635",
		"#F4723A",
		"#D35733",
		"#E25A59",
		"#772A25",
		"#E17743",
		"#C44636",
		"#E17844",
		"#C35938",
		"#464840",
		"#747761",
		"#757763",
		"#918A3D",
		"#948C66",
		"#998D79",
		"#D8A534",
		"#C9BD7D",
		"#C9C591",
		"#D4C84E",
		"#1A332E",
		"#062505",
		"#1D373F",
		"#3C4A3B",
		"#2D5037",
		"#3A6C60",
		"#3A623C",
		"#7CA282",
		"#4C524E",
		"#56775B",
		"#101450",
		"#485E84",
		"#1C2745",
		"#1F3468",
		"#2B4878",
		"#475C83",
		"#447C92",
		"#3D67AB",
		"#4B7D82",
		"#80B0B7",
		"#3D2333",
		"#1C2948",
		"#343941",
		"#40454C",
		"#4A2D2B",
		"#563E33",
		"#41464C",
		"#672731",
		"#835A75",
		"#868587",
		"#171717",
		"#2E2E2E",
		"#454545",
		"#5C5C5C",
		"#737373",
		"#8A8A8A",
		"#A1A1A1",
		"#B8B8B8",
		"#CFCFCF",
		"#E6E6E6",
		"#AAAFAA",
		"#6A736B",
		"#AAAFAA",
		"#BBBEB5",
		"#BBBEB5",
		"#6A6F70",
		"#60635F",
		"#6A736B",
		"#AAAFAA",
		"#BBBEB5",
		"#21292B",
		"#343842",
		"#414648",
		"#4E5960",
		"#41454C"
	],

	[ // GTA San Andreas
		"#000000",
		"#F5F5F5",
		"#2A77A1",
		"#840410",
		"#263739",
		"#86446E",
		"#D78E10",
		"#4C75B7",
		"#BDBEC6",
		"#5E7072",
		"#46597A",
		"#656A79",
		"#5D7E8D",
		"#58595A",
		"#D6DAD6",
		"#9CA1A3",
		"#335F3F",
		"#730E1A",
		"#7B0A2A",
		"#9F9D94",
		"#3B4E78",
		"#732E3E",
		"#691E3B",
		"#96918C",
		"#515459",
		"#3F3E45",
		"#A5A9A7",
		"#635C5A",
		"#3D4A68",
		"#979592",
		"#421F21",
		"#5F272B",
		"#8494AB",
		"#767B7C",
		"#646464",
		"#5A5752",
		"#252527",
		"#2D3A35",
		"#93A396",
		"#6D7A88",
		"#221918",
		"#6F675F",
		"#7C1C2A",
		"#5F0A15",
		"#193826",
		"#5D1B20",
		"#9D9872",
		"#7A7560",
		"#989586",
		"#ADB0B0",
		"#848988",
		"#304F45",
		"#4D6268",
		"#162248",
		"#272F4B",
		"#7D6256",
		"#9EA4AB",
		"#9C8D71",
		"#6D1822",
		"#4E6881",
		"#9C9C98",
		"#917347",
		"#661C26",
		"#949D9F",
		"#A4A7A5",
		"#8E8C46",
		"#341A1E",
		"#6A7A8C",
		"#AAAD8E",
		"#AB988F",
		"#851F2E",
		"#6F8297",
		"#585853",
		"#9AA790",
		"#601A23",
		"#20202C",
		"#A4A096",
		"#AA9D84",
		"#78222B",
		"#0E316D",
		"#722A3F",
		"#7B715E",
		"#741D28",
		"#1E2E32",
		"#4D322F",
		"#7C1B44",
		"#2E5B20",
		"#395A83",
		"#6D2837",
		"#A7A28F",
		"#AFB1B1",
		"#364155",
		"#6D6C6E",
		"#0F6A89",
		"#204B6B",
		"#2B3E57",
		"#9B9F9D",
		"#6C8495",
		"#4D8495",
		"#AE9B7F",
		"#406C8F",
		"#1F253B",
		"#AB9276",
		"#134573",
		"#96816C",
		"#64686A",
		"#105082",
		"#A19983",
		"#385694",
		"#525661",
		"#7F6956",
		"#8C929A",
		"#596E87",
		"#473532",
		"#44624F",
		"#730A27",
		"#223457",
		"#640D1B",
		"#A3ADC6",
		"#695853",
		"#9B8B80",
		"#620B1C",
		"#5B5D5E",
		"#624428",
		"#731827",
		"#1B376D",
		"#EC6AAE",
		"#000000"
	],

	[ // GTA Underground
		"#000000",
		"#F5F5F5",
		"#2A77A1",
		"#840410",
		"#263739",
		"#86446E",
		"#D78E10",
		"#4C75B7",
		"#BDBEC6",
		"#5E7072",
		"#46597A",
		"#656A79",
		"#5D7E8D",
		"#58595A",
		"#D6DAD6",
		"#9CA1A3",
		"#335F3F",
		"#730E1A",
		"#7B0A2A",
		"#9F9D94",
		"#3B4E78",
		"#732E3E",
		"#691E3B",
		"#96918C",
		"#515459",
		"#3F3E45",
		"#A5A9A7",
		"#635C5A",
		"#3D4A68",
		"#979592",
		"#421F21",
		"#5F272B",
		"#8494AB",
		"#767B7C",
		"#646464",
		"#5A5752",
		"#252527",
		"#2D3A35",
		"#93A396",
		"#6D7A88",
		"#221918",
		"#6F675F",
		"#7C1C2A",
		"#5F0A15",
		"#193826",
		"#5D1B20",
		"#9D9872",
		"#7A7560",
		"#989586",
		"#ADB0B0",
		"#848988",
		"#304F45",
		"#4D6268",
		"#162248",
		"#272F4B",
		"#7D6256",
		"#9EA4AB",
		"#9C8D71",
		"#6D1822",
		"#4E6881",
		"#9C9C98",
		"#917347",
		"#661C26",
		"#949D9F",
		"#A4A7A5",
		"#8E8C46",
		"#341A1E",
		"#6A7A8C",
		"#AAAD8E",
		"#AB988F",
		"#851F2E",
		"#6F8297",
		"#585853",
		"#9AA790",
		"#601A23",
		"#20202C",
		"#A4A096",
		"#AA9D84",
		"#78222B",
		"#0E316D",
		"#722A3F",
		"#7B715E",
		"#741D28",
		"#1E2E32",
		"#4D322F",
		"#7C1B44",
		"#2E5B20",
		"#395A83",
		"#6D2837",
		"#A7A28F",
		"#AFB1B1",
		"#364155",
		"#6D6C6E",
		"#0F6A89",
		"#204B6B",
		"#2B3E57",
		"#9B9F9D",
		"#6C8495",
		"#4D8495",
		"#AE9B7F",
		"#406C8F",
		"#1F253B",
		"#AB9276",
		"#134573",
		"#96816C",
		"#64686A",
		"#105082",
		"#A19983",
		"#385694",
		"#525661",
		"#7F6956",
		"#8C929A",
		"#596E87",
		"#473532",
		"#44624F",
		"#730A27",
		"#223457",
		"#640D1B",
		"#A3ADC6",
		"#695853",
		"#9B8B80",
		"#620B1C",
		"#5B5D5E",
		"#624428",
		"#731827",
		"#1B376D",
		"#EC6AAE",
		"#000000"
	],
	[], // GTA IV
	[], // GTA IV (EFLC)
];


// ----------------------------------------------------------------------------

let gtaivVehicleModels = [
	["Admiral", 1264341792, 0],
	["Airtug", 1560980623, 0],
	["Ambulance", 1171614426, 0],
	["Banshee", -1041692462, 0],
	["Benson", 2053223216, 0],
	["Biff", 850991848, 0],
	["Blista", -344943009, 0],
	["Bobcat", 1075851868, 0],
	["Boxville", -1987130134, 0],
	["Buccaneer", -682211828, 0],
	["Burrito", -1346687836, 0],
	["Burrito 2", -907477130, 0],
	["Bus", -713569950, 0],
	["Cabby", 1884962369, 0],
	["Cavalcade", 2006918058, 0],
	["Chavos", -67282078, 0],
	["Cognoscenti", -2030171296, 0],
	["Comet", 1063483177, 0],
	["Coquette", 108773431, 0],
	["DF8", 162883121, 0],
	["Dillettante", -1130810103, 0],
	["Dukes", 723973206, 0],
	["E109", -1971955454, 0],
	["Emperor", -685276541, 0],
	["Rusty Emperor", -1883002148, 0],
	["Esperanto", -276900515, 0],
	["Faction", -2119578145, 0],
	["FIB Car", 1127131465, 0],
	["Feltzer", -1097828879, 0],
	["Feroci", 974744810, 0],
	["Airport Feroci", 1026055242, 0],
	["Firetruck", 1938952078, 0],
	["Flatbed", 1353720154, 0],
	["Fortune", 627033353, 0],
	["Forklift", 1491375716, 0],
	["Futo", 2016857647, 0],
	["FXT", 675415136, 0],
	["Habanero", 884422927, 0],
	["Hakumai", -341892653, 0],
	["Huntley", 486987393, 0],
	["Infernus", 418536135, 0],
	["Ingot", -1289722222, 0],
	["Intruder", 886934177, 0],
	["Landstalker", 1269098716, 0],
	["Lokus", -37030056, 0],
	["Manana", -2124201592, 0],
	["Marbella", 1304597482, 0],
	["Merit", -1260881538, 0],
	["Minivan", -310465116, 0],
	["Moonbeam", 525509695, 0],
	["Mr. Tasty", 583100975, 0],
	["Mule", 904750859, 0],
	["Noose Patrol Car", 148777611, 0],
	["Noose Stockade", 1911513875, 0],
	["Oracle", 1348744438, 0],
	["Packer", 569305213, 0],
	["Patriot", -808457413, 0],
	["Perennial", -2077743597, 0],
	["Airport Perennial", -1590284256, 0],
	["Peyote", 1830407356, 0],
	["Phantom", -2137348917, 0],
	["Pinnacle", 131140572, 0],
	["PMP-600", 1376298265, 0],
	["Police Cruiser", 2046537925, 0],
	["Police Patrol", -1627000575, 0],
	["Police Patriot", -350085182, 0],
	["Pony", -119658072, 0],
	["Premier", -1883869285, 0],
	["Presidente", -1962071130, 0],
	["Primo", -1150599089, 0],
	["Police Stockade", -1900572838, 0],
	["Rancher", 1390084576, 0],
	["Rebla", 83136452, 0],
	["Reply", -845979911, 0],
	["Romero", 627094268, 0],
	["Roman's Taxi", -1932515764, 0],
	["Ruiner", -227741703, 0],
	["Sabre", -449022887, 0],
	["Sabre 2", 1264386590, 0],
	["Sabre GT", -1685021548, 0],
	["Schafter", -322343873, 0],
	["Sentinel", 1349725314, 0],
	["Solair", 1344573448, 0],
	["Speedo", -810318068, 0],
	["Stallion", 1923400478, 0],
	["Steed", 1677715180, 0],
	["Stockade", 1747439474, 0],
	["Stratum", 1723137093, 0],
	["Stretch", -1961627517, 0],
	["Sultan", 970598228, 0],
	["Sultan RS", -295689028, 0],
	["Super GT", 1821991593, 0],
	["Taxi", -956048545, 0],
	["Taxi 2", 1208856469, 0],
	["Trashmaster", 1917016601, 0],
	["Turismo", -1896659641, 0],
	["Uranus", 1534326199, 0],
	["Vigero", -825837129, 0],
	["Vigero 2", -1758379524, 0],
	["Vincent", -583281407, 0],
	["Virgo", -498054846, 0],
	["Voodoo", 2006667053, 0],
	["Washington", 1777363799, 0],
	["Willard", 1937616578, 0],
	["Yankee", -1099960214, 0],
	["Bobber", -1830458836, 0],
	["Faggio", -1842748181, 0],
	["Hellfury", 584879743, 0],
	["NRG-900", 1203311498, 0],
	["PCJ-600", -909201658, 0],
	["Sanchez", 788045382, 0],
	["Zombie", -570033273, 0],
	["Annihilator", 837858166, 0],
	["Maverick", -1660661558, 0],
	["Police Maverick", 353883353, 0],
	["Tour Maverick", 2027357303, 0],
	["Dinghy", 1033245328, 0],
	["Jetmax", 861409633, 0],
	["Marquis", -1043459709, 0],
	["Predator", -488123221, 0],
	["Reefer", 1759673526, 0],
	["Squalo", 400514754, 0],
	["Tuga", 1064455782, 0],
	["Tropic", 290013743, 0],
	["Cablecar", -960289747, 0],
	["Subway", 800869680, 0],
	["El Train", -1953988645, 0],

	["APC", 562680400, 1],
	["Buffalo", -304802106, 1],
	["Bullet", 2598821281, 1],
	["Brickade", -283209848, 1],
	["Caddy", 1147287684, 1],
	["F620", -591610296, 1],
	["Burrito", 2549763894, 1],
	["Stretch E", -114627507, 1],
	["Rhapsody", 841808271, 1],
	["Packer", 207497487, 1],
	["Prison Bus", 2287941233, 1],
	["Serrano", 1337041428, 1],
	["Serrano 2", 1051281622, 1],
	["Schafter 2", 3039514899, 1],
	["Schafter 3", 2809443750, 1],
	["Slamvan", 729783779, 1],
	["Super D", 1123216662, 1],
	["Super D 2", 1638119866, 1],
	["Tampa", 972671128, 1],
	["Towtruck", -1323100960, 1],
	["Police 3", 1912215274, 1],
	["Police 4", -1973172295, 1],
	["Police W", 908697398, 1],
	["Zombie B", -570033273, 1],
	["Akuma", 1672195559, 1],
	["Bati Custom", -891462355, 1],
	["Bati 800", -114291515, 1],
	["Bobber", -1830458836, 1],
	["Double", -1670998136, 1],
	["Faggio 2", 55628203, 1],
	["Hakuchou", 1265391242, 1],
	["Hexer", 301427732, 1],
	["Police B", -34623805, 1],
	["Vader", -140902153, 1],
	["Buzzard", 788747387, 1],
	["Skylift", 1044954915, 1],
	["Swift", -339587598, 1],
];


//

//------------------
// Creating vehicles
//------------------

// ----------------------------------------------------------------------------

function createVehicle2(hash, position, sync) {
	if (natives.isModelInCdimage(hash)) {
		natives.requestModel(hash);
		natives.loadAllObjectsNow();
		return natives.createCar(hash, position, sync);
	}
}

// ----------------------------------------------------------------------------

//------------------
// Weapons
//------------------
function getWeaponName(weapon) {
	return weaponNames[thisGame][weapon];
}

// ----------------------------------------------------------------------------

function getWeaponIdFromParams(params, gameId = thisGame) {
	if (isNaN(params)) {
		return getWeaponIdFromName(params, gameId);
	} else {
		if (typeof weaponNames[gameId][Number(params)] != undefined) {
			return Number(params);
		}
	}

	return false;
}

// ----------------------------------------------------------------------------

function getWeaponIdFromName(params, gameId = thisGame) {
	for (let i in weaponNames[gameId]) {
		if (weaponNames[gameId][i].toLowerCase().indexOf(params.toLowerCase()) != -1) {
			return Number(i);
		}
	}
}


//------------------
// Check for vehicles, players, civilians, and elements of type in range.
//------------------

// ----------------------------------------------------------------------------

function getVehiclesInRange(position, range) {
	return getElementsByType(ELEMENT_VEHICLE).filter(vehicle => position.distance(vehicle.position) <= range);
}

// ----------------------------------------------------------------------------

function getPlayersInRange(position, range) {
	return getElementsByType(ELEMENT_PLAYER).filter(player => position.distance(player.position) <= range);
}

// ----------------------------------------------------------------------------

function getCiviliansInRange(position, range) {
	return getCivilians().filter((civilian) => position.distance(civilian.position) <= range);
}

// ----------------------------------------------------------------------------

function getElementsOfTypeInRange(elementType, position, range) {
	return getElementsByType(elementType).filter(element => position.distance(element.position) <= range);
}

//------------------
// Check if params are valid
//------------------

function isParamsInvalid(params) {
	if (params == null) {
		return true;
	}

	if (params == "") {
		return true;
	}

	if (params.length == 0) {
		return true;
	}

	return false;
}

// -------------------
// Vehicle util
// -------------------

// ----------------------------------------------------------------------------

function getVehicleModelIdFromName(params, gameId = thisGame) {
	if (gameId >= GAME_GTA_IV) {
		for (let i in gtaivVehicleModels) {
			if (gtaivVehicleModels[i][0].toLowerCase().indexOf(params.toLowerCase()) != -1) {
				if (gameId >= GAME_GTA_IV) {
					return gtaivVehicleModels[Number(i)][1];
				}
			}
		}
		return gtaivVehicleModels[0][1];
	} else {
		for (let i in vehicleNames[gameId]) {
			if (vehicleNames[gameId][i].toLowerCase().indexOf(params.toLowerCase()) != -1) {
				return Number(i) + Number(vehicleModelIdStart[gameId]);
			}
		}
	}

	return false;
}

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

function isValidVehicleModel(modelId) {
	if (thisGame == GAME_GTA_III) {
		if (modelId < 90 || modelId > 150) {
			return false;
		}

		return true;
	}

	if (thisGame == GAME_GTA_VC) {
		if (modelId < 130 || modelId > 236) {
			return false;
		}

		return true;
	}

	if (thisGame >= GAME_GTA_SA) {
		return true;
	}
	return false;
}

// ----------------------------------------------------------------------------

function getVehicleModelIdFromParams(params, gameId = thisGame) {
	if (isNaN(params)) {
		let modelId = getVehicleModelIdFromName(params);

		if (!modelId) {
			return vehicleModelIdStart[gameId];
		}

		if (isValidVehicleModel(Number(modelId))) {
			return Number(modelId);
		}

		return modelId;
	} else {
		//if(gameId == GAME_GTA_IV) {
		//	params = Number(params);
		//	return gtaivVehicleModels[params][1];
		//}

		if (isValidVehicleModel(Number(params))) {
			return Number(params);
		}
		return vehicleModelIdStart[gameId];
	}

	return false;
}

// ----------------------------------------------------------------------------

//-------------------
// Getting positions, and misc math functions
//-------------------

// ----------------------------------------------------------------------------

function getPosToRightOfPos(pos, angle, distance) {
	let x = (pos.x + ((Math.cos((-angle + 1.57) + (Math.PI / 2))) * distance));
	let y = (pos.y + ((Math.sin((-angle + 1.57) + (Math.PI / 2))) * distance));

	let rightPos = new Vec3(x, y, pos.z);

	return rightPos;
}

// ----------------------------------------------------------------------------

function getPosToLeftOfPos(pos, angle, distance) {
	let x = (pos.x + ((Math.cos((angle + 1.57) + (Math.PI / 2))) * distance));
	let y = (pos.y + ((Math.sin((angle + 1.57) + (Math.PI / 2))) * distance));

	let leftPos = new Vec3(x, y, pos.z);

	return leftPos;
}

// ----------------------------------------------------------------------------

function getPosInFrontOfPos(pos, angle, distance) {
	let x = (pos.x + ((Math.cos(angle + (Math.PI / 2))) * distance));
	let y = (pos.y + ((Math.sin(angle + (Math.PI / 2))) * distance));
	let z = pos.z;

	return new Vec3(x, y, z);
}

// ----------------------------------------------------------------------------

function getPosBehindPos(pos, angle, distance) {
	let x = (pos.x + ((Math.cos(angle - (Math.PI / 2))) * distance));
	let y = (pos.y + ((Math.sin(angle - (Math.PI / 2))) * distance));
	let z = pos.z;

	return new Vec3(x, y, z);
}

// ----------------------------------------------------------------------------

function getPosAbovePos(pos, distance) {
	let z = pos.z + distance;

	return new Vec3(pos.x, pos.y, z);
}

// ----------------------------------------------------------------------------

function getPosBelowPos(pos, distance) {
	let z = pos.z - distance;

	return new Vec3(pos.x, pos.y, z);
}

// ----------------------------------------------------------------------------

function getHeadingFromPosToPos(pos1, pos2) {

	let x = pos2.x - pos1.x;
	let y = pos2.y - pos1.y;
	let rad = Math.atan2(y, x);
	let deg = radToDeg(rad);
	deg -= 90;
	deg = deg % 360;
	return degToRad(deg);
}

// ----------------------------------------------------------------------------

function degToRad(deg) {
	return deg * Math.PI / 180;
}

// ----------------------------------------------------------------------------

function radToDeg(rad) {
	return rad * 180 / Math.PI;
}

// ----------------------------------------------------------------------------

function getAngleInCircleFromCenter(center, total, current) {
	let gap = 360 / total;
	let deg = Math.floor(gap * current);

	if (deg <= 0) {
		deg = 1;
	} else {
		if (deg >= 360) {
			deg = 359;
		}
	}

	return degToRad(deg);
}

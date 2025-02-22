# KCNet-IVConnected-Scripts

GTA Connected scripts for GTA IV

# TODO
* Look into creating an airstrike: https://github.com/EmmanuelU/xmc-mod-menu/blob/master/menu_functions.c#L1499-L1507

TODO Restructure files like this and test it.
* Move commands into client/commands
* Move functions into client/functions
* Move events into client/events

# Features
Files (client folder):
* blip_commands.js - This is a test for adding a blip, I can add the blip but I cannot remove it.

commands.js - This has a bunch of commands, list below

<details>
<summary> List of commands in commands.js </summary>

* /spawn (Teleport to spawn)
* /fixveh (Fix current vehicle)
* /explodeveh (Blow up current vehicle)
* /clearwl (Clear wanted level)
* /maxwl (Give max wanted level)
* /weapon1 (Give weapon set 1)
* /opengarage (Open mission garage)
* /closegarage (Close mission garage)
* /startscript (Starts a game script, currently set to the computer in game.)
* /startcs (Start cutscenes, this is disabled)
* /scmtest (I think this is only for Vice City, GTA 3, and San Andreas.)


</details>

<details>
<summary> List of commands in fun_commands.js </summary>

* /gravon (Enable gravity for yourself)
* /gravoff (Disable gravity for yourself)

</details>

<details>
<summary> List of commands in message_commands.js </summary>

* /printhelp (Print a test help message)

</details>

<details>
<summary> List of commands in ped_commands.js </summary>

* /createped (This runs the createPed function in this file, it needs moved into functions.js)

</details>

<details>
<summary> List of commands in player_commands.js </summary>

* /god (Toggle invincibility on/off)
* /helmet (This should give the player a helmet, it doesn't work)
* /heal (Give the player max health and armour {100 health, 250 armour})
* /kill (This will kill the player instantly, runs the EXPLODE_CHAR_HEAD native)
* /coords (Display your current coords, move this into another file.)
* /sky (Teleport the player with +50 added to your current Z coord, put the player in the sky.)
* /setmaxwl (Set max wanted level, can be from 0 {Disabled} or 6 {Max Wanted level.})

</details>

<details>
<summary> List of commands in teleport_commands.js </summary>

* /goto (Teleport to a set of coordinates, also teleport your vehicle.)
* /warp (This runs the teleportPlayer function with the specified text for the warp.)
* This file has some misc functions, such as checking if the player is in a vehicle, warping the player with a vehicle if they are in one and fade in, warping player without vehicle and fade in, and a teleport function.

</details>


<details>
<summary> List of commands in vehicle_commands.js </summary>

* /removevehwindows (This is untested and possibly incomplete.)

</details>



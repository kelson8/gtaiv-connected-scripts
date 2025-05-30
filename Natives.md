# Natives list GTA 4
List of natives to possibly use:

https://gtamods.com/wiki/List_of_native_functions_(GTA_IV)

<details>
<summary> These may be fun to mess with: </summary>

* SET_PLAYER_MAY_ONLY_ENTER_THIS_VEHICLE
* SET_PLAYER_NEVER_GETS_TIRED
* START_CHAR_FIRE
* SET_CHAR_FIRE_DAMAGE_MULTIPLIER
* EXTINGUISH_CHAR_FIRE
* SET_CHAR_ACCURACY
* SET_CAR_ON_GROUND_PROPERLY

CREATE_EMERGENCY_SERVICES_CAR (model, x, y, z):
 https://gtamods.com/wiki/CREATE_EMERGENCY_SERVICES_CAR
 
 int, x, y, z, float (unknown), float (unknown, 1 suggested)
CREATE_CHECKPOINT (Checkpoint type, float, float, float,:
 https://gtamods.com/wiki/CREATE_CHECKPOINT
 
ALLOW_EMERGENCY_SERVICES:
 https://gtamods.com/wiki/ALLOW_EMERGENCY_SERVICES
 
ARE_TAXI_LIGHTS_ON:
 https://gtamods.com/wiki/ARE_TAXI_LIGHTS_ON
 
SET_TAXI_LIGHTS:
 https://gtamods.com/wiki/SET_TAXI_LIGHTS
 
Apply force:
APPLY_FORCE_TO_CAR:
 https://gtamods.com/wiki/APPLY_FORCE_TO_CAR
* int (Car ID)
* bool (Unknown, suggested: true)
* float (X, force amount)
* float (Y, force amount)
* float (Z, force amount)
* float (X, force position)
* float (Y, force position)
* float (Z, force position)
* bool (Unknown, suggested: true)
* bool (IsForceDirectionRelative)
* bool (Unknown, suggested: true)
* bool (Unknown, suggested: true)

https://gtamods.com/wiki/APPLY_FORCE_TO_OBJECT
* Same params as above, switch out "int (Car ID)" for "int (Object ID)"

https://gtamods.com/wiki/APPLY_FORCE_TO_PED
* Same params as above, switch out "int (Object ID)" for "int (Ped ID)"
</details>

<details>
<summary> Blip Commands: </summary>

* ADD_BLIP_FOR_CAR
* ADD_BLIP_FOR_CHAR
* ADD_BLIP_FOR_COORD
* ADD_BLIP_FOR_PICKUP
* ADD_BLIP_FOR_WEAPON
* GET_BLIP_ALPHA
* GET_BLIP_COLOUR
* GET_BLIP_COORDS
* GET_BLIP_INFO_ID_CAR_INDEX
* GET_BLIP_INFO_ID_DISPLAY
* GET_BLIP_INFO_ID_OBJECT_INDEX
* GET_BLIP_INFO_ID_PED_INDEX
* GET_BLIP_INFO_ID_PICKUP_INDEX
* GET_BLIP_INFO_ID_POSITION
* GET_BLIP_INFO_ID_TYPE
* GET_BLIP_NAME
* GET_BLIP_SPRITE

</details>

<details>
<summary> Car Commands: </summary>

* DOES_VEHICLE_EXIST
* ENABLE_GPS_IN_VEHICLE
* BURST_CAR_TYRE
* FORCE_ALL_VEHICLE_LIGHTS_OFF
* FORCE_CAR_LIGHTS
* FORCE_PED_TO_FLEE_WHILST_DRIVING_VEHICLE
* FREEZE_CAR_POSITION
* LOCK_CAR_DOORS
* SET_TAXI_LIGHTS
* GET_CAR_BLOCKING_CAR
* GET_CAR_CHAR_IS_USING
* GET_CAR_COLOURS
* GET_CAR_COORDINATES
* GET_CAR_DEFORMATION_AT_POS
* GET_CAR_DOOR_LOCK_STATUS
* GET_CAR_FORWARD_VECTOR
* GET_CAR_FORWARD_X
* GET_CAR_FORWARD_Y
* GET_CAR_HEADING
* GET_CAR_HEALTH
* GET_CAR_LIVERY
* GET_CAR_MASS
* GET_CAR_MODEL
* GET_CAR_MODEL_VALUE
* GET_CAR_OBJECT_IS_ATTACHED_TO
* GET_CAR_PITCH
* GET_CAR_ROLL
* GET_CAR_SIREN_HEALTH
* GET_CAR_SPEED
* GET_CAR_SPEED_VECTOR
* GET_CAR_UPRIGHT_VALUE
* GET_VEHICLE_CLASS


</details>

<details>
<summary> Char Commands: </summary>


* IS_CHAR_ON_ANY_BIKE
* IS_CHAR_ON_FIRE
* IS_CHAR_ON_FOOT
* IS_CHAR_MODEL
* IS_CHAR_IN_CAR
* IS_CHAR_IN_FLYING_VEHICLE
* IS_CHAR_IN_MELEE_COMBAT
* IS_CHAR_IN_MODEL
* IS_CHAR_IN_TAXI
* IS_CHAR_IN_WATER
* IS_CHAR_IN_ZONE
* IS_CHAR_ON_SCREEN
* IS_CHAR_PLAYING_ANIM
* IS_CHAR_RESPONDING_TO_ANY_EVENT
* IS_CHAR_RESPONDING_TO_EVENT
* IS_CHAR_SHOOTING
* IS_CHAR_SHOOTING_IN_AREA
* IS_CHAR_SITTING_IDLE
* IS_CHAR_SITTING_IN_ANY_CAR
* IS_CHAR_SITTING_IN_CAR
* IS_CHAR_STOPPED
* IS_CHAR_STUCK_UNDER_CAR
* IS_CHAR_SWIMMING
* IS_CHAR_TOUCHING_CHAR

* IS_CHAR_IN_ANY_BOAT
* IS_CHAR_IN_ANY_CAR
* IS_CHAR_IN_ANY_HELI
* IS_CHAR_IN_ANY_PLANE
* IS_CHAR_IN_ANY_POLICE_VEHICLE
* IS_CHAR_IN_ANY_TRAIN

* FREEZE_CHAR_POSITION
* GET_CHAR_ANIM_CURRENT_TIME
* GET_CHAR_ANIM_EVENT_TIME
* GET_CHAR_ANIM_TOTAL_TIME
* GET_CHAR_AREA_VISIBLE
* GET_CHAR_ARMOUR
* GET_CHAR_COORDINATES
* GET_CHAR_GRAVITY
* GET_CHAR_HEADING
* GET_CHAR_HEALTH
* GET_CHAR_HEIGHT_ABOVE_GROUND
* GET_CHAR_IN_CAR_PASSENGER_SEAT
* GET_CHAR_LAST_DAMAGE_BONE
* GET_CHAR_MELEE_ACTION_FLAG0
* GET_CHAR_MELEE_ACTION_FLAG1
* GET_CHAR_MELEE_ACTION_FLAG2
* GET_CHAR_MODEL
* GET_CHAR_MONEY
* GET_CHAR_MOVE_ANIM_SPEED_MULTIPLIER
* GET_CHAR_PROP_INDEX
* GET_CHAR_READY_TO_BE_EXECUTED
* GET_CHAR_READY_TO_BE_STUNNED
* GET_CHAR_SPEED
* GET_CHAR_SWIM_STATE
* GET_CHAR_TEXTURE_VARIATION
* GET_CHAR_VELOCITY
* GET_CHAR_WEAPON_IN_SLOT
* GET_CHAR_WILL_COWER_INSTEAD_OF_FLEEING

</details>

<details>
<summary> Garage Commands: </summary>

* OPEN_GARAGE
* CLOSE_GARAGE

</details>

<details>
<summary> Locate commands: </summary>

* LOCATE_CAR_2D
* LOCATE_CAR_3D
* LOCATE_CHAR_ANY_MEANS_2D
* LOCATE_CHAR_ANY_MEANS_3D

* LOCATE_CHAR_IN_CAR_2D
* LOCATE_CHAR_IN_CAR_3D

* LOCATE_CHAR_ON_FOOT_2D
* LOCATE_CHAR_ON_FOOT_3D

What are these ones?
* LOCATE_CHAR_ANY_MEANS_CAR_2D
* LOCATE_CHAR_ANY_MEANS_CAR_3D
* LOCATE_CHAR_ANY_MEANS_CHAR_2D
* LOCATE_CHAR_ANY_MEANS_CHAR_3D
* LOCATE_CHAR_IN_CAR_CAR_2D
* LOCATE_CHAR_IN_CAR_CAR_3D

</details>


<details>
<summary> Message commands: </summary>

* PRINT_HELP
</details>


<details>
<summary> Other commands: </summary>

* SET_ALL_RANDOM_PEDS_FLEE
* SET_CHAR_DIES_INSTANTLY_IN_WATER
* SET_CHAR_DROPS_WEAPONS_WHEN_DEAD
* SET_CHAR_DROWNS_IN_SINKING_VEHICLE
* SET_CHAR_DROWNS_IN_WATER
* SET_CHAR_DUCKING
* SET_CHAR_COORDINATES
* SET_CHAR_AS_ENEMY
* SET_CHAR_SHOOT_RATE
* SET_PED_WEAPON
* SET_SWIM_SPEED

</details>

<details>
<summary> Tasks: </summary>

* TASK_ACHIEVE_HEADING
* TASK_AIM_GUN_AT_CHAR
* TASK_AIM_GUN_AT_COORD
* TASK_CAR_DRIVE_TO_COORD
* TASK_CAR_DRIVE_TO_COORD_NOT_AGAINST_TRAFFIC
* TASK_CAR_DRIVE_WANDER - Make the ped drive around
* TASK_COMBAT -  Make the ped fight
* TASK_FLEE_CHAR - Make the ped flee
* TASK_GO_STRAIGHT_TO_COORD
* TASK_GO_TO_CHAR
* TASK_GO_TO_COORD_ANY_MEANS
* TASK_GO_TO_COORD_WHILE_AIMING
* TASK_GO_TO_COORD_WHILE_SHOOTING
* TASK_GOTO_CAR
*
* TASK_HANDS_UP - Looks like it takes these values (1: ped, 2: time?)
* TASK_LOOK_AT_COORD
* TASK_LOOK_AT_OBJECT
* TASK_LOOK_AT_VEHICLE
* TASK_OPEN_DRIVER_DOOR
* TASK_OPEN_PASSENGER_DOOR
* TASK_PLAY_ANIM

* TASK_SAY
* TASK_SEEK_COVER_FROM_PED
* TASK_SIT_DOWN
</details>


<details>
<summary> Possible example for using the shoot rate: </summary>

```
        finale2.txt GTAIV
    SET_CHAR_RELATIONSHIP( l_U3195[l_U3013]._fU0, 5, 0 );
    OPEN_SEQUENCE_TASK( ref l_U2975 );
    TASK_SHOOT_AT_CHAR( 0, l_U2481, 4000, 1 );
    TASK_COMBAT( 0, l_U2481 );
    CLOSE_SEQUENCE_TASK( l_U2975 );
    TASK_PERFORM_SEQUENCE( l_U3195[l_U3013]._fU0, l_U2975 );
    CLEAR_SEQUENCE_TASK( l_U2975 );
    SET_SENSE_RANGE( l_U3195[l_U3013]._fU0, 140.00000000 );
    SET_CHAR_SHOOT_RATE( l_U3195[l_U3013]._fU0, 75 );
```
</details>

<br>

Look for a native for this: Getting marker coords gta 4 native

Other links:
* https://github.com/EmmanuelU/xmc-mod-menu/blob/master/menu_functions.c
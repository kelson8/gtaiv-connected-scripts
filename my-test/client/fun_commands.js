addCommandHandler("gravoff", function (command, text) {
    if (game.game == GAME_GTA_IV) {
        natives.setGravityOff(true);
        message("You can now float away.");
    }
});

addCommandHandler("gravon", function (command, text) {
    if (game.game == GAME_GTA_IV) {
        natives.setGravityOff(false);
        message("You have gravity again.");
    }
});

// TODO Test these natives later

/* ambtv.c

REQUEST_ANIMS( "missambtv" );
TASK_PLAY_ANIM( 0, "sit_down", "missambtv", 8.00000000, 0, 0, 0, 0, -2 );
TASK_PLAY_ANIM( 0, "sit_loop", "missambtv", 8.00000000, 1, 0, 0, 0, -2 );
PLAY_SOUND_FRONTEND( l_U23, "TELEVISION_TURN_ON" );
*/
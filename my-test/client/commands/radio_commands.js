// Toggle the mobile radio command
let mobileRadio = false;


// TODO Check if this is possible in GTA 3, VC, and SA.
function toggleMobileRadio() {
    if (game.game == GAME_GTA_IV) {
        let setMobileRadioEnabledDuringGameplay = natives.setMobileRadioEnabledDuringGameplay;
        let setMobilePhoneRadioState = natives.setMobilePhoneRadioState;
        let retuneRadioUp = natives.retuneRadioUp;


        mobileRadio = !mobileRadio;
        setMobileRadioEnabledDuringGameplay(mobileRadio);
        setMobilePhoneRadioState(mobileRadio);
        retuneRadioUp();

        if (mobileRadio) {
            message("You have enabled the mobile radio.");
        } else {
            message("You have disabled the mobile radio.");
        }
    }
}

// This works, I can toggle the radio on and off
addCommandHandler("mobileradio", function () {
    toggleMobileRadio();
});
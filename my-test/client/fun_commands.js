addCommandHandler("gravoff", function(command, text){
    natives.setGravityOff(true);
    message("You can now float away.");
});

addCommandHandler("gravon", function(command, text){
    natives.setGravityOff(false);
    message("You have gravity again.");
});
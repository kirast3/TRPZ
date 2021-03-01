//Task 1
const express = require("express");
const app = express();
app.get("/", function(request, response){

    response.end("Hello from Express!");
});
app.listen(3000);

//Task 2
const colors = require("colors");
const sound = require("sound-play");
const play = require('audio-play');
const load = require('audio-loader');

load('beep.mp3').then(play);
sound.play("beep.mp3", 1);
sound.play("beep.mp3").then((response) => console.log("done"));
console.log(colors.rainbow("Slava Ukraine!"))

//T
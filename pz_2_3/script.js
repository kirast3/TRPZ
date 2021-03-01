const path = require("path");
const os = require("os")

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

sound.play("D:\\TRPZ\\pz_2_3\\beep.mp3", 1);
console.log(colors.rainbow("Slava Ukraine!"))

//Task 3
const readline =require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question("enter path: ", textPath=>{
    console.log(`Absolute path: ${textPath} \n Filename: ${path.basename(textPath)}\n Extension: ${path.extname(textPath)}\n OS: ${os.type}` );
    readline.close();
});


//Task 4
function coinTosser() {
    const readline = require('readline');
    let result = Math.round(Math.random());
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Head or Tail? (Enter 0 for Head; Enter 1 for Tail) ', (answer) => {
        if (result === Number.parseInt(answer)) {
            console.log("You're right");
        }
        else {
            console.log("No, you're wrong");
        }
        rl.close();
    });
}

coinTosser();
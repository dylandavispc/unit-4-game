//Initialize=============================================================================
let wins = 0;
let losses = 0;
let message = "Click Jewel to Begin!"

let randNum;
let jewel1;
let jewel2;
let jewel3;
let jewel4;
let counter;

reset();

$("#wins").text(wins);
$("#losses").text(losses);
$("#message").text(message);
$("#randNum").text(randNum);
// $("#cry1").text(jewel1);
// $("#cry2").text(jewel2);
// $("#cry3").text(jewel3);
// $("#cry4").text(jewel4);
$("#counter").text(counter);


//Buttons================================================================================
$(document).ready(function() {
    $("#cry1").on("click", function() {
        counter += jewel1;
        $("#counter").text(counter);
        taunt();
        checker();
        return;
    });
    $("#cry2").on("click", function() {
        counter += jewel2;
        $("#counter").text(counter);
        taunt();
        checker();
        return;
    });
    $("#cry3").on("click", function() {
        counter += jewel3;
        $("#counter").text(counter);
        taunt();
        checker();
        return;
    });
    $("#cry4").on("click", function() {
        counter += jewel4;
        $("#counter").text(counter);
        taunt();
        checker();
        return;
    });
});



//Functions===============================================================================

//Reset Function
function reset() {
randNum = Math.floor(Math.random() * (120 - 19)) + 19;
jewel1 = Math.floor(Math.random() * (12 - 1)) + 1;
jewel2 = Math.floor(Math.random() * (12 - 1)) + 1;
jewel3 = Math.floor(Math.random() * (12 - 1)) + 1;
jewel4 = Math.floor(Math.random() * (12 - 1)) + 1;
counter = 0;

$("#wins").text(wins);
$("#losses").text(losses);
$("#message").text(message);
$("#randNum").text(randNum);
// $("#cry1").text(jewel1);
// $("#cry2").text(jewel2);
// $("#cry3").text(jewel3);
// $("#cry4").text(jewel4);
$("#counter").text(counter);
return;
}


//Win Function
function win() {
    ++wins;
    message = "Dang! Well, I guess you win this time..."
    reset();
}


//Loss Function
function loss() {
    ++losses;
    message = "HA HA! I am victorious!!!"
    reset();
}


//Taunt Function
function taunt() {
    const taunts = ["Nice Try!", "Getting Closer!", "HA! More than that!!", "That's peasent change..", "AGAIN!", "Anything else?", "Come-on, cough it up!!", "I'm a banker, not a begger!", "That was close... NOT!!!", "He he he...", "Purely laughable.", "HA! The moon will hit earth before you ever win!!"]
    message = taunts[Math.floor(Math.random() * taunts.length)];
    $("#message").text(message);
}


//Checker
function checker() {
    if (counter > randNum) {loss()}
    else if (counter == randNum) {win()}
}




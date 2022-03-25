function computerPlay () {
    //this function randomly picks RPS for computer
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        return "rock";
    } else if (random === 2) {
        return "scissors";
    } else {
        return "paper";
    }
}

//this takes user's choice and confirms it is valid. if invalid, it asks again.
function userPlay () {

let playerSelection = prompt("Please choose rock, paper, or scissor.").toLowerCase();
let flag = true;

while (flag) {
    
    if(playerSelection === "rock" || playerSelection === "paper" ||
            playerSelection === "scissors") {
        flag = false;
        } else {
            playerSelection = prompt("Invalid answer! Choose rock, paper, or scissor.").toLowerCase();
        };
    console.log(Boolean(flag));
    };
    return playerSelection;
};

console.log(userPlay());



//console.log(computerPlay());
//console.log(playerSelection);
function computerPlay () {
    //this function randomly picks RPS for computer - testing complete
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        return "rock";
    } else if (random === 2) {
        return "scissors";
    } else {
        return "paper";
    }
}

//this takes user's choice and confirms it is valid. if invalid, it asks again - testing complete
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
    };
    return playerSelection;
};

function playRound (playerSelection, computerSelection) {
    //this function plays one round of RPS and logs result to console - testing complete
    console.log("The computer picked " + computerSelection + "!");
    if (playerSelection === "rock") {
        console.log("You picked rock!");
        if (computerSelection === "paper") {
            return "You lose! Paper beats rock!"
        } else if (computerSelection === "scissors") {
            return "You win! Rock beats scissors!"
        } else if (computerSelection === "rock") {
            return "Rock v Rock is a tie."
        }
    } else if (playerSelection === "paper") {
        console.log("You picked paper!");
        if (computerSelection === "paper") {
            return "Paper v paper is a tie!"
        } else if (computerSelection === "scissors") {
            return "You lose! Scissors beats paper!"
        } else if (computerSelection === "rock") {
            return "You win! Paper beats rock!"
        }
    } else if (playerSelection === "scissors") {
        console.log("You picked scissors!");
        if (computerSelection === "paper") {
            return "You win! Scissors beats paper!"
        } else if (computerSelection === "scissors") {
            return "Scissors v scissors is a tie."
        } else if (computerSelection === "rock") {
            return "You lose! Rock beats scissors!"
        }
    }
}

//console.log(playRound (userPlay(), computerPlay()));

function game () {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(userPlay(), computerPlay()));
        console.log(`Round ${i + 1} complete!`)
    }
}

//console.log(playRound(userPlay(), computerPlay()));
//console.log(game());
game();
console.log("test of javascript file");

function computerPlay () {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        return "rock";
    } else if (random === 2) {
        return "scissors";
    } else {
        return "paper";
    }
}

console.log(computerPlay());
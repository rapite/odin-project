let x = Math.random();

function rps(x) { // retrieves pc choice
    if (x <= .333) {
        return "rock" // rock
    } else if (x >= .666) {
        return "paper" // paper 
    } else {
        return "scissors" // scissors 
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // your code that uses playButton and log here
    const playButton = this.querySelector("#playButton");
    const log = this.querySelector("#log");

        playButton.addEventListener("click", () => {
        const player = prompt("rock, paper, or scissors?");
        if (!player) return;

        const computer = rps();
        let result = "";

        if (player.toLowerCase() === computer) {
            result = `the computer played ${computer}, tie!`;
        } else if (
            (player.toLowerCase() === "rock" && computer === "scissors") ||
            (player.toLowerCase() === "paper" && computer === "rock") ||
            (player.toLowerCase() === "scissors" && computer === "paper")
        ) {
            result = `the computer played ${computer}, you win!`;
        } else if (
            (player.toLowerCase() === "rock" && computer === "paper") ||
            (player.toLowerCase() === "paper" && computer === "scissors") ||
            (player.toLowerCase() === "scissors" && computer === "rock")
        ) {
            result = `the computer played ${computer}, you lose!`;
        } else {
            result = "Invalid input. Please enter rock, paper, or scissors.";
        }

        log.innerText = result;
    });

});


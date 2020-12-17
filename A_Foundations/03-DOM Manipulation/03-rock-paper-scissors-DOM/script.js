let score = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "paper") {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection == "scissors") {
            score++;
            return "You Win! Rock beats Scissors";
        } else {
            return "Draw!";
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "scissors") {
            return "You Lose! Scissors beats Paper";
        } else if (computerSelection == "rock") {
            score++;
            return "You Win! Paper beats Rock";
        } else {
            return "Draw!";
        }
    } else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "rock") {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection == "paper") {
            score++;
            return "You Win! Scissors beats Paper";
        } else {
            return "Draw!";
        }
    } else {
        return "You must choose Rock, Paper or Scissors!";
    }
}

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

const message = document.querySelector("#message");
const scoreMessage = document.querySelector("#scoreMessage");

const buttonRock = document.querySelector("#rock");
buttonRock.addEventListener("click", function (e) {
    message.textContent = playRound("rock", computerPlay());
    scoreMessage.textContent = "Score: " + score;
});

const buttonPaper = document.querySelector("#paper");
buttonPaper.addEventListener("click", function (e) {
    message.textContent = playRound("paper", computerPlay());
    scoreMessage.textContent = "Score: " + score;
});

const buttonScissors = document.querySelector("#scissors");
buttonScissors.addEventListener("click", function (e) {
    message.textContent = playRound("scissors", computerPlay());
    scoreMessage.textContent = "Score: " + score;
});

//#########################

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random() * 3); 
    console.log("Comp choice was: --> " + choices[num]);
    return choices[num];
}

function getPlayerChoice () {
    let choice = prompt("Time to choose your weapon. Rock, paper or scissors?");
    
    if (choice.toLowerCase() === "rock" || 
            choice.toLowerCase() === "paper" ||
            choice.toLowerCase() === "scissors" ) {
                return choice.toLowerCase();
            }
    else {
        console.log("You have to choose one");
        return "You have to choose one";
    }
}

function playRound(computerChoice, playerChoice) {

    let result = -100;

    switch (computerChoice) {
        case "rock":
            switch (playerChoice) {
                case "rock":
                    result = 0;
                    console.log("We have a rock-tie");
                    return result;
                case "paper":
                    result = 1;
                    console.log("You wrap the rock. Win");
                    return result;
                case "scissors":
                    result = -1;
                    console.log("Your scissors got crushed by a rock. It happens");
                    return result;
                default:
                    console.log("Someone didn't choose correctly")
                    return;
            }
        case "paper":
            switch (playerChoice) {
                case "rock":
                    result = -1;
                    console.log("Your rock gets wrapped by the paper. Lose.");
                    return result;
                case "paper":
                    result = 0;
                    console.log("We have a paper-tie");
                    return result;
                case "scissors":
                    result = 1;
                    console.log("Your scissors cut the paper in two. You win");
                    return result;
                default:
                    console.log("Someone didn't choose correctly");
                    return;
            }
        case "scissors":
            switch (playerChoice) {
                case "rock":
                    result = 1;
                    console.log("Your rock crashes the scissors. You win");
                    return result;
                case "paper":
                    result = -1;
                    console.log("Your paper gets cut by the scissors. You lose");
                    return result;
                case "scissors":
                    result = 0;
                    console.log("This win is cut in two by two scissors. It's a tie");
                    return result;
                default:
                    console.log("Someone didn't choose correctly");
                    return;
            }
    }
}

function game() {

    let playerWins = 0;

    for (let i = 0; i < 5; i++) {

        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        playerWins += playRound(computerChoice, playerChoice);

        console.log("Score: " + playerWins + "  <-->  " + -playerWins);
    }

    if (playerWins > 0) {
        console.log("You won the long game!!");
    } else if (playerWins < 0) {
        console.log("You lost but there's no shame in that :(");
    } else console.log("You didn't win but didn't lose either. Glass half full please");
}

game();
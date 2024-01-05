console.log("This is a call of the myRockCiso script");
let gameArray = ["scissors", "rock", "paper"];

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 100) % 3;
  return gameArray[computerChoice];
}
function getPlayerChoice() {
  let playerChoice;

  do {
    playerChoice = prompt("Please enter your choice: scissors, rock or paper");
    playerChoice ??= playerChoice = "nullish";
    if (playerChoice === "nullish") return;
    playerChoice = playerChoice.toLowerCase();
  } while (!gameArray.includes(playerChoice.toLowerCase()));
  return playerChoice;
}

function playRound(playerChoice, theComputerChoice) {
  //theComputerChoice = getComputerChoice();
  playerChoice ??= playerChoice = "nullish";
  if (playerChoice === "nullish") return "The game is canceled by user";

  if (playerChoice === gameArray[0]) {
    if (theComputerChoice === gameArray[0]) {
      return "you have the same power so no one win";
    }
    if (theComputerChoice === gameArray[1]) {
      return "you loose! Rock beats Scissors";
    }
    if (theComputerChoice === gameArray[2]) {
      return "you WIINN! Scisors beats Paper";
    }
  }
  if (playerChoice === gameArray[1]) {
    if (theComputerChoice === gameArray[1]) {
      return "you have the same power so no one win";
    }
    if (theComputerChoice === gameArray[2]) {
      return "you loose! Paper beats Rock";
    }
    if (theComputerChoice === gameArray[0]) {
      return "you WIINN! Rock beats Scissors";
    }
  }
  if (playerChoice === gameArray[2]) {
    if (theComputerChoice === gameArray[2]) {
      return "you have the same power so no one win";
    }
    if (theComputerChoice === gameArray[0]) {
      return "you loose! Scisors beats Paper";
    }
    if (theComputerChoice === gameArray[1]) {
      return "you WIINN! Paper beats Rock";
    }
  }
}
function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}
const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
console.log(playRound(playerSelection, computerSelection));
// console.log(getPlayerChoice("paper"));
// console.log(getPlayerChoice("paper"));
// console.log(getPlayerChoice("paper"));
//console.log(getPlayerChoice("qsd"));

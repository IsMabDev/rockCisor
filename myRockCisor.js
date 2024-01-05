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
    //if the user click on cancel the result is undefined
    playerChoice ??= playerChoice = "nullish";
    if (playerChoice === "nullish") return;

    //if the result is different from undefined it's treated as string
    playerChoice = playerChoice.toLowerCase();
  } while (!gameArray.includes(playerChoice.toLowerCase()));
  return playerChoice;
}

function playRound(playerChoice, theComputerChoice) {
  //this is a second solution and we return a number
  playerChoice ??= playerChoice = "nullish";
  if (playerChoice === "nullish") return;

  if (playerChoice === theComputerChoice) {
    return 0;
  }
  if (
    (playerChoice == "scissors" && theComputerChoice == "paper") ||
    (playerChoice == "rock" && theComputerChoice == "scissors") ||
    (playerChoice == "paper" && theComputerChoice == "rock")
  ) {
    return 1;
  } else return -1;
}

//according to the scores a message is played every round and a final message is thrown at the end of five won round
function game() {
  let playerScore = 0;
  let computerScore = 0;

  do {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    if (playerSelection === undefined) {
      console.log("The game is canceled by user");
      return;
    }
    if (playRound(playerSelection, computerSelection) > 0) {
      playerScore++;
      console.log("You Won this round");
    } else if (playRound(playerSelection, computerSelection) < 0) {
      computerScore++;
      console.log("You lose this round");
    } else console.log("it's a Tie");
  } while (playerScore < 5 && computerScore < 5);
  if (playerScore > computerScore) {
    console.log("YOOUUU AARRE THE WIINNER!!!!!!!!!!!!");
  } else console.log("you lose this game :(");
}

game();
/*
//this is to test one game
const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
console.log(playRound(playerSelection, computerSelection));
*/
// console.log(getPlayerChoice("paper"));
// console.log(getPlayerChoice("paper"));
// console.log(getPlayerChoice("paper"));
//console.log(getPlayerChoice("qsd"));

console.log("This is a call of the myRockCiso script");
let gameArray = ["scissors", "rock", "paper"];
let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
let roundMessage = "";
let finalMessage = "";

function resetUI() {
  playerChoice = "";
  computerChoice = "";
  playerScore = 0;
  computerScore = 0;
  roundMessage = "";
  finalMessage = "";
}

function updateUI() {
  playerScoreToShow.textContent = playerScore;
  computerScoreToShow.textContent = computerScore;
  computerChoiceToShow.textContent = computerChoice;
  playerChoiceToShow.textContent = playerChoice;
  round.textContent = roundMessage;
  final.textContent = finalMessage;
}
const buttons = document.querySelector("#buttons-container");
buttons.addEventListener("click", handleClick);

const playerScoreToShow = document.querySelector(".player .score");
const computerScoreToShow = document.querySelector(".computer .score");

const playerChoiceToShow = document.querySelector("#player-choice");

const computerChoiceToShow = document.querySelector("#computer-choice");

const newGameButton = document.querySelector("#new-game");
newGameButton.addEventListener("click", () => {
  resetUI();
  updateUI();
  buttons.addEventListener("click", handleClick);
});

const round = document.querySelector(".round");
const final = document.querySelector(".final-message");

function handleClick(e) {
  switch (e.target.id) {
    case "scissors":
      playerChoice = "scissors";

      break;
    case "rock":
      playerChoice = "rock";
      break;
    case "paper":
      playerChoice = "paper";
      break;
    default:
      console.log("Check the buttons ids");
  }
  game();
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 100) % 3;
  return gameArray[computerChoice];
}

function playRound(playerChoice, theComputerChoice) {
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
  computerChoice = getComputerChoice();

  if (playRound(playerChoice, computerChoice) > 0) {
    playerScore++;
    roundMessage = "You Won this round";
  } else if (playRound(playerChoice, computerChoice) < 0) {
    computerScore++;
    roundMessage = "You lose this round";
  } else roundMessage = "it's a Tie";

  //change the number to get the maximum of point to win the round
  if (playerScore === 5 || computerScore === 5) {
    buttons.removeEventListener("click", handleClick);
    if (playerScore > computerScore) {
      finalMessage = "YOOUUU AARRE THE WIINNER!!!!!!!!!!!!";
    } else finalMessage = "you lose this game :(";
  }
  updateUI();
}

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

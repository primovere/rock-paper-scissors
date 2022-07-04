function computerPlay() {
  // generate a random integer between 0 and 2 (both inclusive)
  let num = Math.floor(Math.random() * 3);

  // each integer returns a corresponding string
  switch (num) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
    } 
}


let playerSelection;

const div = document.querySelector("div");
const rps = ["Rock", "Paper", "Scissors"];
const buttons = document.querySelectorAll("button");
let singleRoundResult;
let result;
let playerScore = 0;
let comScore = 0;
let winner;


function game() {
  // make each button represents rock, paper or scissors
  for (let i = 0; i < 3; i++) {
    buttons[i].addEventListener("click", () => playerSelection = rps[i]);
  }
  
  // once click a button, start to play a round
  buttons.forEach((button) => {
    button.addEventListener("click", playRound);
  });

}

let computerSelection;
function playRound() {
  computerSelection=computerPlay()
  
  if (playerScore < 5 && comScore < 5) {
    if (playerSelection.localeCompare( "Rock", undefined, {sensitivity: "accent"} ) === 0) {
      if (computerSelection == "Rock") {
        singleRoundResult = "Draw";
      } else if (computerSelection == "Paper") {
        singleRoundResult = "You Lose! Paper beats Rock.";
      } else if (computerSelection == "Scissors") {
        singleRoundResult = "You Win!";
      }
    } else if (playerSelection.localeCompare( "Paper", undefined, {sensitivity: "accent"} ) === 0) {
      if (computerSelection == "Rock") {
      singleRoundResult =  "You Win!";
      } else if (computerSelection == "Paper") {
        singleRoundResult =  "Draw";
      } else if (computerSelection == "Scissors") {
        singleRoundResult =  "You Lose! Scissors beats Paper";
      }
    } else if (playerSelection.localeCompare( "Scissors", undefined, {sensitivity: "accent"} ) === 0) {
      if (computerSelection == "Rock") {
        singleRoundResult =  "You Lose! Rock beats Scissors.";
      } else if (computerSelection == "Paper") {
        singleRoundResult =  "You Win!";
      } else if (computerSelection == "Scissors") {
        singleRoundResult =  "Draw";
      }
    } else {
      singleRoundResult =  "What?";
    }

    if (singleRoundResult == "You Win!") {
      ++playerScore;
    } else if (singleRoundResult !== "Draw") {
      ++comScore;
    }
  }
  
  if (playerScore === 5) {
    winner = "You";
  } else if (comScore === 5) {
    winner = "Com";
  }
  
  result = `${singleRoundResult}   Player: ${playerScore} Computer: 
    ${comScore}`;
  if (playerScore === 5 || comScore === 5) {
    result += `  Winner: ${winner}`
    buttons.forEach((button) => {
      button.removeEventListener("click", () => {
        playRound();
      });
    });
  }
  div.textContent = result;
}

game();

let num;

function computerPlay() {
  // ramdomly generate a number between 0 and 2 (both inclusive)
  num = Math.floor(Math.random() * 3);

  // each number returns a corresponding string
  switch (num) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
    } 
}

function playRound(playerSelection, computerSelection=computerPlay()) {
  playerSelection = prompt("Rock, Paper or Scissors?")
  if (playerSelection == "Rock") {
    if (computerSelection == "Rock") {
      return "Draw";
    } else if (computerSelection == "Paper") {
      return "You Lose! Paper beats Rock.";
    } else if (computerSelection == "Scissors") {
      return "You Win!";
    }
  } else if (playerSelection == "Paper") {
    if (computerSelection == "Rock") {
      return "You Win!";
    } else if (computerSelection == "Paper") {
      return "Draw";
    } else if (computerSelection == "Scissors") {
      return "You Lose! Scissors beats Paper";
    }
  } else if (playerSelection == "Scissors") {
    if (computerSelection == "Rock") {
      return "You Lose! Rock beats Scissors.";
    } else if (computerSelection == "Paper") {
      return "You Win!";
    } else if (computerSelection == "Scissors") {
      return "Draw";
    }
  }

}
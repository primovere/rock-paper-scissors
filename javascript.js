let num;

function computerPlay() {
  // ramdomly generate a number between 0 and 2 (both inclusive)
  num = Math.floor(Math.random() * 3);
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
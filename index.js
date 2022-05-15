function computerPlay() {
  const playsOptions = ["Rock", "Paper", "Scissors"];
  return playsOptions[Math.floor(Math.random() * playsOptions.length)];
}

function playerSelection() {
  const choice = prompt("type your play: \n1. Rock\n2. Paper\n3. Scissors");
  switch (choice) {
    case "1":
      return "Rock";
    case "2":
      return "Paper";
    case "3":
      return "Scissors";
    case null:
      return "Player didn't choose";
    default:
      return choice;
  }
}

function playRound(playerSelection, computerSelection) {
  let result = "It's a tie!";
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection == computerSelection) return result;

  switch (playerSelection) {
    case "rock":
      computerSelection == "paper"
        ? (result = "You lost! Paper beats Rock")
        : (result = "You win! Rock beats Scissors");
      break;

    case "paper":
      computerSelection == "scissors"
        ? (result = "You lost! Scissors beats Paper")
        : (result = "You win! Paper beats Rock");
      break;

    case "scissors":
      computerSelection == "rock"
        ? (result = "You lost! Rock beats Scissors")
        : (result = "You win! Scissors beats Paper");
      break;
    default:
      result = "Game Aborted!";
  }
  return result;
}

const player = playerSelection();
const computer = computerPlay();
console.log(`Player: ${player}\nComputer: ${computer}`);

console.log(playRound(player, computer));

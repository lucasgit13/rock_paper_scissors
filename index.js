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
  let whoWon = "tie";
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection == computerSelection) return [result, whoWon];

  switch (playerSelection) {
    case "rock":
      if (computerSelection == "paper") {
        result = "You lost! Paper beats Rock";
        whoWon = "computer";
      } else {
        whoWon = "player";
        result = "You win! Rock beats Scissors";
      }
      break;
    case "paper":
      if (computerSelection == "scissors") {
        result = "You lost! Scissors beats Paper";
        whoWon = "computer";
      } else {
        whoWon = "player";
        result = "You win! Paper beats Rock";
      }

      break;
    case "scissors":
      if (computerSelection == "rock") {
        result = "You lost! Rock beats Scissors";
        whoWon = "player";
      } else {
        whoWon = "player";
        result = "You win! Scissors beats Paper";
      }
      break;
    default:
      whoWon = "nobody";
      result = "Game Aborted!";
  }
  return [result, whoWon];
}

function game(playRound) {
  let userCount = 0;
  let computerCount = 0;

  for (let i = 1; i <= 5; i++) {
    const player = playerSelection();
    const computer = computerPlay();
    const [result, whoWon] = playRound(player, computer);
    if (whoWon == "player") userCount += 1;
    if (whoWon == "computer") computerCount += 1;
    console.log(`[${i}/5]`);
    console.log(`Player: ${player}\nComputer: ${computer}`);
    console.log(result);
  }
  if (userCount > computerCount) console.log("You won the round!");
  if (userCount < computerCount) console.log("You lost the round!");
  console.log(`Score:\n\tPlayer: ${userCount}\n\tComputer: ${computerCount}`);
}

game(playRound);

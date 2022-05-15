function computerPlay() {
  const playsOptions = ["Rock", "Paper", "Scissors"];
  return playsOptions[Math.floor(Math.random() * playsOptions.length)];
}

function playRound(playerSelection, computerSelection) {
  let result = "It's a tie!";
  if (playerSelection == computerSelection) return result;

  switch (playerSelection) {
    case "Rock":
      computerSelection == "Paper"
        ? (result = "You lost! Paper beats Rock")
        : (result = "You win! Rock beats Scissors");
      break;

    case "Paper":
      computerSelection == "Rock"
        ? (result = "You win! Paper beats Rock")
        : (result = "You lost! Scissors beats Paper");
      break;

    case "Scissors":
      computerSelection == "Paper"
        ? (result = "You win! Scissors beats Paper")
        : (result = "You lost! Rock beats Scissors");
      break;
  }
  return result;
}

console.log(playRound("Paper", computerPlay()));

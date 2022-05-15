const PLAY_OPTIONS = ["Rock", "Paper", "Scissors"];

function computerPlay(playsOptions) {
  return playsOptions[Math.floor(Math.random() * playsOptions.length)];
}

function playerSelection() {
  const choice = prompt(
    "type your play: \n1. Rock\n2. Paper\n3. Scissors\n4. Sair"
  );
  switch (choice) {
    case "1":
      return "Rock";
    case "2":
      return "Paper";
    case "3":
      return "Scissors";
    case "4":
      return "break";
    case null:
      return "Player didn't choose";
    default:
      return choice;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Player didn't choose")
    return {
      whoWon: "nobody",
      message: "Invalid input! Game aborted...",
    };

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection == computerSelection)
    return {
      whoWon: "tie",
      message: "It's a tie!",
    };

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  )
    return {
      whoWon: "player",
      message: `You win! ${playerSelection} beats ${computerSelection}!`,
    };
  else
    return {
      whoWon: "computer",
      message: `You lost! ${computerSelection} beats ${playerSelection}!`,
    };
}

function game(playRound, timesPlay) {
  if (!confirm("Let's play?")) return;

  let count = timesPlay;
  let userCount = 0;
  let computerCount = 0;

  while (count > 0) {
    const player = playerSelection(PLAY_OPTIONS) || "Invalid play";
    if (player == "break") break;
    const computer = computerPlay(PLAY_OPTIONS);
    const play = playRound(player, computer);
    const message = play.message;
    const whoWon = play.whoWon;

    if (whoWon == "player") {
      userCount += 1;
      count--;
    }
    if (whoWon == "computer") {
      computerCount += 1;
      count--;
    }
    if (whoWon == "tie") {
      count--;
    }
    console.log(`[${count}/${timesPlay}]`);
    console.log(`Player: ${player}\nComputer: ${computer}`);
    console.log(message);
  }
  if (userCount > computerCount) console.log("You won the round!");
  if (userCount < computerCount) console.log("You lost the round!");
  if (userCount == computerCount) console.log("It's a tie!");
  console.log(`Score:\n\tPlayer: ${userCount}\n\tComputer: ${computerCount}`);
}

game(playRound, 5);

function computerPlay() {
  const playsOptions = ["Rock", "Paper", "Scissors"];
  return playsOptions[Math.floor(Math.random() * playsOptions.length)];
}

console.log(computerPlay());

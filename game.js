// Rock, Scissors, paper
// Winner player one or player two

const whoWins = (value1, value2) => {
  if (typeof value1 !== "string" || typeof value2 !== "string") {
    return "Invalid parameter. Please use rock, paper or scissors";
  }

  const player1 = value1.toLowerCase();
  const player2 = value2.toLowerCase();
  const allowedValues = ["rock", "paper", "scissors"];

  if (!allowedValues.includes(player1) || !allowedValues.includes(player2)) {
    return "Invalid parameter. Please use rock, paper or scissors";
  }

  if (player1 === "paper" && player2 === "rock") {
    return "Player one wins";
  }
  if (player1 === "rock" && player2 === "scissors") {
    return "Player one wins";
  }
  if (player1 === "scissors" && player2 === "paper") {
    return "Player one wins";
  }
  if (player2 === "paper" && player1 === "rock") {
    return "Player two wins";
  }
  if (player2 === "rock" && player1 === "scissors") {
    return "Player two wins";
  }
  if (player2 === "scissors" && player1 === "paper") {
    return "Player two wins";
  }
};

const Priscilla = "Rock";
const Rafael = "paper";

const Maria = 1;
const Antonio = "paper";

const Gabriel = "Rock";
const Vitoria = "apple";

console.log(whoWins(Priscilla, Rafael));
console.log(whoWins(Maria, Antonio));
console.log(whoWins(Gabriel, Vitoria));

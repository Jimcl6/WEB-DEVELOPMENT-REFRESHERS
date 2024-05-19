let intMaximum = parseInt(prompt("Enter a maximum number:"));

while (!intMaximum) {
  parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * intMaximum) + 1;
console.log(targetNum);

let userGuess = parseInt(prompt("Enter your guess here:"));

while (userGuess !== targetNum) {
  if (userGuess > targetNum) {
    userGuess = parseInt(prompt("Too high guess again!"));
  } else {
    userGuess = parseInt(prompt("Too low guess again!"));
  }
}

alert(`YOU GUESSED ${userGuess}! YOU GOT IT! CONGRATS!!!`);

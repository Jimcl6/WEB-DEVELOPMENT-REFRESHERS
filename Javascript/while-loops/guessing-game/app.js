let intMaximum = parseInt(
  prompt("Enter a maximum number: (number should not be higher than 10)")
);

while (!intMaximum || intMaximum > 10) {
  parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * intMaximum) + 1;
console.log(targetNum);

let userGuess = parseInt(prompt("Enter your guess here:"));
let attempts = 1;

while (pareInt(userGuess) !== targetNum) {
  if (userGuess === 'q') : alert('You quitter!') break;
  attempts++;
  if (userGuess > targetNum) {
    userGuess = parseInt(prompt("Too high guess again!"));
  } else {
    userGuess = parseInt(prompt("Too low guess again!"));
  }
}

if (attempts > 3) {
  alert(
    `It took you ${attempts} guesses, you guessed ${userGuess}. You guessed right. But, What a noob.`
  );
} else if (attempts <= 3 && attempts > 1) {
  alert(
    `It took you ${attempts} guesses. You guessed ${userGuess}. You guessed right!`
  );
} else {
  alert(
    `You guessed ${userGuess}. You got it! It took you ${attempts} guess. What a pro!`
  );
}

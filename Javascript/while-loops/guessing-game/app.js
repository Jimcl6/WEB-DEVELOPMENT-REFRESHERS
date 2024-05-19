let maximum = parseInt(prompt("Enter a maximum number!"));

while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * 10) + 1;

let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") {
    break;
  }
  guess = parseInt(guess);
  attempts++;

  if (guess > targetNum) {
    guess = prompt("Too high guess again!");
    attempts++;
  } else if (guess < targetNum) {
    guess = prompt("Too low guess again!");
    attempts++;
  } else {
    guess = prompt("Invalid guess! Please enter a number or type 'q' to quit.");
    if (guess === "q") {
      break;
    }
  }
}

if (guess === "q") {
  alert("Ok, YOU QUIT!");
} else {
  alert(`It's ${targetNum}! You got it! It took you ${attempts}.`);
}

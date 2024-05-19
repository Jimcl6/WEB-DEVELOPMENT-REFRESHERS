let intMaximum = parseInt(prompt("Enter a maximum number:"));

while (!intMaximum) {
  parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * intMaximum) + 1;
console.log(targetNum);

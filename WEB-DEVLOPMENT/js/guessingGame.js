let maximum = parseInt(prompt("Enter the maximum number!"));
while (isNaN(maximum) || maximum <= 0) {
    maximum = parseInt(prompt("Please enter a valid positive number:"));
}

const target = Math.floor(Math.random() * maximum) + 1;
console.log(target); // You can remove this if you don't want to reveal the target.

let guess;
let attempts = 0;

while (true) {
    guess = parseInt(prompt("Enter your guess:"));
    attempts++;

    if (isNaN(guess)) {
        alert("Please enter a valid number!");
    } else if (guess < target) {
        alert("Too low! Guess higher.");
    } else if (guess > target) {
        alert("Too high! Guess lower.");
    } else {
        alert(`Good guess! It took you ${attempts} tries.`);
        break;
    }
}

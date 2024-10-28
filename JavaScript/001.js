let gameNum = 25;
let userNum = prompt("Guess Game Num :");

while(userNum != gameNum) {
    userNum = prompt("You Entered Wrong Number . Guess Again :");
}
console.log(" Congratilation You Entered Correct Number");

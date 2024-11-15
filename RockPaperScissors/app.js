let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-Score");
const compScorePara = document.querySelector("#comp-Score");


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

//Comp Choice Generate
const genCompChoice = () => {
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
};
// Show Winner Computer or User
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
         msg.style.backgroundColor = "red"
    }
};

// Check User Choice And Computer Choice
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice ==="rock"){
            userWin = compChoice === "paper"? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice ==="scissors" ? false : true;

        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
 };

 // Collect Choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    });
});
// If Game Is Draw
const drawGame = () => {
    msg.innerText = "Game Was Draw. Play Again!";
     msg.style.backgroundColor = "#081b31"
};
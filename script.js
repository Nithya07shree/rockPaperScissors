let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const genCompChoice = () => {
    const options = ["rock", "paper","scissors"];
    //generate random whole number
    //math.floor for getting whole number value 
    //math.random for getting random value. multiplying it with 3 gives a number in the range 0 to 2
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was a draw";
    msg.style.backgroundColor = "rgb(42, 10, 83)";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Computer Wins! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //generate computer choice -> modular way of programming
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false :true;
        } else if(userChoice === "paper") {
            //rock or scissors
            userWin = compChoice === "rock" ? true :false;
        } else {
            //paper or rock
            userWin = compChoice === "paper" ? true: false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

//for reset 
let resetbtn = document.querySelector("#reset");
resetbtn.addEventListener("click",() =>{
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = "0";
    compScorePara.innerText = "0";
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "rgb(42, 10, 83)";
}); 
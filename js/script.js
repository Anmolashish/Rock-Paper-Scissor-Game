let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");

const scoreOfUser = document.getElementById("user-score");
const scoreOfComp = document.getElementById("comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was a draw. Play again.";
  msg.style.backgroundColor = "#C38EDC";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    scoreOfUser.innerHTML = userScore;
    msg.innerText = "You Win!";
    msg.style.backgroundColor = "#7CA7F8";
  } else {
    compScore++;
    scoreOfComp.innerText = compScore;
    msg.innerText = "You Lose";
    msg.style.backgroundColor = "#FF6B6B";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

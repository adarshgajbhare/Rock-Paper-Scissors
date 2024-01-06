let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let computerScore = document.querySelector(".computer-score");
let yourScore = document.querySelector(".user-score");

const drawMatch = () => {
  msg.innerHTML = "Game was Draw. Play again.";
  msg.style.backgroundColor = " #081b31";
};

const computerChoice = () => {
  const comOptions = ["rock", "paper", "scissors"];

  const randIdx = Math.floor(Math.random() * 3);

  return comOptions[randIdx];
};

const showWinner = (userWin, userChoice, comChoice) => {
  if (userWin == true) {
    userScore++;
    msg.innerHTML = `Your win. Your ${userChoice}, beats ${comChoice}`;
    msg.style.backgroundColor = "green";
    yourScore.innerHTML = userScore;
  } else {
    comScore++;
    msg.innerHTML = `Your lose. Your ${userChoice}, got beaten by ${comChoice}`;
    msg.style.backgroundColor = "red";
    computerScore.innerHTML = comScore;
  }
};

const playGame = (userChoice) => {
  comChoice = computerChoice();
  console.log(comChoice, userChoice);
  if (comChoice === userChoice) {
    drawMatch();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //  paper sce

      userWin = comChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = comChoice === "rock" ? true : false;
    } else {
      userWin = comChoice === "paper" ? false : true;
    }

    showWinner(userWin, userChoice, comChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

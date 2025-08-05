// const userScore =0;
// const computerScore = 0;
// const userChoice_div = document.getElementById(userChoice);
// const userScore_span = document.getElementById("player-score");
// const computerScore_span = document.getElementById("comp-score");
// const scoreBoard_div = document.querySelector(".scoreboard");
// const result_p = document.querySelector(".result >p");
// const rock_div = document.getElementById("Rock");
// const paper_div = document.getElementById("Paper");
// const scissors_div = document.getElementById("Scissor");
// function getComputerChoice(){
//     const choices = ["Rock", "Paper", "Scissor"];
//     const randomNumber = (Math.floor(Math.random() * 3));
//     return choices (randomNumber);
// }

// function convertToWord(letter) {
//     if (letter === "Rock") return "Rock";
//     if (letter === "Paper") return "Paper";
//     return "Scissors"
// }
// function win(userChoice, computerChoice) {
//     userScore ++;
//     userScore_span.innerHTML = userScore;
//     computerScore_span = computerScore;
//     const smallUserWord = "user".fontsize(3).sub();
//     const smallCompWord = "comp".fontsize(3) .sub();
//     result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} "beats" ${convertToWord(computerChoice)}${smallCompWord}. You Win!`;
//    userChoice_divclassList.add('green-glow');
//    setTimeout(() => userChoice_div.classList.remove('green-glow'), 200);

// }

// function lose(userChoice, computerChoice) {
//     userScore ++
//     userScore_span.innerHTML = userScore;
//     computerScore_span = computerScore;
//     const smallUserWord = "user".fontsize(3).sub();
//     const smallCompWord = "comp".fontsize(3) .sub();
//     result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} "equals" ${convertToWord(computerChoice)}${smallCompWord}. You Lose`;
//     userChoice_div.classList.add('red-glow');
//     setTimeout(() =>userChoice_div.classList.remove('red-glow'), 200);
// }

// function draw(userChoice, computerChoice) {
//     const smallUserWord = "user".fontsize(3).sub();
//     const smallCompWord = "comp".fontsize(3) .sub();
//     const userChoice_div = document.getElementById(userChoice);
//     result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} "beats" ${convertToWord(computerChoice)}${smallCompWord}. It's a Draw`;
//     userChoice_div.classList.add('gray-glow');
//     setTimeout(() =>userChoice_div.classList.remove('gray-glow'), 200);
// }
// getComputerChoice(userChoice);
// const computerChoice = getComputerChoice();
// console.log("user choice =>" + userChoice);
// console.log("computer choice =>" + computerChoice);

// function game(userChoice){
//     const computerChoice = getComputerChoice();
//     switch (userChoice + computerChoice) {
//         case "RockScissor":
//         case "PaperRock":
//         case "ScissorPaper":
//       win(userChoice, computerChoice);
//         break;
//         case "RockPaper":
//         case "PaperRock":
//         case "ScissorPaper":
//             lose(userChoice, computerChoice);
//             break;
//         case "RockRock":
//         case "PaperPaper":
//         case "ScissorScissor":
//             draw(userChoice, computerChoice);
//             break;
//     }
//    function main()  {
// rock_div.addEventListener("click", () => game("Rock"));
// paper_div.addEventListener('click, ()'=> game("Paper"));
// scissors_div.addEventListener('click, ()'=> game("scissor"));
// }
// }
// main();
// 1. Score variables
let userScore = 0;
let computerScore = 0;

// 2. Cached DOM elements
const userScore_span    = document.getElementById("player-score");
const computerScore_span= document.getElementById("comp-score");
const result_p          = document.querySelector(".result > p");
const rock_div          = document.getElementById("Rock");
const paper_div         = document.getElementById("Paper");
const scissor_div       = document.getElementById("Scissor");

// 3. Helper functions
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissor"];
  return choices[Math.floor(Math.random() * 3)];
}

function convertToWord(choice) {
  return choice; // already full-word
}

// 4. Outcome handlers
function win(userChoice, compChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  const userDiv = document.getElementById(userChoice);
  result_p.innerHTML = `${userChoice} beats ${compChoice}. You win!`;
  userDiv.classList.add("green-glow");
  setTimeout(() => userDiv.classList.remove("green-glow"), 500);
}

function lose(userChoice, compChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  const userDiv = document.getElementById(userChoice);
  result_p.innerHTML = `${compChoice} beats ${userChoice}. You lose.`;
  userDiv.classList.add("red-glow");
  setTimeout(() => userDiv.classList.remove("red-glow"), 500);
}

function draw(userChoice, compChoice) {
  const userDiv = document.getElementById(userChoice);
  result_p.innerHTML = `${userChoice} equals ${compChoice}. It’s a draw.`;
  userDiv.classList.add("gray-glow");
  setTimeout(() => userDiv.classList.remove("gray-glow"), 500);
}

// 5. Main game logic
function game(userChoice) {
  const compChoice = getComputerChoice();
  switch (userChoice + compChoice) {
    case "RockScissor":
    case "PaperRock":
    case "ScissorPaper":
      return win(userChoice, compChoice);
    case "RockPaper":
    case "PaperScissor":
    case "ScissorRock":
      return lose(userChoice, compChoice);
    default:
      return draw(userChoice, compChoice);
  }
}

// 6. Attach event listeners
function main() {
  rock_div.addEventListener("click", () => game("Rock"));
  paper_div.addEventListener("click", () => game("Paper"));
  scissor_div.addEventListener("click", () => game("Scissor"));
}

main();

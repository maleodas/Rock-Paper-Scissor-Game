let userScore =0;
let computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
  const choices = ['r','p','s'];
  const randomNumber = Math.floor(Math.random() *3);
  return choices[randomNumber];
}

function converttoWord(letter){
  if(letter == "r") return "Rock";
  if(letter == "p") return "Paper";
  if (letter == "s") return "Scissor";
}

function win(userChoice,computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = converttoWord(userChoice)  +  " beats " + converttoWord(computerChoice)  + " .You Wins ";
}

function lose(userChoice,computerChoice){
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = converttoWord(userChoice)  +  " loses " + converttoWord(computerChoice)  + " .You lose ";

}

function draw(userChoice,computerChoice){
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = converttoWord(userChoice)  +  " Equals " + converttoWord(computerChoice)  + " .This is draw ";
}

function game(userChoice){
const computerChoice = getComputerChoice();
switch (userChoice + computerChoice){
  case "rs":
  case "pr":
  case "sp":
   win(userChoice,computerChoice);
   break;
  case "sr":
  case "rp":
  case "ps":
   lose(userChoice,computerChoice);
  case "ss":
  case "rr":
  case "pp":
   draw(userChoice,computerChoice);
   break;
}
}

function main(){
rock_div.addEventListener('click',function(){
  game("r");
})

paper_div.addEventListener('click',function(){
game("p");
})

scissors_div.addEventListener('click',function(){
  game("s");
})
}
main();

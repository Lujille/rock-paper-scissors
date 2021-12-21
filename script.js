const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const scoreInfo = document.getElementById('score-info');
const endGame = document.getElementById('end-game');
const restartButton = document.getElementById('btn-restart');
const endMessage = document.getElementById('end-message');
const overlayEnd = document.getElementById('overlay-end');

let human = 0;
let computer = 0;
let result = "";

// function to generate a random choices for computer
function computerPlay(){
  const weapon = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * weapon.length);

  return weapon[random];

}

// main logic of the game
function playRound(playerSelection, computerSelection){
  if(playerSelection===computerSelection){
    result = "tie";
  }
  else if((playerSelection==="rock" && computerSelection==="scissors")||
  (playerSelection==="paper" && computerSelection==="rock")||
  (playerSelection==="scissors" && computerSelection==="paper")){
    human+=1;
    result = "win";
  }
  else{
    computer+=1;
    result = "lose";
  }
}

// function when the player click the button
function playerClick(playerSelection){
  const computerSelection = computerPlay();

  playRound(playerSelection, computerSelection);

  resultText();
  score();
  resultCondition();
}

// UI score
function resultText(){
  if(result === "tie"){
    scoreInfo.textContent = "It's tie";
  }
  else if(result === "win"){
    scoreInfo.textContent = "You Win";
  }
  else if(result === "lose"){
    scoreInfo.textContent = "You Lose";
  }
}

function score(){
  playerScore.textContent = `Player : ${human}`;
  computerScore.textContent = `Computer : ${computer}`;
}

function resultCondition(){
  if(human == 5){
    endGame.classList.add('active');
    overlayEnd.classList.add('active');
    endMessage.textContent = "You Won";
  }
  else if(computer == 5){
    endGame.classList.add('active');
    overlayEnd.classList.add('active');
    endMessage.textContent = "You Lose";
  }
}

// function for restart the game
function restartGame(){
  endGame.classList.remove('active');
  overlayEnd.classList.remove('active');
  scoreInfo.textContent = "Try to reach 5 points before the enemy";
  endMessage.textContent = "";
  human = 0;
  computer = 0;
  result = "";
  playerScore.textContent = `Player : ${human}`;
  computerScore.textContent = `Computer : ${computer}`;
}

// button event
rock.addEventListener('click', () => playerClick("rock"));
paper.addEventListener('click', () => playerClick("paper"));
scissors.addEventListener('click', () => playerClick("scissors"));
restartButton.addEventListener('click', restartGame);


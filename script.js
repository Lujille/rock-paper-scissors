let human = 0;
let computer = 0;

// funtion to generate a random choices for computer
function computerPlay(){
    const weapon = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * weapon.length);

    return weapon[random];
}

// main logic of the game
function playRound(playerSelection, computerSelection){
    if(playerSelection===computerSelection){
        return `Its tie! ${playerSelection} = ${computerSelection}`;
    }
    else if((playerSelection==="rock" && computerSelection==="scissors")||
            (playerSelection==="paper" && computerSelection==="rock")||
            (playerSelection==="scissors" && computerSelection==="paper")){
                human+=1;
                return `You Win! ${playerSelection} beats ${computerSelection}`;
            }
    else{
        computer+=1;
        return `You Lose! ${playerSelection} can't beat ${computerSelection}`;
    }
}

//function to store the score
function game(){
    let attempt = 5;

    while(attempt > 0){
        const playerSelection = prompt("Input your choices").toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        attempt-=1;
    }

    if(attempt = 1 && human > computer){
        return `You win! score human = ${human} computer = ${computer}`;
    }
    else if(attempt = 1 && human == computer){
        return `It's tie! score human = ${human} computer = ${computer}`;
    }
    else{
        return `You lose! score human = ${human} computer = ${computer}`;
    }
}

console.log(game());
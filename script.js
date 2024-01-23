const array = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return (array[(Math.floor(Math.random() * array.length))]);        
}

let playerScore = 0;
let computerScore = 0;
  
function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        console.log( "You make the same choice. Nobody win the game. Try again !");
        playRound();
    }


   if (computerSelection === "rock" && playerSelection === "scissors") {
        console.log("Rock wins against scissors");
        computerScore +=1
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        console.log("Rock loses to paper");
        computerScore +=1
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        console.log("Paper loses to scissors");
        computerScore +=1
    } 

  
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Rock wins against scissors");
        playerScore +=1
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Rock loses to paper");
        playerScore +=1
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Paper loses to scissors");
        playerScore +=1
    } 


  
    }
       
    const computerSelection = getComputerChoice();

    function game(){
        for (let i = 0; i < 5; i++){
           let playerSelection= " ";
            playerSelection = prompt("rock, paper or scissors ?");
            playRound(playerSelection, computerSelection)
            console.log("Player score is " + playerScore + " and computer score is " + computerScore)    
        }

    }




 
//   console.log(playRound(playerSelection, computerSelection));





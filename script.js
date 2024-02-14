const array = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return (array[(Math.floor(Math.random() * array.length))]);        
}

let playerScore = 0;
let computerScore = 0;
let computerSelection = getComputerChoice();
let roundNumber = 0;




const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const scoreP = document.querySelector('.scoreP');
const bienvenue = document.querySelector('.bienvenue');
const scoreC = document.querySelector('.scoreC');
let message = document.querySelector('.message')

  

setTimeout(function() {
    bienvenue.style.display = "none";
}, 5000); 

function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        message.textContent=( "You make the same choice. Nobody win the game. Try again !");
        scoreP.textContent = ('Player score : ' + playerScore);
        scoreC.textContent=('Computer score : ' + computerScore) ;
    }

   if (computerSelection === "rock" && playerSelection === "scissors") {
        message.textContent=("Computer win ! Rock beats scissors");
        computerScore +=1
        roundNumber +=1;
        scoreP.textContent = ('Player score : ' + playerScore);
        scoreC.textContent=('Computer score : ' + computerScore)

 

    } else if (computerSelection === "paper" && playerSelection === "rock") {
        message.textContent=("Computer win ! Paper beats Rock");
        computerScore +=1
        roundNumber +=1;
        scoreP.textContent = ('Player score : ' + playerScore);
        scoreC.textContent=('Computer score : ' + computerScore)




    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        message.textContent=("Computer win ! Scissors beats paper");
        computerScore +=1;
        roundNumber +=1;
        scoreP.textContent = ('Player score : ' + playerScore);
        scoreC.textContent=('Computer score : ' + computerScore);

    } 

  
    if (playerSelection === "rock" && computerSelection === "scissors") {
        message.textContent=("You win ! Rock beats scissors");
        playerScore +=1;
        roundNumber +=1;
        scoreP.textContent = ('Player score : ' + playerScore);
        scoreC.textContent=('Computer score : ' + computerScore);




    } else if (playerSelection === "paper" && computerSelection === "rock") {
        message.textContent=("You win ! Paper beats Rock");
        playerScore +=1
        roundNumber +=1;
        scoreP.textContent = ('Player score : ' + playerScore);
        scoreC.textContent=('Computer score : ' + computerScore);

 


    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        message.textContent=("You win ! scissors beats paper");
        playerScore +=1 
        roundNumber +=1;
        scoreP.textContent = ('Player score : ' + playerScore);
        scoreC.textContent=('Computer score : ' + computerScore);


    } 
     
    if (roundNumber === 5 ) {
        alert("Game end ! Player score is " + playerScore + " and computer score is " + computerScore)
        computerScore = 0;
        playerScore = 0;
        
    } 


    }
     
   
    rock.addEventListener("click", function() {
        playRound("rock", getComputerChoice())


    })
    paper.addEventListener("click", function() {
        playRound("paper", getComputerChoice())


    })
    scissors.addEventListener("click", function() {
        playRound("scissors", getComputerChoice())

    })


   





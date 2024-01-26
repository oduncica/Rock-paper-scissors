const array = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return (array[(Math.floor(Math.random() * array.length))]);        
}

let playerScore = 0;
let computerScore = 0;
let computerSelection = getComputerChoice()

let roundNumber = 0;


const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const scoreP = document.querySelector('.scoreP')
const scoreC = document.querySelector('.scoreC')


  
function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        console.log( "You make the same choice. Nobody win the game. Try again !");
        scoreP.textContent = ('Player score : ' + playerScore);
        scoreC.textContent=('Computer score : ' + computerScore)
        // playRound();
    }

   if (computerSelection === "rock" && playerSelection === "scissors") {
        console.log("You win ! Rock beats scissors");
        computerScore +=1
        scoreP.textContent = ('Player score : ' + playerScore);
        scoreC.textContent=('Computer score : ' + computerScore)
 

    } else if (computerSelection === "paper" && playerSelection === "rock") {
        console.log("You win ! Paper beats Rock");
        computerScore +=1
        scoreP.textContent = ('Player score : ' + playerScore);
        scoreC.textContent=('Computer score : ' + computerScore)



    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        console.log("You win ! Scissors beats paper");
        computerScore +=1;
        scoreP.textContent = ('Player score : ' + playerScore);
        scoreC.textContent=('Computer score : ' + computerScore)



    } 

  
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Rock wins against scissors");
        playerScore +=1;
        scoreP.textContent = ('Player score : ' + playerScore);
        scoreC.textContent=('Computer score : ' + computerScore)



    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Rock loses to paper");
        playerScore +=1
        scoreP.textContent = ('Player score : ' + playerScore);
        scoreC.textContent=('Computer score : ' + computerScore)
 


    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Paper loses to scissors");
        playerScore +=1
        scoreP.textContent = ('Player score : ' + playerScore);
        scoreC.textContent=('Computer score : ' + computerScore)

    } 
     
    if (playerScore === 5 ||  computerScore === 5 ) {
        alert("Game end ! Player score is " + playerScore + " and computer score is " + computerScore)
        
    } 


    }
     
   


    // function game(){
    //     for (let i = 0; i < 5; i++){
    //         playRound(playerSelection, computerSelection)
    //         console.log("Player score is " + playerScore + " and computer score is " + computerScore)    
    //     }
    // }

    rock.addEventListener("click", function() {
        playRound("rock", getComputerChoice())


    })
    paper.addEventListener("click", function() {
        playRound("paper", getComputerChoice())


    })
    scissors.addEventListener("click", function() {
        playRound("scissors", getComputerChoice())

    })


   
//   console.log(playRound(playerSelection, computerSelection));





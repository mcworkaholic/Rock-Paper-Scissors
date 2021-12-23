
let cChoice; 

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min ;
}

function getComputerChoice() {
    if (getRandomInt(1,3) == 1) {
        cChoice = "rock";
    }
    else if (getRandomInt(1,3) == 2) {
        cChoice = "paper";
    }
    else {
        cChoice = "scissors";
    }
    return cChoice;
    }


function findWinner() {
    let uChoice;
    uChoice = window.prompt("Quick! What is your weapon of choice?");
    console.log("The computer chose" + " " + getComputerChoice() + "."); 
    if ((uChoice.toLowerCase()) == cChoice) {
        setTimeout(() => {console.log("This round ends in a draw."); }, 1);
        }
    else if (uChoice.toLowerCase() == "rock" && cChoice == "paper") {
        setTimeout(() => {console.log("Computer wins."); }, 1);
       }
    else if (uChoice.toLowerCase() == "rock" && cChoice == "scissors") {
        setTimeout(() => {console.log("You win."); }, 1);
    
        }
    else if (uChoice.toLowerCase() == "paper" && cChoice == "rock") {
    
        setTimeout(() => {console.log("You win."); }, 1);
        }
    else if (uChoice.toLowerCase() == "paper" && cChoice == "scissors") {
        
        setTimeout(() => {console.log("Computer wins."); }, 1);
         
        }
    else if (uChoice.toLowerCase() == "scissors" && cChoice == "rock") {
        setTimeout(() => {console.log("Computer wins."); }, 1);
         }
    else if (uChoice.toLowerCase() == "scissors" && cChoice == "paper") {
        setTimeout(() => {console.log("You win."); }, 1);
        } 
}

function playRound() {
setTimeout(() => {console.log("Let's play rock, paper, scissors."); }, 500);
setTimeout(() => {console.log("Rock!"); }, 2000);
setTimeout(() => {console.log("Paper!"); }, 3000);
setTimeout(() => {console.log("Scissors!"); }, 4000);
setTimeout(() => {findWinner(); }, 5000);
}


    playRound();
    setTimeout(() => {playRound(); }, 10000); 
    setTimeout(() => {playRound(); }, 20000);
    setTimeout(() => {playRound(); }, 30000);
    setTimeout(() => {playRound(); }, 40000);


















var rock = document.getElementById("rock").addEventListener("click", playGame);
var paper = document.getElementById("paper").addEventListener("click", playGame);
var scissors = document.getElementById("scissors").addEventListener("click", playGame);

var youHaveChosen;
var computerHasChosen;

var yourChoice = document.getElementById("yourChoice");
var computerChoice = document.getElementById("computerChoice");
var outcome = document.getElementById("outcome");

var yourScore = document.getElementById("yourScore");
var computerScore = document.getElementById("computerScore");

function playGame() {
    youHaveChosen = this.innerText;
    computerGamble();
    compareChoices();
}

function computerGamble() {
    var choice = Math.floor(Math.random() * 3) + 1;
    if (choice <= 1) {
        computerHasChosen = "Rock";
    } else if (choice > 1 && choice <= 2) {
        computerHasChosen = "Paper";
    } else {
        computerHasChosen = "Scissors";
    }
}

function compareChoices() {
    yourChoice.innerHTML = youHaveChosen;
    computerChoice.innerHTML = computerHasChosen;
    
    if (youHaveChosen == computerHasChosen) {
        outcome.innerHTML = "No Winner, you both chose " + youHaveChosen;
        document.getElementById("outcome").style.color = "#06C4F7";
    } else if (youHaveChosen == "Rock" && computerHasChosen == "Paper") {
        outcome.innerHTML = "Computer wins: " + computerHasChosen + " beats " + youHaveChosen;
        document.getElementById("outcome").style.color = "#C7C6C1";
        computerScore.innerHTML = parseInt(computerScore.innerHTML)+1; 
    } else if (youHaveChosen == "Rock" && computerHasChosen == "Scissors") {
         outcome.innerHTML =  "You Win: " + youHaveChosen + " beats " + computerHasChosen;
         document.getElementById("outcome").style.color = "#FBD202";
         yourScore.innerHTML = parseInt(yourScore.innerHTML)+1; 
    } else if (youHaveChosen == "Paper" && computerHasChosen == "Rock") {
        outcome.innerHTML =  "You Win: " + youHaveChosen + " beats " + computerHasChosen;
        document.getElementById("outcome").style.color = "#FBD202";
        yourScore.innerHTML = parseInt(yourScore.innerHTML)+1; 
    } else if (youHaveChosen == "Paper" && computerHasChosen == "Scissors") {
        outcome.innerHTML = "Computer wins: " + computerHasChosen + " beats " + youHaveChosen;
        document.getElementById("outcome").style.color = "#C7C6C1";
        computerScore.innerHTML = parseInt(computerScore.innerHTML)+1;
    } else if (youHaveChosen == "Scissors" && computerHasChosen == "Rock") {
        outcome.innerHTML = "Computer wins: " + computerHasChosen + " beats " + youHaveChosen;
        document.getElementById("outcome").style.color = "#C7C6C1";
        computerScore.innerHTML = parseInt(computerScore.innerHTML)+1;
    } else if (youHaveChosen == "Scissors" && computerHasChosen == "Paper") {
         outcome.innerHTML =  "You Win: " + youHaveChosen + " beats " + computerHasChosen;
         document.getElementById("outcome").style.color = "#FBD202";
         yourScore.innerHTML = parseInt(yourScore.innerHTML)+1; 
    }
}

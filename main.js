const options = [0, 1, 2];
let playerscore = 0;
let computerscore = 0;

function computerPlay(){
    let choice = Math.floor(Math.random() * options.length); 
    return options[choice];
}

function playRound(clicked_id){
    let playerChoice = clicked_id;
    let computerChoice = computerPlay();

     //Display Player Side
     if (playerChoice == "rock"){
        playerChoice = 0;
        document.getElementById("playerchoice").src = "rock.png";
    }
    else if (playerChoice == "paper"){
        playerChoice = 1;
        document.getElementById("playerchoice").src = "paper.png";
    }
    else if (playerChoice == "scissors"){
        playerChoice = 2;
        document.getElementById("playerchoice").src = "scissors.png";
    }
    
    //Display Computer Side
    if (computerChoice == 0){
        document.getElementById("computerchoice").src = "rock.png";
    }
    else if (computerChoice == 1){
        document.getElementById("computerchoice").src = "paper.png";
    }
    else if (computerChoice == 2){
        document.getElementById("computerchoice").src = "scissors.png";
    }
    
    let winner = calcWinner(playerChoice, computerChoice);
    document.getElementById("rules").innerHTML = "Best of 5";
    
    //Updates Score
    if (winner == 0){
        computerscore++;
        document.getElementById("computerscore").innerHTML = "Computer: " + computerscore;
    }
    else if (winner == 1){
        document.getElementById("rules").innerHTML = "Round Tie!!!";
    }
    else if (winner == 2){
        playerscore++;
        document.getElementById("playerscore").innerHTML = "Player: " + playerscore;
    }

    checkWinner(playerscore, computerscore);
}

/**
 * Using modular arithmetic to calculate winner. Greater by 1 
 * @param {*} playerChoice 
 * @param {*} compouterChoice 
 * @returns 0 if computer wins, 1 if tie, 2 if player one wins
 */
function calcWinner(playerChoice, computerChoice){
    let mod = (playerChoice+1) % 3;
    if (mod == computerChoice){
        return 0;
    }
    else if (playerChoice == computerChoice){
        return 1;
    }
    else{
        return 2;
    }
}

function checkWinner(playerScore, computerScore){
    if (computerScore == 3){
        alert("Computer wins! Press F5 to play again!")
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    }
    if (playerScore == 3){
        alert("Player wins! Press F5 to play again!")
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    }
    
}

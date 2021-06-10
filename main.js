const options = [0, 1, 2]

function computerPlay(){
    let choice = Math.floor(Math.random() * options.length); 
    return options[choice];
}

function playRound(clicked_id){
    let playerChoice = clicked_id;
    let computerChoice = computerPlay();

    if (playerChoice == "rock"){
        playerChoice = 0;
    }
    else if (playerChoice == "paper"){
        playerChoice = 1;
    }
    else if (playerChoice == "scissors"){
        playerChoice = 2;
    }
    let winner = calcWinner(playerChoice, computerChoice);
    console.log(computerChoice);
    console.log(winner);

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
        return "computer";
    }
    else if (playerChoice == computerChoice){
        return "tie";
    }
    else{
        return "player";
    }
}

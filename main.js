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
        document.getElementById("playerchoice").src = "https://lh3.googleusercontent.com/proxy/BQ8riHH5dQTwXK_dv5sk5rG-6TSmDTRTX9mmNRIG83mhZCH_YBBY_F4G403HZ7e6RCrLIFVlwnW6NfUesinK2DGDCOrrktU";
    }
    else if (playerChoice == "paper"){
        playerChoice = 1;
        document.getElementById("playerchoice").src = "https://lh3.googleusercontent.com/proxy/yEzI3qFgTuwUNPmH8p66NCPgd1Wb5PHd9ZKypFiiaGpG5EwmTeGM2cA3YSm3wvJfR96Wwuv09ZIvKnIfGKyRT7yotzXP1kA";
    }
    else if (playerChoice == "scissors"){
        playerChoice = 2;
        document.getElementById("playerchoice").src = "http://www.clker.com/cliparts/7/d/N/6/X/o/scissor-hand.svg";
    }
    
    if (computerChoice == 0){
        document.getElementById("computerchoice").src = "https://lh3.googleusercontent.com/proxy/BQ8riHH5dQTwXK_dv5sk5rG-6TSmDTRTX9mmNRIG83mhZCH_YBBY_F4G403HZ7e6RCrLIFVlwnW6NfUesinK2DGDCOrrktU";
    }
    else if (computerChoice == 1){
        document.getElementById("computerchoice").src = "https://lh3.googleusercontent.com/proxy/yEzI3qFgTuwUNPmH8p66NCPgd1Wb5PHd9ZKypFiiaGpG5EwmTeGM2cA3YSm3wvJfR96Wwuv09ZIvKnIfGKyRT7yotzXP1kA";
    }
    else if (computerChoice == 2){
        document.getElementById("computerchoice").src = "http://www.clker.com/cliparts/7/d/N/6/X/o/scissor-hand.svg";
    }
    let winner = calcWinner(playerChoice, computerChoice);
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
        return 0;
    }
    else if (playerChoice == computerChoice){
        return 1;
    }
    else{
        return 2;
    }
}

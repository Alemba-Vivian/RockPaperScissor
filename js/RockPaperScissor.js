function getComputerChoice(){
    const computerChoice =['rock','paper','scissors']
    const randomIndexValue =Math.floor(Math.random() *computerChoice.length)
    const randomComputerChoice =computerChoice[randomIndexValue]
    // console.log(randomComputerChoice)
    return randomComputerChoice;
}


function playRound(playerSelection, computerSelection){
   if(playerSelection.toLowerCase() === 'paper' && computerSelection==='rock' 
    || playerSelection.toLowerCase() === 'rock' && computerSelection==='scissors'
    || playerSelection.toLowerCase() === 'scissors' && computerSelection==='paper')
    {
        playerScore++
        return `PlayerSelection wins and has ${playerScore} points`
    }else if(playerSelection.toLowerCase() ==='rock' && computerSelection==='paper'
    || playerSelection.toLowerCase() === 'scissors'&& computerSelection==='rock'
    || playerSelection.toLowerCase() === 'paper' && computerSelection==='scissors')
    {
        computerScore++
        return `ComputerSelection wins and has ${computerScore} points` 
    }else if(playerSelection.toLowerCase() ===computerSelection)
    {
        tieScore
        return `Draw, Try Again, ${tieScore} points` 
    }
    else{
        return 'You must enter rock, paper or scissors'
    }

}
let playerSelection =prompt("Let's play RockPaperScissor game, Enter Rock, Paper or Scissors", "")
console.log(`PlayerSelection is ${playerSelection}`)
let computerSelection = getComputerChoice()
console.log(`ComputerSelection is ${computerSelection}`)
let playerScore = 0
let computerScore= 0
let tieScore = 0


function game(){
    console.log( playRound(playerSelection, computerSelection))
    console.log( playRound(playerSelection, computerSelection))
    console.log( playRound(playerSelection, computerSelection))
    console.log( playRound(playerSelection, computerSelection))
    console.log( playRound(playerSelection, computerSelection))
    console.log(scores())
}
game()

function scores(){
if(playerScore === computerScore)
{
    console.log(`The game is draw`)
    return tieScore
    
}else if(playerScore > computerScore)
{
    console.log(`player wins the game`)
    return playerScore
  
}else{
    console.log(`computer wins the game`)
    return computerScore
}

}


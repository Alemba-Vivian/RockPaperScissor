//randomly get the computer input
function getComputerChoice(){
    const computerChoice =['rock','paper','scissors']
    const randomIndexValue =Math.floor(Math.random() *computerChoice.length)
    const randomComputerChoice =computerChoice[randomIndexValue]
    // console.log(randomComputerChoice)
    return randomComputerChoice;
}

//ask the user to put either rock, paper or scissors
function getPlayerSelection(){
    let playerSelection =prompt("Let's play RockPaperScissor game, Enter Rock, Paper or Scissors", "")
    return playerSelection.toLowerCase()

}


function playRound(){
    let playerSelection=getPlayerSelection()
    console.log(`PlayerSelection is ${playerSelection}`)
    let computerSelection = getComputerChoice()
    console.log(`ComputerSelection is ${computerSelection}`)
  
   if(playerSelection=== 'paper' && computerSelection==='rock' 
    || playerSelection=== 'rock' && computerSelection==='scissors'
    || playerSelection=== 'scissors' && computerSelection==='paper')
    {
        playerScore++
        return `PlayerSelection wins and has ${playerScore} points`

    }else if(playerSelection==='rock' && computerSelection==='paper'
    || playerSelection=== 'scissors'&& computerSelection==='rock'
    || playerSelection=== 'paper' && computerSelection==='scissors')
    {
        computerScore++
        return `ComputerSelection wins and has ${computerScore} points` 
        
    }else if(playerSelection===computerSelection)
    {
        tieScore
        return `Draw, Try Again, ${tieScore} points` 
    }
    else{
        return 'You must enter rock, paper or scissors'
    }

}


let playerScore = 0
let computerScore= 0
let tieScore = 0


function game(playerSelection,computerSelection){
     console.log(playRound(playerSelection, computerSelection))
     console.log(playRound(playerSelection, computerSelection))
     console.log(playRound(playerSelection, computerSelection))
     console.log(playRound(playerSelection, computerSelection))
     console.log(playRound(playerSelection, computerSelection))
}
game()
     let playerSelection =getPlayerSelection()
     let computerSelection =getComputerChoice()

function scores(){
if(playerScore === computerScore)
{
    console.log(`THE GAME IS DRAW WITH EACH ${tieScore} POINTS!!!!!!`)
    return tieScore
    
}else if(playerScore > computerScore)
{
    console.log(`PLAYER WINS WITH THE GAME WITH ${playerScore} POINTS!!!!!`)
    return playerScore
  
}else{
    console.log(`COMPUTER WINS THE GAME WITH ${computerScore} POINTS!!!!!`)
    return computerScore
}

}
scores()


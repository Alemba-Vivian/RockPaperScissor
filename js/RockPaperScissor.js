// Your game is going to play against the computer, 
// so begin with a function called getComputerChoice 
// that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
//  We’ll use this function in the game to make the computer’s play.
//  Tip: use the console to make sure this is returning the expected output before moving to the next step!



//creating a variable that will store our known strings
const storeStrings = ['Rock', 'Paper', 'Scissors']

 function getComputerChoice(){
    
    // creating a variable that store the string value index
    let randomStoreStringValue = Math.floor(Math.random() * storeStrings.length)
    
    //creating a variable that store randomItem selected by the computer
    let randomStoreStrings = storeStrings[randomStoreStringValue]
    //returning either rock,paper or scissors
    // console.log(randomStoreStrings)
    return randomStoreStrings
   }
   

function playRound(playerSelection,computerSelection){
let rock ='Rock'
let scissors = 'Scissors'
let paper ='Paper'
let scores = 0
       
 if(playerSelection===rock && computerSelection===scissors 
     || playerSelection===scissors && computerSelection===rock)
    {
        if(playerSelection===rock){
            scores =scores+1
            console.log(`PlayerSelection has ${scores} points`)
            return "PlayerSelection is the winner, Rocks beat Scissors"
            
        }else
        {
            scores=scores +1
            console.log(`ComputerSelection has ${scores} points`)
        return "ComputerSelection is the winner, Rocks beat Scissors"
        }
      
    }else if(playerSelection===scissors && computerSelection===paper
    || playerSelection===paper && computerSelection===scissors)
    {
        if(playerSelection===scissors){
            scores =scores +1
            console.log(`PlayerSelection has ${scores} points`)
            return "PlayerSelection is the winner, Scissors beat Paper"

        }else
        {
            scores=scores +1
            console.log(`ComputerSelection has ${scores} points`)
            return "ComputerSelection is the winner, Scissors beat Paper"

        }

    }else if(playerSelection===paper && computerSelection===rock
    || playerSelection===rock && computerSelection===paper)
    {
        if(playerSelection===paper){
            scores=scores+1
            console.log(`PlayerSelection has ${scores} points`)
            return "PlayerSelection is the winner, Paper beats Rock"

        }else
        {
            scores=scores +1
            console.log(`ComputerSelection has ${scores} points`)
            return "ComputerSelection is the winner, Paper beats Rock"

        }
    }else if(playerSelection===computerSelection)
    {
        console.log(`Both PlayerSelection and ComputerSelection has ${scores} points`)
        return "Draw, Try Again!!!"
    }
}
 const playerSelection =prompt("Lets Play RockPaperScissor, Choose Either Rock,Paper or Scissors")
 console.log(`playerSelection is ${playerSelection}`)
 const computerSelection =getComputerChoice()
 console.log(`computerSelection is ${computerSelection}`)


//  Write a NEW function called game()
function game(){
    // if(playerSelection==='Rock')
    console.log(playRound(playerSelection,computerSelection))
    console.log(playRound(playerSelection,computerSelection))
    console.log(playRound(playerSelection,computerSelection))
    console.log(playRound(playerSelection,computerSelection))
    console.log(playRound(playerSelection,computerSelection))

}
game()
 


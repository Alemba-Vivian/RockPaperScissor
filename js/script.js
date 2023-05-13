const choices = document.querySelector('.choices');
const buttons = document.querySelectorAll('button');
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const scores = document.getElementById('scores');
const results = document.getElementById('results');
const winner = document.getElementById('winner');
const arrays =['rock', 'paper', 'scissors'];
let userChoice;
let computerChoice;

let playerScores=0;
let computerScores=0;
let tieScores=0;


//getUserChoice
buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        choices.style.backgroundColor='grey';
        // choices.style.backgroundColor='rgba(0, 0, 0, .75';
        userChoice = button.id;
        userChoiceDisplay.textContent = `YOU:  ${userChoice}`;
        getComputerChoice();
        getScores();
        getWinner();
        

    })
})

//getComputerChoice
function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * arrays.length);
    const randomChoice = arrays[randomIndex];
    computerChoice = randomChoice;
    computerChoiceDisplay.textContent = `COMPUTER:  ${computerChoice}`;
}
//getScores
function getScores(){
    if(userChoice==='rock' && computerChoice==='scissors'
    || userChoice==='paper'&& computerChoice==='rock'
    || userChoice==='scissors'&& computerChoice==='paper'){
        playerScores++;
        scores.textContent = `SCORES: YOU chose ${userChoice} and Computer chose ${computerChoice}, You won!!!!`;
        results.textContent =`POINTS: YOU ${playerScores} points`;
    }else if(userChoice==='scissors'&& computerChoice==='rock'
    || userChoice==='rock'&& computerChoice==='paper'
    ||userChoice==='paper'&& computerChoice==='scissors'){
        computerScores++;
        scores.textContent =`SCORES: YOU chose ${userChoice} and Computer chose ${computerChoice}, You lose!!!!`;
        results.textContent=`POINTS: Computer ${computerScores} points`;
    }else if(userChoice===computerChoice){
        tieScores;
        scores.textContent =`SCORES: YOU chose ${userChoice} and Computer chose ${computerChoice}, Game Draw!!!`;
        results.textContent =`POINTS: Draw, ${tieScores} points`;
    }
}

//getWinner()
function getWinner(){
    if(playerScores===5 && computerScores===5){
       winner.textContent =` GAME IS DRAW, BOTH HAVE 5 POINTS!!`;
       winner.style.color ='yellow';
       restartGame()
    }else if(computerScores===5){
       winner.textContent = `YOU LOOSE THE GAME, COMPUTER TAKE THE LEADS`;
       winner.style.color ='#FD2D00';
       restartGame()
    }else if(playerScores ===5){
       winner.textContent =`YOU WIN THE GAME, COMPUTER LOOSES!!`;
       winner.style.color ='green';
       restartGame()
    }
   }

   
//restart the game once the winner is identified
function restartGame(){
    buttons.forEach(button =>{
        button.addEventListener('click', ()=>{
            window.location.reload();
        })
    })

}

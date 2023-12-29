//HTML Variables
const tiles = document.querySelectorAll(".tile"); //accesses all tiles//
const keys = document.querySelectorAll(".key"); //accesses all keys//
const playButton = document.getElementById("play");
const welcomeModal = document.getElementById("welcome-modal");
const winModal = document.getElementById('winner-restart');
const loseModal = document.getElementById('loser-restart')

//Game Logic Variables
const wordSize = 5; //set standard length for words//
let currentRound = 1; //round user is currently on//
let wins = 0;
let losses= 0;

import { words } from "./words.js"; //word bank of winning words, importing from additional js file//
let winningWord = words[Math.floor(Math.random() * words.length)].split("");
console.log(winningWord); // randomly pulls a word, thenadds to a array returning single letter strings...example ['b','e','r','r','y']
let playerGuess = []; //puts player's guess into Array
const currentRow = document.querySelector(`.row-${currentRound}`);

//Functions and event listeners
//Open winner modal
function openWinModal(){
    const winModal = document.getElementById('winner-restart');
    winModal.style.display ='block';
}
//Open loser Modal
function openLoseModal(){
    const loseModal = document.getElementById('loser-restart');
    loseModal.style.display ='block';
}

//close winner modal
function closeWinModal(){
    const winModal = document.getElementById('winner-restart');
    winModal.style.display ='none';
}
//close loser Modal
function closeLoseModal(){
    const loseModal = document.getElementById('loser-restart');
    loseModal.style.display ='none';
}
const resetGame = () => {
  currentRound = 1;
  playerGuess = [];
  winningWord = words[Math.floor(Math.random() * words.length)].split("");
  console.log(winningWord);
  const currentRow = document.querySelector(`.row-${currentRound}`);
  currentRow.querySelectorAll('.tile').forEach(tile =>{
    tile.innerText = '';
    tile.style.backgroundColor = '';
  })
};

//This creates functionality for keys, and comparing guesses
for (let key of keys) {
  key.addEventListener("click", () => {
    //adds same event listener to all the keys
    if (key.id === "enter") {
      compareLetters(); //calls compare letters function
      //If enter key is pushed, player is ready to submit their word
      if (playerGuess.join("") === winningWord.join("")) {
       openWinModal(); //player wins game word and winning word are the same
      } else if (currentRound < 6) {
        //player word =/= winningWord, player moves to next round out of 6.
        currentRound++; //move to next round
        playerGuess = []; //resets array for new player guess
      } else {
        openLoseModal(); //player word =/= winningWord and 0 rounds remain; player loses
      }
    } else if (key.id === "delete") {
      //removes last entry//
      const currentRow = document.querySelector(`.row-${currentRound}`);
      playerGuess.pop();
      currentRow.children[playerGuess.length].innerText = "";
    } else {
      if (playerGuess.length === 5) {
        alert("Do you want to submit? Press Enter"); //prompt method do you want to submit/or a modal where if they say okay, submit, then the enterkey will be clicked automatically for them. delay afte 10 seconds no manual enter
      } else {
        const currentRow = document.querySelector(`.row-${currentRound}`);
        playerGuess.push(key.id);
        currentRow.children[playerGuess.length - 1].innerText = key.innerText;
      }
    }
  });
}


//compare tiles function

let compareLetters = () => {
  const currentRow = document.querySelector(`.row-${currentRound}`);

  for (let i = 0; i < playerGuess.length; i++) {
    //loop through array
    if (
      winningWord[i] !== playerGuess[i] && //in word but wrong spot
      winningWord.includes(playerGuess[i])
    ) {
      const tile = currentRow.children[i];
      tile.style.backgroundColor = "orange";
    } else {
      if (winningWord[i] === playerGuess[i]) {
        //letter is in same spot
        const tile = currentRow.children[i];
        tile.style.backgroundColor = "green"; //exact placement
      } else {
        const tile = currentRow.children[i];
        tile.style.backgroundColor = "gray"; //not in word
      }
    }
  }
};

//modal that says you win the winning word was xyx play again button
let winnerModal = document.createElement("p");
let winnerModalText = document.createTextNode(
  `You Won! The Winning Word was ${winningWord.join("")}`
);
winnerModal.appendChild(winnerModalText);

let restartButton = document.createElement("button");
let restartButtonText = document.createTextNode(`Play Again`);
restartButton.appendChild(restartButtonText);

const winnerDiv = document.getElementById("winner-restart");
winnerDiv.appendChild(winnerModal);
winnerDiv.appendChild(restartButton);

console.dir(winnerModalText);
//modal that says you lose, the winning word was xyz play again button

let loserModal = document.createElement("p");
let loserModalText = document.createTextNode(
  `You Lost! The Winning Word was ${winningWord.join("")}`
);
loserModal.appendChild(loserModalText);

let tryAgainButton = document.createElement("button");
let tryAgainButtonText = document.createTextNode(`Try Again`);
tryAgainButton.appendChild(tryAgainButtonText);

const loserDiv = document.getElementById("loser-restart");
loserDiv.appendChild(loserModal);
loserDiv.appendChild(tryAgainButton);

console.dir(loserModalText);

restartButton.addEventListener('click', ()=>{
    resetGame();
    closeWinModal();
});

tryAgainButton.addEventListener('click', ()=>{
    resetGame();
    closeLoseModal();
});


//update scoreboard
//HTML Variables
const tiles = document.querySelectorAll(".tile"); //accesses all tiles//
const keys = document.querySelectorAll(".key"); //accesses all keys//
const playButton = document.querySelector(".play");
const welcomeModal = document.getElementById("welcome-modal");
const winModal = document.getElementById("winner-restart");
const loseModal = document.getElementById("loser-restart");
const rows = document.querySelectorAll(`.row`);
const wins = document.getElementById(`wins`);
const losses = document.getElementById(`losses`);
const howToPlay = document.querySelector(".help");
const winModalBtn = document.getElementById ('win-button');
const loseModalBtn= document.getElementById ('lose-button');

//Game Logic Variables
const wordSize = 5; //set standard length for words//
let currentRound = 1; //round user is currently on//
const stats = {
  wins: 0,
  losses: 0,
};

import { words } from "./words.js"; //word bank of winning words, importing from additional js file//
let winningWord = words[Math.floor(Math.random() * words.length)].split("");
console.log(winningWord); // randomly pulls a word, thenadds to a array returning single letter strings...example ['b','e','r','r','y']
let playerGuess = []; //puts player's guess into Array
const currentRow = document.querySelector(`.row-${currentRound}`);

//Functions and event listeners

//Welcome Screen close
playButton.addEventListener("click", () => {
  welcomeModal.style.display = "none";
});

howToPlay.addEventListener("click", () => {
  welcomeModal.style.display = "block";
});

//Open winner modal and add a win
function openWinModal() {
  const winModal = document.getElementById("winner-restart");
  winModal.style.display = "block";
 winModal.children[0].innerText = `You Won! The Winning Word was ${winningWord.join("")}`
 wins.children[1].innerText = stats.wins;
}
//Open loser Modal and a loss
function openLoseModal() {
  const loseModal = document.getElementById("loser-restart");
  loseModal.style.display = "block";
  loseModal.children[0].innerText = `You Lose! The Winning Word was ${winningWord.join("")}`
  losses.children[1].innerText = stats.losses;

}
winModalBtn.addEventListener("click", () => {
    resetGame();
    closeWinModal();
  });
  
  loseModalBtn.addEventListener("click", () => {
    resetGame();
    closeLoseModal();
  });
  

//close winner modal
function closeWinModal() {
  const winModal = document.getElementById("winner-restart");
  winModal.style.display = "none";
}
//close loser Modal
function closeLoseModal() {
  const loseModal = document.getElementById("loser-restart");
  loseModal.style.display = "none";
}
const resetGame = () => {
  currentRound = 1;
  playerGuess = [];
  winningWord = words[Math.floor(Math.random() * words.length)].split("");
  console.log(winningWord);
  const allRows = document.querySelectorAll(`.row`);
  allRows.forEach((row) => {
    row.querySelectorAll(".tile").forEach((tile) => {
      tile.innerText = "";
      tile.style.backgroundColor = "";
    });
  });
};

//This creates functionality for keys, and comparing guesses
for (let key of keys) {
  key.addEventListener("click", () => {
    //adds same event listener to all the keys
    if (key.id === "enter") {
      compareLetters(); //calls compare letters function
      //If enter key is pushed, player is ready to submit their word
      if (playerGuess.join("") === winningWord.join("")) {
        stats.wins++;
        openWinModal(); //player wins game word and winning word are the same
      } else if (currentRound < 6) {
        //player word =/= winningWord, player moves to next round out of 6.
        currentRound++; //move to next round
        playerGuess = []; //resets array for new player guess
      } else {
        stats.losses++;
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



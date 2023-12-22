//HTML Variables
const tiles = document.querySelectorAll(".tile"); //accesses all tiles//
const keys = document.querySelectorAll(".key"); //accesses all keys//
const playButton = document.getElementById("play");
const modal = document.getElementById("welcome-modal");

//Game Logic Variables
const wordSize = 5; //set standard length for words//
let currentRound = 1; //round user is currently on//

import { words } from "./words.js"; //word bank of winning words, importing from additional js file//
const winningWord = words[Math.floor(Math.random() * words.length)].split("");
console.log(winningWord); // randomly pulls a word, thenadds to a array returning single letter strings...example ['b','e','r','r','y']
let playerGuess = []; //puts player's guess into Array
const currentRow = document.querySelector(`.row-${currentRound}`);

//Functions and event listeners

//This creates functionality for keys, and comparing guesses
for (let key of keys) {
  key.addEventListener("click", () => {
    //adds same event listener to all the keys
    if (key.id === "enter") {
      //If enter key is pushed, player is ready to submit their word
      if (playerGuess.join("") === winningWord.join("")) {
        alert("You Won!"); //player wins game word and winning word are the same
      } else if (currentRound < 6) {
        //player word =/= winningWord, player moves to next round out of 6.
        currentRound++; //move to next round
        playerGuess = []; //resets array for new player guess
      } else {
        alert(`You Lose the word was ${winningWord.join("")}`); //player word =/= winningWord and 0 rounds remain; player loses
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

//Play again function//

//hide modal and start game
// playButton.addEventListener('click',

//

//compare tiles function

let compareLetters = () => {
  const currentRow = document.querySelector(`.row-${currentRound}`);

  for (let i = 0; i < playerGuess.length; i++) { //loop through array
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
  document.getElementById("testButton").addEventListener("click", () => {
    // Manually call compareLetters for testing
    compareLetters();
  });
};
compareLetters();

//if

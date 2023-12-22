//HTML Variables
const tiles = document.querySelectorAll(".tile"); //accesses all tiles//
const keys = document.querySelectorAll(".key"); //accesses all keys//

//Game Logic Variables
const wordSize = 5; //set standard length for words//
let currentRound = 1; //round user is currently on//
import { words } from "./words.js"; //word bank of winning words, importing from additional js file//
const winningWord = words[Math.floor(Math.random() * words.length)].split("");
console.log(winningWord); // randomly pulls a word, thenadds to a array returning single letter strings...example ['b','e','r','r','y']
let playerGuess = []; //puts player's guess into Array

//Functions and event listeners

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
      playerGuess.pop();
      let currentTile = 
      //remove the last letter entry
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

//1st isolate the word from the array (winning word) then split its letters into an array //berry could be an array let berry =["b","e"...]

//2nd determine if user guess has same letters in winning word
//something like: let usersGuess = [''] (accept letters as items in array...thus giving it a position)
//compare userguess item position to winningWord
//Keyboard that will allow you to place letters into boxes, delete, press enter//

// for (let key of keys) {
//   key.addEventListener("click", () => {
//     //find the next empty tile
//     //when to move on to next row (listen for enter the if userWord=winningWord...move to new row)
//     if (key.id === "enter") {
//       if (playerGuess.join("") === winningWord.join("")) {
//         alert("You Won!");
//       } else if (currentRound < 6) {
//         currentRound++;
//         playerGuess = [];
//       } else {
//         alert(`You Lose the word was ${winningWord.join("")}`);
//       }
//     } else if (key.id === "delete") {
//       //remove the last letter entry
//     } else {
//       if (playerGuess.length === 5) {
//         alert("Do you want to submit? Press Enter"); //prompt method do you want to submit/or a modal where if they say okay, submit, then the enterkey will be clicked automatically for them. delay afte 10 seconds no manual enter
//       } else {
//         const currentRow = document.querySelector(`.row-${currentRound}`);
//         playerGuess.push(key.id);
//         currentRow.children[playerGuess.length - 1].innerText = key.innerText;
//       }
//     }
//   });
// }

//make play button
//change tile color
//make delete key
//play again
//rules module lol

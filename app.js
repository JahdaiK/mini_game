/* Wordle functionalities:
1. Store words: 
    2 groups: Solutions (game winning words) and Bank(a bank of 5 letter words)
2. Identify letters that are in the winning words:
    -gray if not in word, -yellow if in word but wrong spot, -green if in word and right spot
3. Keyboard that will allow you to place letters into boxes, delete, press enter
4. keyboard must also reflect the colors of tiles (gray, green, yellow)
*/

//1. game logic part 1: 5 letter word
const wordSize = 5;
//2. game logic: 6 tries
let currentRound = 1;
//pt 2 = each row is one guess, 5 tiles used and submitted = 1 guess//
//1a. create a tile array that represent board location

//word bank//
const words = ["apple", "berry", "elder", "grape"];

//1st isolate the word from the array (winning word) then split its letters into an array //berry could be an array let berry =["b","e"...]
const winningWord = words[Math.floor(Math.random() * words.length)].split("");
console.log(winningWord);

//2nd determine if user guess has same letters in winning word
//something like: let usersGuess = [''] (accept letters as items in array...thus giving it a position)
//compare userguess item position to winningWord
//Keyboard that will allow you to place letters into boxes, delete, press enter//
const tiles = document.querySelectorAll(".tile");
const keys = document.querySelectorAll(".key");
let userGuess = [];

for (let key of keys) {
  key.addEventListener("click", () => {
    //find the next empty tile
    //when to move on to next row (listen for enter the if userWord=winningWord...move to new row)
    if (key.id === "enter") {
      if (userGuess.join("") === winningWord.join("")) {
        alert("You Won!");
      } else if (currentRound < 6) {
        currentRound++;
        userGuess = [];
      } else {
        alert(`You Lose the word was ${winningWord.join("")}`);
      }
    } else if (key.id === "delete") {
      //remove the last letter entry
    } else {
      if (userGuess.length === 5) {
        alert("Do you want to submit? Press Enter"); //prompt method do you want to submit/or a modal where if they say okay, submit, then the enterkey will be clicked automatically for them. delay afte 10 seconds no manual enter
      } else {
        const currentRow = document.querySelector(`.row-${currentRound}`);
        userGuess.push(key.id);
        currentRow.children[userGuess.length - 1].innerText = key.innerText;
      }
    }
  });
}

//make play button
//change tile color
//make delete key
//play again
//rules module lol



//----------------//
//letter in right spot on tile (turn green)
//leter in wrong spot(yellow)
//letter not there(darkgray)
//3rd color letters guessed on physical keyboard
//accurate spot/letter green
//letter/wrong spot yellow
//totally not there gray

//4th repeat process until lose/win
//loop possibility (variables: guesses, letterChoice)
//if you used all 6 tries without winning;you lose
//if you have more tries available; go to next row

//need to keep track letter used in the word and if its in the right spot. Have to refer to it each round

//   keys.forEach(function (key) {
//     key.addEventListener("click", function () {
//       const letter = key.innerText;
//       for (let i = 0; i < tiles.length; i++) {
//         if (!tiles[i].innerText) {
//           tiles[i].innerText = letter;
//           break;
//         }
//       }
//     });
//   });

//set up a delete key:

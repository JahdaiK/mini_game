/* Wordle functionalities:
1. Store words: 
    2 groups: Solutions (game winning words) and Bank(a bank of 5 letter words)
2. Identify letters that are in the winning words:
    -gray if not in word, -yellow if in word but wrong spot, -green if in word and right spot
3. Keyboard that will allow you to place letters into boxes, delete, press enter
4. keyboard must also reflect the colors of tiles (gray, green, yellow)
*/
document.addEventListener("DOMContentLoaded", function () {
  //word bank//
  const words = ["apple", "berry", "cherry", "date", "elder", "fig", "grape"];
  const targetWord = words[Math.floor(Math.random() * words.length)];
  console.log(words);

  //Keyboard that will allow you to place letters into boxes, delete, press enter//
  const tiles = document.querySelectorAll(".tile");
  const keys = document.querySelectorAll(".key");
  keys.forEach(function (key) {
    key.addEventListener("click", function () {
      const letter = key.innerText;
      for (let i = 0; i < tiles.length; i++) {
        if (!tiles[i].innerText) {
          tiles[i].innerText = letter;
          break;
        }
      }
    });
  });
});
//   document.getElementById('delete').addEventListener('click', function () {

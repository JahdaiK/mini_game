#Jahdai's Wordle!!
![Jahdai Wordle](https://github.com/JahdaiK/mini_game/blob/main/Screenshot%202024-01-02%20at%205.42.30%E2%80%AFAM.png)

##Technology Used:
HTML
CSS
JavaScript


##User Stories:
- As a commuter, I want to play a game that can challenge me and provide a good distraction when I take the train to work. I'm looking for a game that allows me to play multiple times and keeps track of my performance.

- As a prospective employer of Jahdai, I want to evaluate her knowledge of JavaScript logic and how she can make a task her own.

##Major Hurdles:
![filled wordle](https://github.com/JahdaiK/mini_game/blob/main/Screenshot%202024-01-02%20at%205.56.24%E2%80%AFAM.png)
- The major hurdles I faced were related to game logic. Although I managed to input letters from the on-screen keyboard into individual tiles, I struggled with organizing the rows. Ensuring that starting a new game brings the player back to the top of the board, rather than continuing from the row they left off, proved challenging.

- Another hurdle was updating the winning word in the win/lose modal. Initially, I created the win and lose modals in JS, with the inner text including the variable "winningWord" already included. However, this caused the winning word not to update in the modal, even though it was a new round. To overcome this, I created the modal parent element in HTML, leaving the <p> child element empty so that it could be dynamically updated through JS as the game repeats.

##Next Steps:
Currently, my mini game is simply a Wordle clone. In the near future, I aim to create multiple themes from which users can choose. Each theme will have word banks and colors associated with it, providing a more engaging experience.
# Spaceman - A Hangman-style game playable using Node.js

---

Spaceman is a console-based Hangman-style game written in Javacript. The goal is to correctly guess the letters in the Escape Word before you are abducted by the aliens.

---

### Instructions to play:
To begin, the player selects a difficulty and an Escape Word is chosen at random (there are 150 words in total). The player then guesses a letter. If correct, the letter is revealed in the Escape Word. If incorrect, the player is beamed up one level in the alien's tractor beam. 

If the player makes 9 incorrect guesses, they are abducted by the invading aliens and taken onboard. Ack!

If the player guesses the word correctly, they escape the tractor beam and can live to play again.


### Running the program:
Spaceman can easily be played from command line. To play it locally, you'll need to have Node.js installed on your machine. You can download Node.js [here](https://nodejs.org/).

Once Node.js is installed, make a clone of this repository:

```
$ git clone https://github.com/mattpaynedev/spaceman.git
$ cd spaceman
```

At this point, you should be able to run the program from the "spaceman" directory:

```
$ node spaceman.js
```

### How to:

You can exit the game at any time by typing "exit" into any prompt and pressing enter.

When guessing letters, you may enter upper or lower case letters. If you enter more than one character or anything that's not a letter, you'll be prompted again.

If you lose, feel free to play again!

### Under the hood:
Spaceman is designed using vanilla Javascript and the `prompt-sync` package. The prompt-sync package provides an easy way to take command-line input from the user.

The visuals for the games (the spaceship and abductee) are rendered from a JS object, with each rendering stored as as value using the `String.raw` method. The correct visual is displayed based on how many incorrect guesses the player has made.

To track the letters that have been guessed and to check whether a guess is correct, we use two `Set` objects. The `parseWord` function takes the Escape Word and registers each letter in the `wordParser` Set. When a letter is guessed by the player it is added to the `guessedLetters` Set so that we can reject later input if a letter has already been guessed.

Gameplay is controlled by the `playSpaceman` function via a `while` loop. On each iteration we clear the console, print the current spaceship visual, print the Escape Word (with all previously guessed letters revealed), and print all of the letters guessed so far. The player is prompted for a letter and their guess is checked against the Escape Word. Before finishing the turn, we utilize the Async/Await functionality in JS to display the results of the player's guess before the start of the next iteration.

In places, Spaceman uses recursion (predominantly when validating user input). If the player wants to play again, the global variables are reset and then the `playSpaceman` function is called recursively to start again from scratch.

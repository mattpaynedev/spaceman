
const prompt = require('prompt-sync')();

const alphabet = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd',
    5: 'e',
    6: 'f',
    7: 'g',
    8: 'h',
    9: 'i',
    10: 'j',
    11: 'k',
    12: 'l',
    13: 'm',
    14: 'n',
    15: 'o',
    16: 'p',
    17: 'q',
    18: 'r',
    19: 's',
    20: 't',
    21: 'u',
    22: 'v',
    23: 'w',
    24: 'x',
    25: 'y',
    26: 'z',
}

const spaceship = {
    0: String.raw`

                ---------           
            //////// \\\\\\\\
        //////////// \\\\\\\\\\\\
    ---------------\_/---------------
                   / \
                  /   \
                 /     \
                /       \
               /         \
              /           \
             /             \
            /               \
                    o
                   -|-
                   / \
__________________________________________
    `,
    1: String.raw`

                ---------           
            //////// \\\\\\\\
        //////////// \\\\\\\\\\\\
    ---------------\_/---------------
                   / \
                  /   \
                 /     \
                /       \
               /         \
              /           \
             /             \
            /       o       \
                   -|-
                   / \

__________________________________________
    `,
    2: String.raw`

                ---------           
            //////// \\\\\\\\
        //////////// \\\\\\\\\\\\
    ---------------\_/---------------
                   / \
                  /   \
                 /     \
                /       \
               /         \
              /           \
             /      o      \
            /      -|-      \
                   / \


__________________________________________
    `,
    3: String.raw`

                ---------           
            //////// \\\\\\\\
        //////////// \\\\\\\\\\\\
    ---------------\_/---------------
                   / \
                  /   \
                 /     \
                /       \
               /         \
              /     o     \
             /     -|-     \
            /      / \      \



__________________________________________
    `,
    4: String.raw`

                ---------           
            //////// \\\\\\\\
        //////////// \\\\\\\\\\\\
    ---------------\_/---------------
                   / \
                  /   \
                 /     \
                /       \
               /    o    \
              /    -|-    \
             /     / \     \
            /               \



__________________________________________       
    `,
    5: String.raw`

                ---------           
            //////// \\\\\\\\
        //////////// \\\\\\\\\\\\
    ---------------\_/---------------
                   / \
                  /   \
                 /     \
                /   o   \
               /   -|-   \
              /    / \    \
             /             \
            /               \



__________________________________________
    `,
    6: String.raw`

                ---------           
            //////// \\\\\\\\
        //////////// \\\\\\\\\\\\
    ---------------\_/---------------
                   / \
                  /   \
                 /  o  \
                /  -|-  \
               /   / \   \
              /           \
             /             \
            /               \



__________________________________________ 
    `,
    7: String.raw`

                ---------           
            //////// \\\\\\\\
        //////////// \\\\\\\\\\\\
    ---------------\_/---------------
                   / \
                  / o \
                 / -|- \
                /  / \  \
               /         \
              /           \
             /             \
            /               \

            

__________________________________________
    `,
    8: String.raw`

                ---------           
            //////// \\\\\\\\
        //////////// \\\\\\\\\\\\
    ---------------\_/---------------
                   /o\
                  /-|-\
                 / / \ \
                /       \
               /         \
              /           \
             /             \
            /               \


            
__________________________________________
    `,
    9: String.raw`

                ---------           
            /////// o \\\\\\\
        ////////// -|- \\\\\\\\\\
    --------------\/_\/--------------
                   / \
                  /   \
                 /     \
                

        ********GAME OVER********
        

    You were abducted by the aliens...


__________________________________________
    `,
}

const titleScreen = {
    0: String.raw`

                ---------           
            //////// \\\\\\\\
        //////////// \\\\\\\\\\\\
    ---------------\_/---------------
                   / \
                  /   \
                 /     \
                

         ******* SPACEMAN *******
           A Hangman-Style Game  




__________________________________________
    `,
}

const dictionary = [['bridge', 'bone', 'grapes', 'bell', 'fish', 'bunny', 'truck', 'grass', 'door', 'monkey', 'spider', 'bread', 'ears', 'bowl', 'battery', 'clock', 'lollipop', 'moon', 'doll', 'bear', 'basketball', 'bike', 'airplane', 'pencil', 'inchworm', 'seashell', 'rocket', 'cloud', 'bear', 'corn', 'purse', 'carrot', 'turtle', 'pencil', 'horse', 'head', 'lamp', 'snowman', 'ants', 'cupcake', 'chair', 'leaf', 'bunk', 'bedtime', 'snail', 'busboy', 'cherry', 'crab', 'branch', 'robot'], ['sailboat', 'popsicle', 'brain', 'sprinkler', 'money', 'spool', 'lighthouse', 'doormat', 'face', 'flute', 'rug', 'snowball', 'purse', 'owls', 'gate', 'suitcase', 'stomach', 'doghouse', 'pajamas', 'bathroom', 'scale', 'peach', 'newspaper', 'watering', 'can', 'hook', 'school', 'beaver', 'french', 'fries', 'beehive', 'beach', 'artist', 'flagpole', 'camera', 'hair', 'dryer', 'mushroom', 'toenail', 'pretzel', 'television', 'quilt', 'chalk', 'dollar', 'soda', 'chin', 'swing', 'garden', 'ticket', 'boot',], ['abruptly', 'axiom', 'boggle', 'buzzwords', 'disavow', 'fixable', 'flapjack', 'gabby', 'gossip', 'haiku', 'hyphen', 'icebox', 'ivory', 'jaundice', 'jawbreaker', 'jigsaw', 'jockey', 'joyful', 'kazoo', 'khaki', 'knapsack', 'lengths', 'matrix', 'microwave', 'nightclub', 'numbskull', 'oxygen', 'pajama', 'polka', 'psyche', 'quixotic', 'quorum', 'rhubarb', 'sphinx', 'squawk', 'strength', 'strengths', 'swivel', 'syndrome', 'topaz', 'transgress', 'unknown', 'vixen', 'walkway', 'waxy', 'wellspring', 'wizard', 'woodpecker', 'youthful', 'zipper']]

let guessedLetters = new Set();
let wordParser = new Set();
let wrongGuessCounter = 0;

//Play the game!
async function playSpaceman() {
    printTitleToConsole();

    let gameOver = false;
    let winner = false;
    let word = chooseDifficulty();
    if (word === "exit") process.exit(1);
    parseWord(word);

    while (gameOver === false) {
        console.clear();
        if (wrongGuessCounter === 9) break;

        printSpaceshipToConsole();

        winner = printWordToConsole(word); //print the word to the console and check if they've gotten the whole word correct
        if (winner === true) {
            break;  //then break the loop
        }

        printGuessedLetters(); //print the letters that have already been guessed

        let letter = guessLetter(); //get a letter from the user
        if (letter === "exit") process.exit(1);

        let correct = isCorrect(letter); //check if the guess is correct

        if (correct) console.log("\n*** Correct!! *** ");
        else console.log("\nIncorrect!! Try again...");

        await sleep(1000);
        if (winner === true) break;
    }

    if (winner === true) {
        console.clear();
        console.log(spaceship[0]);
        console.log("You escaped the aliens to live another day!");
        console.log("\nUntil next time...\n");

    } else {
        console.clear();
        console.log(spaceship[9]);
        console.log("The Escape Word was: ", word);
        console.log("\nBetter luck next time!\n");
    }

    let playAgain = prompt("Play again?(y/n) ");
    playagain = playAgain.toLowerCase();
    if (playAgain === 'y') {
        console.clear();
        guessedLetters = new Set();
        wordParser = new Set();
        wrongGuessCounter = 0;
        playSpaceman();
    }
}


//sleep function to pause the game after entering a letter
function sleep(milliseconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolve');
        }, milliseconds);
    });
}


//print the title screen
function printTitleToConsole() {
    console.log(titleScreen[0]);
    console.log("Ack!! Aliens have come to earth to abduct bad spellers.\n");
    console.log("Escape their tractor beam by spelling the Escape Word!\nYou only get 9 incorrect guesses, so choose wisely!\n");

    console.log(`Type "exit" at any prompt, to exit the program.\n`)
}


//let the player choose a difficulty level
function chooseDifficulty() {
    let difficulty = prompt("Choose Difficulty (1, 2, or 3): "); //get difficulty level from the user
    if (difficulty === "1" || difficulty === "2" || difficulty === "3") {
        let index = parseInt(difficulty, 10) - 1;
        let randomNum = Math.floor(Math.random() * 50);
        console.log("")
        return dictionary[index][randomNum]; //choose the word randomly from the dictionary array
    } else if (difficulty.toLowerCase() === "exit") {
        return difficulty; //quit the program
    } else {
        console.log("\nPlease choose a difficulty level of 1, 2, or 3:\n")
        return chooseDifficulty(); //use recursion to force the player to choose a valid level
    }
}


//Parse the word and add each letter to the wordParser set so that we can check the user's guesses
function parseWord(word) {
    for (let i = 0; i < word.length; i++) {
        wordParser.add(word[i]); //add each letter to the wordParser so we can check each entry
    }
}


//Print out the Spaceship based on how many incorrect guesses the user has made so far
function printSpaceshipToConsole() {
    console.log(spaceship[wrongGuessCounter]);
}


//Print the word to the console with the letters that have been correctly guessed so far
function printWordToConsole(word) {
    let printWord = "" //empty string to build the printout
    let correctLetterCount = 0;

    for (let i = 0; i < word.length; i++) { //iterate over the word
        if (guessedLetters.has(word[i])) {
            printWord += " " + word[i] + " "; //if the letter has been correctly guessed, add it to the printout
            correctLetterCount++
        } else {
            printWord += " _ "; //otherwise just add a '_'
        }
    }
    console.log("Escape Word:\t", printWord, "\n"); //print the word with the correctly guessed letters

    if (correctLetterCount === word.length) {
        return true;
    } else {
        return false;
    }
}


//Get an input from the user, check if it is valid, and then add it to the guessedLetters set
function guessLetter() {
    if (wrongGuessCounter === 8) {
        console.log("You have", 9 - wrongGuessCounter, "incorrect guess left!\n")
    } else {
        console.log("You have", 9 - wrongGuessCounter, "incorrect guesses left.\n")
    }
    let letter = prompt("Guess a letter: "); //get input from the user
    letter = letter.toLowerCase(); //convert the input to lowercase

    if (letter === "exit") {
        return letter;
    } else if (letter.length !== 1) {
        console.log("\nYou can only enter one letter at a time! Try again:")
        return guessLetter(); //if they entered nothing or more than 1 letter, guess again
    } else if (guessedLetters.has(letter)) {
        console.log("\nYou've already guessed that letter! Try again:\n")
        return guessLetter() //If they've guessed the letter already, guess again
    } else {
        guessedLetters.add(letter) //add the letter to the set
        return letter //return the letter that was guessed
    }
}


//Check if the letter entered is included in the wordParser set (i.e., a correct guess)
function isCorrect(letter) {
    if (wordParser.has(letter)) {
        return true //if the letter that was guessed is part of the word, return true
    } else {
        wrongGuessCounter++  //increase the counter for wrong guesses
        return false //otherwise return false
    }
}


//Print all letters that have been guessed already
function printGuessedLetters() {
    let letterPrinter = ""
    for (let i = 1; i <= 26; i++) {
        if (guessedLetters.has(alphabet[i])) {
            letterPrinter += " " + alphabet[i] + " ";
        } else {
            letterPrinter += " _ ";
        }
    }
    console.log("\nLetters that have already been guessed:\n")
    console.log(letterPrinter, "\n\n");
}

playSpaceman();
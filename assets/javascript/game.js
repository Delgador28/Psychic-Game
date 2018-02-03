// Variables
// --------------------
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = []; // [] Means new array
var computerGuess

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Functions
// --------------------
// with everything starting at 0 except guesses left, computerguess gets new guess. userGuess is not existing before key is pressed
 function startGame() {
     computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
     guessesLeft = 10;
     guessesSoFar = [];
 }

// Main logic
// --------------------
startGame() 

// This is going to be when the key is pressed, or the letter getting sent out too the screen page.

document.onkeyup = function(event) {
var userGuess = event.key
guessesSoFar.push(userGuess);
console.log("userGuess: " + userGuess) // userGuess letter
console.log("computerGuess: " + computerGuess) // computerGuess letter
console.log("guessesSoFar: " + userGuess)




//If else statements begin now...

        if (userGuess === computerGuess) {
            wins++;
            document.getElementById("wins").textContent = "Wins: " + wins;
            startGame();
            guessesSoFar = [];
            

            
        } else {
            guessesLeft--;
            document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
            guessesSoFar.push(userGuess);
                   
            
                    if (guessesLeft === 0) {
                    startGame ()
                    losses++;
                    document.getElementById("losses").textContent = "Losses: " + losses;
                    guessesSoFar: [];
                    
                }


                // Could not get guessesSoFar to show up, if I do i will send a link later on, also couldn't get consecutive letters to not count.
            }}

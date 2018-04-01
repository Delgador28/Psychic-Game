// Variables
// --------------------
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var computerGuess

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Functions
// --------------------

function startGame() {
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  guessesLeft = 10;
  guessesSoFar = [];
}


// Main logic
// --------------------
startGame()


document.onkeyup = function (event) {
  var userGuess = event.key
  guessesSoFar.push(userGuess);
  document.getElementById("letters").innerHTML = "";

  for (var i = 0; i < guessesSoFar.length; i++) {
    document.getElementById("letters").innerHTML += guessesSoFar[i];
  }


  if (userGuess === computerGuess) {
    wins++;
    document.getElementById("wins").textContent = "Wins: " + wins;
    startGame();


  } else {
    guessesLeft--;
    document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
    if (guessesLeft === 0) {
      startGame()
      losses++;
      document.getElementById("losses").textContent = "Losses: " + losses;

    }          
  }
} // END ONKEYUP FUNCTION

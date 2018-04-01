# Psychic Game

In the Psychic Game, the user will go up against a computer in an amazing guessing game of letters. How many guesses will it take YOU to win at least once? Find out on the link found above!

## Getting Started

User will begin by choosing a letter, that will show up on the "Guesses So Far:" column, if said user manages to think the same as the computer, and guesses the correct letter, the "Wins: " score will increase by one, else if user does not score and guess the same, "Losses: " will increase by one. Whenever a letter is input, "Guesses Left: " will increase by one, be careful! You only have 10 chances.. Once the user has reached the limit of 10, in either Wins or Losses, the game will reset itself and start blank.

![Quick Guess](images/psychicgif.gif)
### Prerequisites

None, just have a computer..


### Want a Sneak Peak of the code? Well here you have it! 

This is checking if the user guess matches the computer guess. if so, wins will update, as will the page content. Finishing off with a reset of the game if user wins! 🎉 :tada:
```
  if (userGuess === computerGuess) {
    wins++;
    document.getElementById("wins").textContent = "Wins: " + wins;
    startGame();
  }

```

## Deployment

Check out the game here: [Psychic Game](https://delgador28.github.io/Psychic-Game/) - Happy Guessing!

## Made With

* HTML
* CSS 
* Javascript


Thank You for checking out my work! Want to see all of it? Click [Here](https://github.com/Delgador28?tab=repositories)!
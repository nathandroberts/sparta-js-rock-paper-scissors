// get input


function getUserInput() {
  return prompt("Choose 'rock', 'paper' (p) or 'scissors'");
}

// get player move
function getPlayerMove() {
  return getUserInput();
}

// random play
function randomPlay() {
  var randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

var test =randomPlay();
console.log(randomPlay());
// get computer move


// will need to play to 5

// check for winner

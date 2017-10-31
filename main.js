

// function for computer's choice
function randomChoice(){
  var choice = Math.floor(Math.random() * 3 );
  if (choice = 0) {
    return 'r';
  } else if (choice = 1) {
    return 'p';
  } else if (choice = 2) {
    return 's';
  }
}
//score
var playerScore = 0;
var cpuScore =0;

function game(player, cpu) {
  var player = prompt('enter rock (r), paper (p) or scissors (s)');
  var cpu = randomChoice();
  if (player === 'r' && cpu === 'r') {
    alert('Player:Rock, CPU: Rock. Tie')
    game();
  } else if (player ===)
}

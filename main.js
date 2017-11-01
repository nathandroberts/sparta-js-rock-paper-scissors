

// function for computer's choice
function randomChoice(){
  var choice = Math.floor(Math.random() * 3 );
  if (choice === 0) {
    return 'r';
  } else if (choice === 1) {
    return 'p';
  } else if (choice === 2) {
    return 's';
  }
}
//score
var playerScore = 0;
var cpuScore =0;
//game
function game(player, cpu) {
  var cpu = randomChoice();
  //player won
  while (playerScore === 3) {
    alert('Game finished. Player won.');
    break;
  }
  //cpu won
  while (cpuScore === 3) {
    alert("Mission failed we'll get em next time. CPU won");
    break;
  }
  //game code
  while (playerScore < 3 && cpuScore < 3) {
    var player = prompt('Enter rock (r), paper (p) or scissors (s) to play. Enter (q) to quit');
    if (player === 'r' && cpu === 'r') {
      alert('player:rock, cpu: rock. TIE')
      game();
    } else if (player === 'r' && cpu === 'p') {
      cpuScore ++;
      alert('player: rock, cpu: paper. CPU WINS. Points- player: ' + playerScore + ' cpu: ' + cpuScore);
      game();
    } else if (player === 'r' && cpu === 's') {
      playerScore  ++;
      alert('player: rock, cpu: scissors. PLAYER WINS. Points- player: ' + playerScore + ' cpu: ' + cpuScore);
      game();
    } else if (player === 'p' && cpu === 'r') {
      playerScore  ++;
      alert('player: paper, cpu: rock. PLAYER WINS. Points- player: ' + playerScore + ' cpu: ' + cpuScore);
      game();
    } else if (player === 'p' && cpu === 'p') {
      alert('player:paper, cpu: paper. TIE')
      game();
    } else if (player === 'p' && cpu === 's') {
      cpuScore ++;
      alert('player: paper, cpu: scissors. CPU WINS. Points- player: ' + playerScore + ' cpu: ' + cpuScore);
      game();
    } else if (player === 's' && cpu === 'r') {
      cpuScore ++;
      alert('player: scissors, cpu: rock. CPU WINS. Points- player: ' + playerScore + ' cpu: ' + cpuScore);
      game();
    } else if (player === 's' && cpu === 'p') {
      playerScore  ++;
      alert('player: scissors, cpu: paper. PLAYER WINS. Points- player: ' + playerScore + ' cpu: ' + cpuScore);
      game();
    } else if (player === 's' && cpu === 's') {
      alert('player:scissors, cpu: scissors. TIE');
      game();
    } else if (player === 'q') {
      alert('you have succcessfully quit the game');
      break;
    } else {
      alert('invalid input please try again');
      game();
    }
    break;
  }
}

game();

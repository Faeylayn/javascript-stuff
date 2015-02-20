var TTT = require("./ttt/index")

var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var game = new TTT.Game(reader);
game.run("X", function () {
  game.board.printBoard();
  console.log("You win!");
  reader.close();
});

var Board = require("./board");



var Game = function (reader) {
  this.board = new Board()
  this.reader = reader
}

Game.prototype.run = function (mark, completionCallback) {
  this.board.printBoard()
  this.promptMove(mark, this.board.posMark.bind(this.board), completionCallback)
}

Game.prototype.promptMove = function (mark, callback, complete) {
  var running = this.run.bind(this)
  this.reader.question("where would you like to move? 0-8", function (move){
    var row = Math.floor(move/3);
    var col = move % 3;
    callback(row, col, mark, complete, running)
  })

}

module.exports = Game;

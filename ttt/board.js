var Board = function () {
  this.rows = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]
};

Board.prototype.won = function (mark) {
  for (var i = 0; i < this.rows.length; i ++) {
    if (this.rows[i][0] === mark && this.rows[i][1] === mark && this.rows[i][2] === mark){
      return true;
    }
    var temp = [];
    for (var j = 0; j < this.rows.length; j ++) {
      temp.push(this.rows[j][i]);
    }
    if (temp[0] === mark && temp[1] === mark && temp[2] === mark){
      return true;
    }
    if (this.rows[0][0] === mark && this.rows[1][1] === mark && this.rows[2][2] === mark) {
      return true;
    }
    if (this.rows[0][2] === mark && this.rows[1][1] === mark && this.rows[2][0] === mark) {
      return true;
    }
  }
  return false
}

Board.prototype.posMark = function (row, col, mark, complete, run) {
   if (this.empty(row, col)){
     this.rows[row][col] = mark

     if (this.won(mark)) {
       complete()
     } else {
       mark = (mark === "X") ? "O" : "X"
       run(mark, complete)
     }
   } else {
     console.log("That space isn't empty!")
     run(mark, complete)
   }
}

Board.prototype.empty = function (row, col) {
  return this.rows[row][col] === ' '
}

Board.prototype.printBoard = function () {
  console.log(JSON.stringify(this.rows[0]));
  console.log(JSON.stringify(this.rows[1]));
  console.log(JSON.stringify(this.rows[2]));
}

module.exports = Board;

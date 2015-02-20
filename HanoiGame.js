var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var HanoiGame = function () {
   this.stacks = [[], [], [1,2,3]];
  };

HanoiGame.prototype.isWon = function () {
    if (this.stacks[2].length === 0){
      if (this.stacks[0].length === 3 || this.stacks[1].length === 3){
        return true;
      }
    }
    return false;
  }

  HanoiGame.prototype.isValidMove = function (start, end) {
    if (!this.stacks[start][0]){
      console.log("You can't move from an empty stack");
      return false;
    }
    if (start <= 2 && start >= 0 && end <= 2 && end >= 0){
      if (!this.stacks[end][0]){
        return true;
      }
      if (this.stacks[start][0] < this.stacks[end][0]){
        return true;
      }
    }
    console.log("that is not a valid move");
    return false;
  }

  HanoiGame.prototype.print = function () {
    console.log(JSON.stringify(this.stacks[0]));
    console.log(JSON.stringify(this.stacks[1]));
    console.log(JSON.stringify(this.stacks[2]));
  }

  HanoiGame.prototype.move = function (start, end, completionCallback, that) {
    var moved
    if (that.isValidMove(start, end)){
      var temp = that.stacks[start].shift();
      that.stacks[end].unshift(temp);
      moved = true
    } else {
      moved = false
    }
    if (moved) {
      if (that.isWon()){
        completionCallback()
      } else {
        that.run(completionCallback)
      }
    } else {
      console.log("That move was not valid.")
      that.run(completionCallback)
    }

  }
  HanoiGame.prototype.promptMove = function (callback, completionCallback, that) {

    reader.question("Enter Start Tower", function (numString1) {
    reader.question("Enter End Tower", function (numString2) {
      var start_tower = parseInt(numString1);
      var end_tower = parseInt(numString2);

      callback(start_tower, end_tower, completionCallback, that)
    });
  });
  }

  HanoiGame.prototype.run = function (completionCallback) {
      this.print()
      this.promptMove(this.move, completionCallback, this)
  }

  var han = new HanoiGame()

  han.run(function () {
    console.log("YOU WIN!!!!!!");
    reader.close()
  })

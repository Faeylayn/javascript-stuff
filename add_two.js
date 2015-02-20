
var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {


  if (numsLeft < 1){
    completionCallback(sum);
  } else {
    reader.question("Next Number to add?", function (number) {
      var num = parseInt(number);
      sum += num;
      console.log("The sum at this point is " + sum);
      addNumbers(sum, numsLeft-1, completionCallback);
    })



  }

}

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});

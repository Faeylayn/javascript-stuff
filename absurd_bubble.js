
var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function absurdBubbleSort(arr, sortCompletionCallback){

  function outerBubbleSortLoop(arr, madeAnySwaps){
    if (madeAnySwaps){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
    } else {
      sortCompletionCallback(arr)
    }

  }
  outerBubbleSortLoop(arr, true)

}

function askIfGreaterThan(el1, el2, callback) {
  reader.question("is "+ el1 + "greater than " + el2 + "?", function (answer) {
    var swap = (answer === "yes") ? true : false;
    callback(swap);
  })

}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if (i < arr.length - 1){
    askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan){
      if (isGreaterThan){
        madeAnySwaps = true;
        var temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)
    })

  } else {
    outerBubbleSortLoop(arr, madeAnySwaps);
  }


}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
  //create a variable to hold the number of times the number has to be multiplied
  var times = 0;

  //convert the number to a string
  num = num.toString();

  //loop until the number is a single digit
  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }
  //return the number of times the number has to be multiplied
  return times;
}

function persistence(num) {
  for (var i = 0; num > 9; i++) {
    num = num
      .toString()
      .split("")
      .reduce((t, c) => c * t);
  }
  return i;
}

function persistence(num) {
    //initialize a count
    let count = 0;
    //execute the while loop and keep updating the value of local scoped num until desired value
    while(num > 9){
      num = num.toString().split("").map(a => +a).reduce((acc, curr) => acc * curr)
      count++
    }
    return count;
  }



//Given a number n, for each integer i in the range from 1 to n inclusive, print one value per line as follows:
//if i is a multiple of both 3 and 5, print FizzBuzz
//if i is a multiple of 3 but not 5 prnt Fizz
//if i is a multiple of 5 but not 3, print Buzz
//if i is not a multiple of 3 or 5, print the value of i
//what input goes into the problem? integer
//What output should come? returns void but print val
//label important parts: integer: n
const fizzBuzz = (n) => {
  //iterate from index 1 of n to n itself:
  for (let i = 1; i <= n; i++) {
    //when i is a multiple of both 3 and 5:
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0 && i % 5 != 0) {
      console.log("Fizz");
    } else if (i % 5 == 0 && i % 3 != 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(15);

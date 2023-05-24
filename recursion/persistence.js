

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

//short solution
const persistence = (num) => {
    return `${num}`.length > 1
      ? 1 + persistence(`${num}`.split("").reduce((a, b) => a * +b))
      : 0;
  };

function persistence(num) {
    // Base case: If num is a single digit, return 0 (no multiplication required)
    if (num < 10) {
      return 0;
    }
  
    // Convert num to a string
    const numString = String(num);
  
    // Multiply the digits of num
    let product = 1;
    for (let i = 0; i < numString.length; i++) {
      product *= Number(numString[i]);
    }
  
    // Recursive call with the product as the new input
    return 1 + persistence(product);
  }
  
 
// Sum Numbers
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

//In the solution below, we don't have to add an explicit check for when the array is empty to return 0 because the for the reduce method, when the calling array is empty, it returns the initialValue, 0 in this case without calling the callback function.

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

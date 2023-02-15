/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). */

function findOdd(A) {
  //create an empty object to track each value and it's count within the array
  let elementsCount = {};

  //iterate over the array and everytime that you find an element using bracket
  //notation, increment it by one, otherwise, set it to one.
  for (let element of A) {
    elementsCount[element]
      ? elementsCount[element]++
      : (elementsCount[element] = 1);
  }

  //having gathered all our elements in an object and their count,we want to
  //find the element whose count is odd
  for (let element in elementsCount) {
    if (elementsCount[element] % 2 !== 0) {
      //the property came as a string so we changed to number.
      return Number(element);
    }
  }
}

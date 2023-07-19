//example:
//Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

//In my own words: Write a function called sumZero which will take in a sorted array of integers. Since they are sorted negative values will begin from the left, 0 in the middle before the positive values depending on the case. One pointer will start from the left, another from the right, so the function should find the first pair which when added give 0. Return an array that contain both values that when added sum up to zero, or undefined if such a pair does not exist.

//What inputs go into the problem? array
//What output should come from the solution of the problem? an array if we find a pair, undefined if we don't.
//Can the output be determined from the inputs? yes
//How should I label the important pieces of data that are a part of the problem? arr, leftPointer, rightPointer,

//sample inputs:
//sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
//sumZero([-2,0,1,3]) // undefined
//sumZero([1,2,3]) // undefined

//my solution:

//create sumZero taking in 'arr'
const sumZero = (arr) => {
  //initialize leftPointer and rightPointer
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  //provided left pointer and right pointer have not crossed, keep iterating to find pair:
  while (arr[leftPointer] < arr[rightPointer]) {
    let sum = arr[leftPointer] + arr[rightPointer];
    //check if we have 0
    if (sum === 0) {
      return [arr[leftPointer], arr[rightPointer]];
      //The idea below here is if we have a positive number as sum, it means the rightPointer is too big so we go one below and similarly, if we get a negative number as sum, means the leftPointer is to small so we go one above until we find a negative number as leftPointer which has as it's equivalent the positive number as rightPointer so when they're added we get 0.
    } else if (sum < 0) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  //I commented the line below out because I realized that if we never get sum as zero then the function will invariably return 'undefined' implicitly, we don't need to do it explicitly.
  //   return undefined;
};

sumZero([1, 2, 3]);

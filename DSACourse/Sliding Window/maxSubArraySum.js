// Write a function called maxSubArraySum which accepts an array of integers and a number called n, The function should calculate the maximum sum of n consecutive elements in the array

//In my own words: Create a function called maxArraySum, it should accept an array of integers. The function in question should calculate the max sum of n consecutive elements in the array.

//What inputs go into the problem? array of integers, an integer
//What output should come from the solution of the problem? an integer with the maximum sum

//Can the output be determined from the inputs? yes
//How should I label the important pieces of data that are a part of the problem? arr, num, tempSum, maxSum

//explore examples:
//maxSubArraySum([1,2,5,2,8,1,5], 2) // returns 10
//maxSubArraySum([1,2,5,2,8,1,5], 4) // returns 17
//maxSubArraySum([4,2,1,6],1) // returns 6
//maxSubArraySum([4,2,1,6,2], 4) // returns 13

//my solution:
//create function:

const maxSubArraySum = (arr, num) => {
  if (num > arr.length) return null;
  if (arr.length < 1) return null;
  //initialize tempSum and maxSum
  let tempSum = 0;
  let maxSum = 0;
  let startingIndex = 0;

  //iterate over num elements and add them up on the first iteration, then for all subsequent iterations, add the very next element and then substract the last preceding element till we get to the end. The end should be reflective of us being able to get a subset of num.

  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }

  for (let j = num; j < arr.length; j++) {
    //add the next element to tempSum and subtract the previous beginning element from tempSum, then update maxSum depending on if the new sum is higher

    tempSum = tempSum + arr[j] - arr[startingIndex];
    maxSum = Math.max(tempSum, maxSum);
    startingIndex++;
  }

  return maxSum;
};

maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2);

//solution from course:
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

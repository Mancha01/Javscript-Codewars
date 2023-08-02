//Implement a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array, there can be negative numbers in the array but it will always be sorted.

//In my own words: Create a function called countUniqueValues, the input of the function will be an array and will be a sorted array. Not that the array may have negative numbers.

//What inputs go into the problem? array
//What output should come from the solution of the problem? an integer with a count of the unique values. 0 if the array is empty
//Can the output be determined from the inputs? yes
//How should I label the important pieces of data that are a part of the problem? arr, leftPointer, rightPointer,

//explore examples:
//countUniqueValues([1,1,1,1,1,2]) // returns 2
//countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // returns 7
//countUniqueValues([]) // returns 0
//countUniqueValues([-2,-1,-1,0,1]) // returns 4

//my solution:
//create function:

const countUniqueValues = (arr) => {
  //return 0 if array is empty
  if (arr.length === 0) return 0;

  //return 1 if array has only one element
  if (arr.length === 1) return 1;

  //initialize count to start from one for all non-empty arrays of more than 1:
  let count = 1;
  let leftPointer = 0;
  let rightPointer = 1;

  //iterate over the array and anytime the leftPointer is not equal to the rightPointer, it means we have a unique value and so increment the count by one and then set the leftPointer to the index of the rightPointer in that instance, while the rightPointer is incremented again till we reach the end
  while (rightPointer != arr.length) {
    //when left equal to right:
    if (arr[leftPointer] === arr[rightPointer]) rightPointer++;

    //when left not equal to right:
    if (arr[leftPointer] != arr[rightPointer]) {
      count++;
      leftPointer = rightPointer;
      rightPointer++;
    }
  }

  return count;
};

countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);

//Solution from the course:
function countUniqueValuesI(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
countUniqueValues([1, 2, 2, 5, 7, 7, 99]);

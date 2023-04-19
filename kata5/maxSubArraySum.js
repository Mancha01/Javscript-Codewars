
/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/
//1st top solution:
var maxSequence = function(arr){
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
    }
    return ans;
  }

  //Second top solution:
  var maxSequence1 = function(arr){
    var currentSum = 0;
    return arr.reduce(function(maxSum, number){
        currentSum = Math.max(currentSum+number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
}



maxSequence1([-2, 1, -3, 4, -1, 2, 1, -5, 4])

/*
Explanation of the solution above by chatgpt:
The given solution implements a function called maxSequence that takes an array arr as input and returns the maximum sum of any contiguous subarray within the given array.

Here's a breakdown of how the function works:

The function initializes a variable currentSum to 0, which will be used to keep track of the running sum of the subarray.

The function then calls the reduce method on the input array arr. The reduce method takes two arguments - a callback function and an initial value.

The callback function is defined as an anonymous function that takes two arguments - maxSum and number.

For each element number in the input array, the callback function calculates the currentSum by adding the current element to the currentSum value and taking the maximum between the resulting sum and 0. This effectively resets the current sum to 0 if it becomes negative.

The callback function then returns the maximum of the currentSum and the maxSum value. The maxSum value is initially set to 0, and is updated for each subarray to hold the maximum sum seen so far.

Finally, the reduce method returns the maximum sum of any contiguous subarray within the input array arr.

In summary, the function calculates the maximum sum of any contiguous subarray within the given array by iterating over the array and keeping track of the running sum. The reduce method is used to find the maximum sum of all possible contiguous subarrays.





Mancha
how would one come up with a solution like this?
The given solution is an implementation of Kadane's algorithm, which is a well-known algorithm for finding the maximum subarray sum. The algorithm is named after its inventor, Jay Kadane.

Kadane's algorithm is based on the observation that the maximum sum of any subarray can be found by iterating over the array and keeping track of the running sum. For each element in the array, we add it to the running sum and update the maximum sum seen so far. If the running sum becomes negative, we reset it to 0, as any subarray that includes the negative sum would not be the maximum subarray.

Here's a step-by-step approach to come up with the solution:

Understand the problem statement: In this case, the problem is to find the maximum sum of any contiguous subarray within the given array.

Look for patterns and observations: By looking at the problem, we can observe that the maximum sum of any subarray is the sum of all positive elements in the subarray. So, if we can identify the contiguous subarray with all positive elements, we can find the maximum subarray sum.

Identify the algorithm: Kadane's algorithm can be used to find the maximum subarray sum. The algorithm involves iterating over the array and keeping track of the running sum. For each element in the array, we add it to the running sum and update the maximum sum seen so far. If the running sum becomes negative, we reset it to 0.

Translate the algorithm into code: Once the algorithm is identified, it can be translated into code. The given solution is an implementation of Kadane's algorithm using the reduce method of the array object.

Overall, the process involves breaking down the problem, identifying patterns and observations, and translating the algorithm into code. With practice and experience, this process becomes easier and more intuitive.
*/

/*
how can we get the array subarray that led to the max sum
The given solution finds the maximum sum of any contiguous subarray within the input array, but it does not keep track of the subarray that led to the maximum sum.

To get the subarray that led to the maximum sum, we need to modify the algorithm slightly to keep track of the starting and ending indices of the subarray that has the maximum sum. Here's one way to modify the given solution to achieve this:

javascript
Copy code
var maxSequence = function(arr) {
  var currentSum = 0;
  var maxSum = 0;
  var startIndex = 0;
  var endIndex = -1;
  var tempIndex = 0;
  
  for (var i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    
    if (currentSum > maxSum) {
      maxSum = currentSum;
      startIndex = tempIndex;
      endIndex = i;
    }
    
    if (currentSum < 0) {
      currentSum = 0;
      tempIndex = i + 1;
    }
  }
  
  return arr.slice(startIndex, endIndex + 1);
};
In this modified solution, we have added four new variables to keep track of the subarray that has the maximum sum. startIndex and endIndex are initialized to -1 and 0, respectively. tempIndex is used to keep track of the start index of the subarray that has the maximum sum so far.

The for loop iterates over the input array and calculates the currentSum as before. If the currentSum is greater than the maxSum, we update the maxSum and the startIndex and endIndex variables to reflect the new subarray that has the maximum sum. If the currentSum becomes negative, we reset it to 0 and update tempIndex to the next index.

Finally, the function returns the subarray that has the maximum sum by using the slice method on the input array. The slice method takes the startIndex and endIndex as arguments and returns the corresponding subarray.

This modified solution will return the subarray that has the maximum sum.
*/
// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let maxVal = 0;
  let tempMax = 0;
  for (let i = 0; i < k; i++) {
    maxVal += nums[i];
  }
  tempMax = maxVal;
  for (let i = k; i < nums.length; i++) {
    tempMax = tempMax - nums[i - k] + nums[i];
    maxVal = Math.max(tempMax, maxVal);
  }
  return maxVal / k;
};

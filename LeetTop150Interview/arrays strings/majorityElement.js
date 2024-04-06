// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

//My solution:
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const obj = {};
  const maj = nums.length / 2; // Calculate the majority threshold
  let majorityElement = null; // Initialize majorityElement to null

  // Count occurrences of each number in nums
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }

  // Find the majority element
  Object.entries(obj).forEach((entry) => {
    if (entry[1] > maj) {
      majorityElement = entry[0]; // Update majorityElement if count > majority threshold
    }
  });

  return majorityElement;
};

//Top solution:

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const hash = {};
  let res = 0;
  let majority = 0;

  for (let n of nums) {
    hash[n] = 1 + (hash[n] || 0);
    if (hash[n] > majority) {
      res = n;
      majority = hash[n];
    }
  }

  return res;
};

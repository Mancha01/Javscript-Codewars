// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    if (nums[r]) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
    }
  }
};

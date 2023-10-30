//my solution which didn't pass all test cases:
var removeElement = function (nums, val) {
  let start = 0;
  let end = nums.length - 1;
  while (end > start) {
    if (nums[start] != val) {
      start++;
    }
    if (nums[end] == val) {
      end--;
    }
    if (nums[start] == val && nums[end] != val) {
      let swapVal = nums[start];
      nums[start] = nums[end];
      nums[end] = swapVal;
    }
  }

  let k = start + 1;
  return k;
};

//my solution when corrected by chatGpt:
var removeElementI = function (nums, val) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] == val) {
      // Swap with the element at the right pointer
      nums[left] = nums[right];
      right--;
    } else {
      left++;
    }
  }

  // The "left" pointer now points to the first element that equals "val"
  return left;
};

// Yes, the approach used in the removeElementI function can be considered a variation of the "two-pointer" technique. The two-pointer technique involves using two pointers to traverse an array or list in a way that helps solve specific problems efficiently.

// In this function, count and i are effectively acting as two pointers:

// count is used as a pointer to keep track of the position where the non-val elements should be placed in the modified array. It moves forward whenever a non-val element is found.

// i is used as the loop counter, iterating through the elements of the nums array.

// This approach is a form of the two-pointer technique because it uses two pointers to perform an operation on they efficiently, in this case, to remove elements equal to val while keeping track of the modified array's length. The two pointers work in a way that avoids unnecessary shifting of elements, making it an efficient solution for this particular problem.

//solution on leetcode

function removeElementII(nums, val) {
  // Counter for keeping track of elements other than val
  let count = 0;
  // Loop through all the elements of the array
  for (let i = 0; i < nums.length; i++) {
    // If the element is not val
    if (nums[i] !== val) {
      nums[count++] = nums[i];
    }
  }
  return count;
}

removeElementI([3, 2, 2, 3], 3);

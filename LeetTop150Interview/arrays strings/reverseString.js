/* Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  return s.reverse();
};

/* The reverse() method transposes the elements of the calling array object in place, mutating the array, and returning a reference to the array. The reference to the original array, now reversed. Note that the array is reversed in place, and no copy is made. In computer science, An in-place algorithm is an algorithm that operates directly on the input data structure without requiring extra space proportional to the input size. In other words, it modifies the input in place, without creating a separate copy of the data structure. An algorithm which is not in-place is sometimes called not-in-place or out-of-place. */

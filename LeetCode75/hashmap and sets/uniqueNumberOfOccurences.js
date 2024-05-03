// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

/**
 * @param {number[]} arr
 * @return {boolean}
 */
function uniqueOccurrences(arr) {
  // Create a hash map to store element counts
  const valueCounts = {};

  // Count occurrences of each element
  for (const val of arr) {
    valueCounts[val] = (valueCounts[val] || 0) + 1;
  }

  // Convert hash map values to an array
  const countsList = Object.values(valueCounts);

  // Check if the number of unique elements (set size) is equal to the number of occurrences (list length)
  return new Set(countsList).size === countsList.length;
}

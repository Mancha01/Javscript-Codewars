var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
  return [];
};

twoSum([2, 7, 11, 15], 9);

/* Intuition
To solve this problem, we need to find a pair of numbers from the given array whose sum equals the target. One approach to solve this problem is to use a hash table. We can store each element of the array in the hash table along with its index. Then, for each element, we can check if the difference between the target and the element is already in the hash table. If it is, we have found a pair that adds up to the target.

Approach
1 Create an empty hash map.
2 Iterate over the array and for each element:
1.1 Calculate the complement by subtracting the element from the target.
1.2 Check if the complement exists in the hash map.
1.3 If the complement exists, return the indices of the current element and the complement.
1.4 If the complement does not exist, add the element and its index to the hash map.
3 If no pair is found, return null or an empty result. */

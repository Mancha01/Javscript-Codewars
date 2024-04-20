function pivotIndex(nums) {
  // Calculate the total sum of the array
  const total = nums.reduce((acc, curr) => acc + curr, 0);

  // Initialize left sum to 0
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    // Calculate right sum efficiently
    const rightSum = total - nums[i] - leftSum;

    // Check if left and right sums are equal
    if (leftSum === rightSum) {
      return i;
    }

    // Update left sum for the next iteration
    leftSum += nums[i];
  }

  // If no pivot index is found, return -1
  return -1;
}

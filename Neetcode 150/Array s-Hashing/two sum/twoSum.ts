function twoSum(nums: number[], target: number): number[] {
  const hashIdx = {};
  for (let i = 0; i < nums.length; i++) {
    const sub = target - nums[i];
    if (sub in hashIdx) {
      return [i, hashIdx[sub]];
    } else {
      hashIdx[nums[i]] = i;
    }
  }
}

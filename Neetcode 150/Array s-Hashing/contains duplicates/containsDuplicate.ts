function containsDuplicate(nums: number[]): boolean {
  let nums_set = new Set(nums);
  return nums_set.size != nums.length;
}

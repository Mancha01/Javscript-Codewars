//My naive solution:
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let arr1 = [];
  let arr2 = [];
  for (const val of nums1) {
    if (!nums2.includes(val)) {
      arr1.push(val);
    }
  }
  for (const val of nums2) {
    if (!nums1.includes(val)) {
      arr2.push(val);
    }
  }
  return [_.uniq(arr1), _.uniq(arr2)];
};

//optimal solution using sets:
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
function findDifference(nums1, nums2) {
  // Use sets for efficient difference operations
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  // Elements in nums1 but not in nums2
  const difference1 = [...set1].filter((x) => !set2.has(x));

  // Elements in nums2 but not in nums1
  const difference2 = [...set2].filter((x) => !set1.has(x));

  return [difference1, difference2];
}

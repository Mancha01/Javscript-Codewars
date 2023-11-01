//my initial idea:
// var removeDuplicates = function (nums) {
//   if (nums.length == 0) {
//     return 0;
//   }

//   let i = 1;
//   let dupe = 1;

//   for (let j = 1; j < nums.length; j++) {
//     if (nums[i - 1] != nums[j]) {
//       nums[i] = nums[j];
//       i++;
//     } else {
//       if (dupe < 2) {
//         i++;
//         dupe++;
//       } else {
//         dupe = 0;
//       }
//     }
//   }

//   return i;
// };

//fixed from gpt:
var removeDuplicates = function (nums) {
  if (nums.length <= 2) {
    return nums.length;
  }

  let i = 2; // Start from the third element
  for (let j = 2; j < nums.length; j++) {
    if (nums[i - 2] !== nums[j]) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
};

removeDuplicates([1, 1, 1, 2, 2, 3]);

// Radix Sort Pattern:
// -Create function to get digit
// -Create function to count number of digits
// -Create function to give us the number of digits of the largest number

// Radix Pseudocode:
// -Define a function that accepts a list of numbers
// -Figure out how many digits the largest number has
// -loop from k = 0 to the largest number of digits
// -For each iteration of the loop:
// 	*Create buckets for each digit(0 - 9)
// 	*Place each number in the corresponding bucket based on its kth digit
// -Replace our existing array with values in our buckets, starting with 0 and going up to 9
// -Return list at the end.

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);

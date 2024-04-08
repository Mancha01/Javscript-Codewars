//my solution:
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let maxCandies = [];
  const maxVal = Math.max(...candies);
  for (let candy of candies) {
    if (candy + extraCandies >= maxVal) {
      maxCandies.push(true);
    } else {
      maxCandies.push(false);
    }
  }
  return maxCandies;
};

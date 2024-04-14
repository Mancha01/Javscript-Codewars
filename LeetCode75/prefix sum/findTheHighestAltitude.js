// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let prefix_sum = [0, ...gain];
  for (let i = 1; i < prefix_sum.length; i++) {
    prefix_sum[i] += prefix_sum[i - 1];
  }
  return Math.max(...prefix_sum);
};

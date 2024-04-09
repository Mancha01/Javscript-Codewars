// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let f = [0, ...flowerbed, 0];
  for (let i = 1; i < f.length - 1; i++) {
    if (f[i - 1] == 0 && f[i] == 0 && f[i + 1] == 0) {
      f[i] = 1;
      n--;
    }
  }
  return n <= 0;
};

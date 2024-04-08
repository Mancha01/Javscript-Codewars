// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

//my first solution(naive):
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let word1Idx = 0;
  let word2Idx = 0;
  let mergedString = "";

  while (word1Idx < word1.length && word2Idx < word2.length) {
    mergedString += word1[word1Idx] + word2[word2Idx];
    word1Idx++;
    word2Idx++;
  }

  while (word1Idx < word1.length) {
    mergedString += word1[word1Idx];
    word1Idx++;
  }

  while (word2Idx < word2.length) {
    mergedString += word2[word2Idx];
    word2Idx++;
  }
  return mergedString;
};

//improved:
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let merged = [];
  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < word1.length && idx2 < word2.length) {
    merged.push(word1[idx1]);
    merged.push(word2[idx2]);
    idx1++;
    idx2++;
  }
  return [
    ...merged,
    ...word1.substring(idx1, word1.length),
    ...word2.substring(idx2, word2.length),
  ].join("");
};

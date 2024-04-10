// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
  // Efficient vowel set for membership checks
  const vowels = new Set("aeiouAEIOU");

  // Convert input string to an array for modification
  const mutableS = s.split("");

  let left = 0;
  let right = mutableS.length - 1;

  while (left < right) {
    // Skip consonants using efficient vowel set membership
    while (left < right && !vowels.has(mutableS[left])) {
      left++;
    }

    // Skip consonants using efficient vowel set membership
    while (left < right && !vowels.has(mutableS[right])) {
      right--;
    }

    // Swap vowels if both are valid
    if (left < right) {
      [mutableS[left], mutableS[right]] = [mutableS[right], mutableS[left]];
      left++;
      right--;
    }
  }

  // Join the modified array back into a string and return it
  return mutableS.join("");
}

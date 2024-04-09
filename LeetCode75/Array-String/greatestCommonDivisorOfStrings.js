// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
function gcdOfStrings(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;

  function isDivisor(l) {
    if (len1 % l || len2 % l) {
      return false;
    }
    const f1 = Math.floor(len1 / l);
    const f2 = Math.floor(len2 / l);
    return (
      str1.slice(0, l).repeat(f1) === str1 &&
      str1.slice(0, l).repeat(f2) === str2
    );
  }

  for (let l = Math.min(len1, len2); l > 0; l--) {
    if (isDivisor(l)) {
      return str1.slice(0, l);
    }
  }

  return "";
}

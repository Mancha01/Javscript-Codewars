class Solution {
  // Method to encode a list of strings into a single string
  encode(strs) {
    let res = "";
    for (let val of strs) {
      res += val.length + "#" + val;
    }
    return res;
  }

  // Method to decode a single string back into a list of strings
  decode(s) {
    let res = [];
    let i = 0;

    while (i < s.length) {
      let j = i;
      while (s[j] !== "#") {
        j++;
      }
      let length = parseInt(s.substring(i, j));
      i = j + 1;
      j = i + length;
      res.push(s.substring(i, j));
      i = j;
    }

    return res;
  }
}

//first submission:
function isAnagram(s: string, t: string): boolean {
  return s.split("").sort().join("") == t.split("").sort().join("");
}

//second submission using hashmap:
function isAnagramI(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const countS: { [key: string]: number } = {};
  const countT: { [key: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    countS[s[i]] = (countS[s[i]] || 0) + 1;
    countT[t[i]] = (countT[t[i]] || 0) + 1;
  }

  for (const c in countS) {
    if (countS[c] !== countT[c]) {
      return false;
    }
  }

  return true;
}

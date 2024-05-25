//more efficient solution inspired by neetcode approach

function groupAnagrams(strs: string[]): string[][] {
  const final: { [key: string]: string[] } = {};

  for (let str of strs) {
    const count = new Array(26).fill(0);
    for (let char of str) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    const key = count.join(",");
    if (!final[key]) {
      final[key] = [];
    }
    final[key].push(str);
  }

  return Object.values(final);
}

//less optimal by me:
function groupAnagramsI(strs: string[]): string[][] {
  const anagramHash: { [key: string]: number[] } = {};
  const sortedList = strs.map((str) => str.split("").sort().join(""));

  sortedList.forEach((str, i) => {
    if (!anagramHash[str]) {
      anagramHash[str] = [];
    }
    anagramHash[str].push(i);
  });

  const final: string[][] = [];
  for (const str in anagramHash) {
    final.push(anagramHash[str].map((val) => strs[val]));
  }

  return final;
}

//slightly less fast by amazon q. similar approach to minde but done in a much smarter and more succinct way:
function groupAnagramsII(strs: string[]): string[][] {
  const final: { [key: string]: string[] } = {};

  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (!final[sortedStr]) {
      final[sortedStr] = [];
    }
    final[sortedStr].push(str);
  }

  return Object.values(final);
}

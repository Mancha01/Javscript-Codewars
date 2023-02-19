/*
DESCRIPTION:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

//solution I came up with:
function solution(str, ending) {
  return ending === ""
    ? true
    : str.slice(-ending.length) === ending
    ? true
    : false;
}

//A more succinct solution using the endsWith method:
const solution = (str, ending) => str.endsWith(ending);

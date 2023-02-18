/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char. */

function XO(str) {
  let x = str.match(/[x]/gi);
  let o = str.match(/[o]/gi);
  return str === ""
    ? true
    : x === null
    ? false
    : o === null
    ? false
    : x.length !== o.length
    ? false
    : true;
}

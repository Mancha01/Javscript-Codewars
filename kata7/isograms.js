/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)*/

//The solution I came up with:
function isIsogram(str){
    if (str === []){return true}
    //create an object which tracks the count of each value
    let count = {}
    //loop over string and populate the object
    for(let val of str.toLowerCase()){
      count[val] ? count[val]++ : count[val] = 1 
    }
   return Object.values(count).find(a => a > 1) === undefined ? true : false
  }

  //A more succinct solution using a Set
  function isIsogram(str){
    let strWithoutDupes = new Set(str.toLowerCase());
    return str.length === strWithoutDupes.size
  }

  /*
  The explanation:
  The function works by first converting the input string to uppercase using the toUpperCase() method. This is done to ignore any differences in letter case when checking for duplicates.

Next, a new Set object is created using the Set() constructor. The input string is passed to the constructor as an argument, which creates a new Set with each unique letter from the string. Because a Set can only contain unique values, any duplicate letters in the string are automatically removed.

Finally, the function checks whether the size of the Set object is equal to the length of the original input string. If they're equal, that means there were no duplicate letters in the string, so the function returns true. Otherwise, it returns false.
  */

//Another succinct solution using regular expressions:
function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
  }

  /*The explanation for the solution above:
  The function works by using a regular expression to check whether the string contains any repeated letters. The regular expression /(\w).*\1/i matches any character (\w) followed by any other characters (.*) and then the same character as the first (\1). The i flag at the end makes the matching case-insensitive.

The test() method of the regular expression object is used to check whether the regular expression matches any part of the input string. If it does, that means the string contains at least one repeated letter, so the function returns false. Otherwise, it returns true.

The ! operator is used to negate the result of the test() method. This means that if the regular expression matches, the test() method returns true, but the ! operator turns it into false, and vice versa. So if the regular expression matches, the function returns false, and if it doesn't match, the function returns true.

In summary, the regular expression checks for repeated letters in the input string, and the ! operator negates the result of the regular expression to return true if there are no repeated letters (i.e., the string is an isogram), and false otherwise.
  */

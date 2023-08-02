//Anagrams
//Given two strings, write a function called validAnagram to determine if the second string is an anagram of the first.
//In my own words: Given two strings, write a function that determines if one string (each character of said string) is equal to another, regardless of order.
//What inputs go into the problem? strings
//What output should come from the solution of the problem? A boolean true or false, true for valid anagram
//Can the output be determined from the inputs? yes
//How should I label the important pieces of data that are a part of the problem? string1, string2, obj1 , obj2
//my solution:
function validAnagram(string1, string2) {
  //check if the lengths are even equal in the beginning and return false if they're not:
  if (string1.length != string2.length) return false;

  //initialize the two objects obj1 and obj2 to empty objects
  let obj1 = {};
  let obj2 = {};

  //iterate over string1 and populate each character and count into obj1

  for (const val of string1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }

  //iterate over string2 and populate each character and count into obj2
  for (const val of string2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }

  //iterate over obj1 and check for existence of each character of obj1 in obj2
  //check if the value(count) of each character of obj1 is equal to that of each character in obj2 within same iteration

  for (const key in obj1) {
    if (!(key in obj2)) {
      return false;
    }

    if (obj1[key] != obj2[key]) {
      return false;
    }
  }

  return true;
}

validAnagram("aaz", "zza");

//solution from course:
function validAnagramI(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagramI("anagramm", "nagarams");

/*DESCRIPTION:
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation". */

//Brilliant solution as we can see as two strings are created with each value and replacement when cross referenced having the same index so with that can easily connect both, reference the relevant and encrypt by replacing characters as needed.

function rot13(message) {
  let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";

  return message.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
}

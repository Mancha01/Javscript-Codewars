/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  --
*/

//using recursion

function digitalRoot(n) {
  if (n.toString().split("").length == 1) {
    return n;
  }
  return digitalRoot(
    (n = n
      .toString()
      .split("")
      .map((a) => Number(a))
      .reduce((a, c) => a + c, 0))
  );
}

//Minified version from https://www.toptal.com/developers/javascript-minifier

function digitalRoot(t) {
  return 1 == t.toString().split("").length
    ? t
    : digitalRoot(
        (t = t
          .toString()
          .split("")
          .map((t) => Number(t))
          .reduce((t, i) => t + i, 0))
      );
}

//in solving this we had an issue as we didin't add a 'return' statement for the cases when n wasn't equal to 1, so for those cases the function would return undefined. This was the fix as suggested by chat gpt:
/*
  Mancha
please why does the above fix work? because the problem statement asks that we return the value when the lenght is 1
The fix works because adding the return statement before the recursive call ensures that the function returns the final result of the recursive call to digitalRoot, which is the value that satisfies the condition of having a length of 1.

In the original function, the return statement was only executed when the input n had a length of 1, but for input values with a length greater than 1, the function would make a recursive call to digitalRoot without returning the final result. This means that the value returned by the original function was undefined for any input value with a length greater than 1.

By adding the return statement before the recursive call, the function now properly returns the final result in all cases, including when the input value has a length of 1.
  */

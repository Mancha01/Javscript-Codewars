function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

sumRange(4);
/* 
The steps:
1:
sumRange(3)
return 3 + sumRange(2)

sumRange of 3 above is waiting for the output of sumRange of 2

sumRange(2)
return 2 + sumRange(1)

Finally, at the point just above, when num is equal to 1 when we go through the process
iteratively, our base case is true as num === 1

sumRange(2) returns 3 which gives the value that sumRange(3) was waiting for.

So finally:

sumRange(3)
return 3 + 3

*/

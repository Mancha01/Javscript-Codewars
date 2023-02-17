/*This time we want to write calculations using functions and get the results. Let's have a look at some examples:
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
*/

const zero = fn => fn? fn(0): 0;
const one = fn => fn? fn(1) : 1;
const two = fn => fn? fn(2) : 2;
const three = fn => fn? fn(3) : 3;
const four = fn => fn? fn(4) : 4;
const five = fn => fn? fn(5) : 5;
const six = fn => fn? fn(6) : 6;
const seven = fn => fn? fn(7) : 7;
const eight = fn => fn? fn(8) : 8;
const nine = fn => fn? fn(9) : 9;

const plus = a => b => (a + b)
const minus = a => b => (b - a)
const times = a => b => (a * b)
const dividedBy = a => b => (Math.floor(b/a))
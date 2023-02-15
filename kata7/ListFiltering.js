//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  return l.filter((a) => typeof a === "number");
}

//Below is The first solution I came up with for which I went up and down and round about when I could have just used one line, the filter method is really powerful. From my solution below I tried to filter out duplicate values when I saw "123" and 123 which shows that I didn't have a full grasp of the problem statement. Understanding a problem is very key to solving a problem so sometimes I'll need to simply, scrap everything, rinse and repeat, clean up the code I've written and start over with a fresh perspective. Go over the problem statement again and review the test cases as well.
function filter_list1(l) {
  let stringsToFilter = /[\D]/g;
  let arrWithDupes = l.filter(
    (a, index) => !a.toString().match(stringsToFilter)
  );
  let falsePositives = arrWithDupes.filter(
    (a, i) => arrWithDupes.indexOf(a) === i
  );
  return falsePositives.filter((a) => typeof a === "number");
}

filter_list([1, 2, "3", "4", 5, 5]);

//Other learnings from this kata:
//check if a string or number
//https://linuxhint.com/check-if-string-number-javascript/#:~:text=In%20JavaScript%2C%20a%20built%2Din,the%20string%20into%20a%20number.

//using multiple conditions in a filter method:
//https://sabe.io/blog/javascript-filter-array-multiple-conditions#:~:text=The%20filter%20method%20can%20be,20%20but%20younger%20than%2030.

//removing duplicate elements from an array:
//https://www.naukri.com/learning/articles/remove-duplicates-javascript-array/
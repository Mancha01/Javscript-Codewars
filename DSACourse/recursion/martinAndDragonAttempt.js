let odd = [];
const isNumberOdd = (arr) => {
  if (arr.length === 0) {
    console.log("all done");
    return;
  } else if (arr[arr.length - 1] % 2 !== 0) {
    odd.push(arr[arr.length - 1]);
  }
  console.log(arr);
  console.log(odd);

  arr.pop();
  isNumberOdd(arr);
};

isNumberOdd([2, 3, 5, 7, 10, 201, 343, 456, 109, 200, 455, 321, 399]);

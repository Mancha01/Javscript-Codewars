const removeDuplicates = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
  console.log(arr.indexOf(3));
};

removeDuplicates([1, 2, 3, 3, 3, 4]);

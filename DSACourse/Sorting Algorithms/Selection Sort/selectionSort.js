// LEGACY VERSION (non ES2015 syntax)
function sselectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      //SWAP!
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

// ES2015 VERSION
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([0, 2, 34, 22, 10, 19, 17]);

//my attempt:
//Selection sort: This is a sorting algorithm where we flag the first value as the minimum/lowest value at the beginning, then we
// iterate over the entire array to find the lowest value by comparing, when we are done iterating, if the first value is not equal
// to the lowest value, then we swap because that means we have found a value which is lower, if it's equal it means that the very
// first value was already the smallest so the min value never changed

function selectionSortAttempt(arr) {
  //an outer loop to give context to the iteration for the next smallest val on each iteration:
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    //an inner loop where we check each of the other values in the array to see if we can find one less than the current lowest
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      //Swap
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

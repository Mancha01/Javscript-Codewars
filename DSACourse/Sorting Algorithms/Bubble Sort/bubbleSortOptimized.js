// Bubble Sort Pattern:
// Compare adjacent elements, swap if needed.
// Repeat process until no more swaps occur.
// Start from beginning and end of array, move towards start.
// Factor in noSwaps optimization
// Return the sorted array.

// Optimized BubbleSort with noSwaps
function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

//   bubbleSort([8,1,2,3,4,5,6,7]);

//   -BubbleSort is an algorithm for sorting which features bubbling the largest value to the end, or some may say
// sinking the largest value to the bottom, this is done on every iteration till we get to a fully sorted result

//my attempt

function bubbleSort(arr) {
  //create an outer iteration which will give context to the inner one
  for (let i = arr.length; i > 0; i--) {
    //optimize for cases when the data is already sorted
    let noSwaps = true;
    //create an inner loop which takes it's context from the outer loop
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      //check if current value is larger than next value and if so then swap
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    //break if nothing was swapped meaning the array is already fully sorted
    if (noSwaps) break;
  }

  return arr;
}

bubbleSortTest([8, 1, 2, 3, 4, 5, 6, 7]);

//output: [1, 2, 3, 4, 5, 6, 7, 8]

//my preferrred:

// Helper function to swap elements
function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }

    if (noSwaps) {
      break;
    }
  }

  return arr;
}

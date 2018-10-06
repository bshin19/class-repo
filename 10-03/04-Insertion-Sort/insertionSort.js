// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Insertion Sort
// ================================================

// Attempt
// for (let i = 1; i < array.length - 1; i++) {
//   for (let j = 1; j < array.length -1; j++) {

//   }
// };

// Pseudocode
// for i ← 1 to length(A) - 1
// for j ← 1 to length(A) - 1j ← i

// while j > 0 and A[j - 1] > A[j]

// swap A[j] and A[j - 1]

// j ← j - 1

// end while

// end for

function insertionSort(items) {
  for (let i = 0; i < items.length; i++) {

    // store the initialized value of i so that it can be placed right
    let value = items[i];

    // loop through the items in the sorted array (the items from the current to the beginning)
    // copy each item to the next one
    for (let j = i - 1; j > -1 && items[j] > value; j--) {
      items[j + 1] = items[j];
    };

    // the last item we've reached should now hold the value of the currently sorted item
    items[j + 1] = value;
  };

  return items;
};

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(insertionSort(array).join(" "));

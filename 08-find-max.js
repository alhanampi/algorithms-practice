//Find the maximum value in an array - A function that takes an array input and returns the maximum value in the array. Here's an example implementation in JavaScript:

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

//2da opción:

function findMax(arr) {
  return Math.max(...arr);
}

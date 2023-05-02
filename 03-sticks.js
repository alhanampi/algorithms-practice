/*Given an array of integers representing the lengths of sticks, repeatedly perform the following operation until there are no sticks left:

Determine the length of the shortest stick.
Cut all the sticks by the length of the shortest stick.
Discard any sticks that are now too short to use.
Return an array of integers representing the number of sticks remaining after each iteration of the operation.

For example, given the array [1, 2, 3, 4, 3, 3, 2, 1], we can perform the following operations:

The shortest stick is 1, so we cut all the sticks by 1. The resulting array is [0, 1, 2, 3, 2, 2, 1, 0], so there are 8 sticks remaining.
The shortest stick is 1, so we cut all the sticks by 1. The resulting array is [0, 0, 1, 2, 1, 1, 0, 0], so there are 6 sticks remaining.
The shortest stick is 1, so we cut all the sticks by 1. The resulting array is [0, 0, 0, 1, 0, 0, 0, 0], so there are 4 sticks remaining.
The shortest stick is 1, so we cut all the sticks by 1. The resulting array is [0, 0, 0, 0, 0, 0, 0, 0], so there are 1 stick remaining.
Since there is only one stick left, we stop. The array of results is [8, 6, 4, 1].
*/

// opcion 1:
const values = [1, 2, 3, 4, 3, 3, 2, 1]

function cutTheSticks(arr) {
  let result = [];

  while (arr.length > 0) {
    result.push(arr.length);

    let min = Math.min(...arr);
    arr = arr.map((el) => el - min).filter((el) => el > 0);
  }

  return result;
}

console.log(cutTheSticks(values));


// opcion 2:
function cutTheSticks(arr) {
  if (arr.length === 0) {
    return [];
  }

  let result = [arr.length];
  let min = Math.min(...arr);
  let newArr = arr.map((el) => el - min).filter((el) => el > 0);

  return result.concat(cutTheSticks(newArr));
}

//opcion 3:
function cutTheSticks(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      let cutLength = arr[i];
      let cuts = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > 0) {
          arr[j] -= cutLength;
          cuts++;
        }
      }
      result.push(cuts);
    }
  }

  return result;
}
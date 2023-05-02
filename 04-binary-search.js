/*Binary Search - 
A search algorithm that works by repeatedly dividing the search interval in half. It requires the array to be sorted beforehand. */

const arr = [4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 58, 65, 80, 98];

//num es el número que queremos encontrar
const binary = (arr, num) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (arr[mid] === num) return mid;
    else if (arr[mid] < num) min = mid + 1;
    else max = mid - 1;
  }
  return -1;
};

console.log(binary(arr, 10)); //devuelve la posicion


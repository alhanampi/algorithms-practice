const values = [1, 2, 3, 4, 3, 3, 2, 1]

const sticks = (arr) => {
  let result = [];

  while (arr.length > 0) {
    result.push(arr.length);

    let minVal = Math.min(...arr);
    arr = arr.map((a) => a - minVal).filter((a) => a > 0);
  }

  return result;
};

console.log(sticks(values));
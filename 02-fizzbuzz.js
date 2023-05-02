// opcion 1:

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// opcion 2:

let i = 1;
while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz');
  } else if (i % 3 === 0) {
    console.log('fizz');
  } else if (i % 5 === 0) {
    console.log('buzz');
  } else {
    console.log(i);
  }
  i++;
}

//opcion 3:
Array.from({ length: 100 }, (_, i) => {
  const num = i + 1;
  let output = '';
  if (num % 3 === 0) output += 'fizz';
  if (num % 5 === 0) output += 'buzz';
  console.log(output || num);
});
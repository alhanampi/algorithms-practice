//A function that takes a string input and returns the string in reverse order. Here's an example implementation in JavaScript:

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

//2da opcion: 

const reverseString = (str) => str.split("").reverse().join("");

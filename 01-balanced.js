//option 1:

const isBalanced = '[()]{}{[()()]()}'

const checkBalance =(st) => {
  let total = [];
  const open = "({["
  const close = ")}]"

 for(let i = 0; i <= st.length; i++) {
   const char = st[i]

   if(open.includes(char)) {
     total.push(char);
   } else if(close.includes(char)) {
     let last = total.pop()
     let match = close[open.indexOf(last)]

     if(char !== match) {
       return false
     }
   } 
 }
 return total.length === 0
}

checkBalance(isBalanced)

//--------------------//

//option 2:

const isBalanced2 = (str) => {
  const brackets = ["()", "[]", "{}"];

  while (true) {
    const len = str.length;
    for (const bracket of brackets) {
      str = str.replace(bracket, "");
    }
    if (str.length === 0) {
      return true;
    }
    if (str.length === len) {
      return false;
    }
  }
}

isBalanced2(isBalanced)

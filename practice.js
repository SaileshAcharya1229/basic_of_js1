//write a code to reverse a number

// const reverser = () => {
//   const numm = prompt("enter any number");
//   const len = numm.length;
//   let newNum = "";
//   for (i = len - 1; i >= 0; i--) {
//     console.log(numm[i]);
//     newNum = newNum + numm[i];
//   }
//   return newNum;
// };
// const output = reverser();
// console.log(output);

//using different method.
// const reversor1 = (num) => {
//   const num1 = String(num).split("").reverse().join("");

//   console.log(num1);
//   return num1;
// };
// reversor1(32243);

//check the vowel number in sentence.

// const vowerChecker = (text) => {
//   const words = String(text);
//   const len = words.length;
//   console.log(words);
//   console.log(len);
//   count = 0;
//   for (i = 0; i <= len; i++) {
//     if (
//       words[i] === "a" ||
//       words[i] === "e" ||
//       words[i] === "i" ||
//       words[i] === "o" ||
//       words[i] === "u" ||
//       words[i] === "A" ||
//       words[i] === "E" ||
//       words[i] === "I" ||
//       words[i] === "O" ||
//       words[i] === "U"
//     ) {
//       count = count + 1;
//     }
//   }
//   console.log(`vowels number ${count}`);
// };
// vowerChecker(" i am a student");

//check the number whether it is prime or composite

const checker = (num) => {
  const num1 = Number(num);
  let isprime = true;
  for (i = 2; i <= num1 / 2; i++) {
    if (num1 % i === 0) {
      isprime = false;
      break;
    }
  }
  if (isprime) {
    console.log("the number is prime");
  } else {
    console.log("the number is composite");
  }
};
checker(11);

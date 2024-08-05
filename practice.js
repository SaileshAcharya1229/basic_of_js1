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

// const checker = (num) => {
//   const num1 = Number(num);
//   let isprime = true;
//   for (i = 2; i <= num1 / 2; i++) {
//     if (num1 % i === 0) {
//       isprime = false;
//       break;
//     }
//   }
//   if (isprime) {
//     console.log("the number is prime");
//   } else {
//     console.log("the number is composite");
//   }
// };
// checker(11);

// js function to get the number of occurence of each letter

// const occuranceChecker = (text) => {
//   //const len = text.length;
//   for (i = 0; i <= text.length; i++) {
//     count = 0;
//     console.log(text[i]);
//     for (j = 0; j < text.length; j++) {
//       if (text[i] === text[j] && i > j) {
//         break;
//       }
//       if (text[i] === text[j]) {
//         count++;
//       }
//     }
//     if (count > 0) {
//       console.log(`${text[i]} occurence ${count} times`);
//     }
//   }
//   return text;
// };
// occuranceChecker("helloiamsaileshacharya");

//js function to print unrepeatable words

// const occuranceChecker = (text) => {
//   //const len = text.length;
//   for (i = 0; i <= text.length; i++) {
//     count = 0;
//     console.log(text[i]);
//     for (j = 0; j < text.length; j++) {
//       if (text[i] === text[j] && i > j) {
//         break;
//       }
//       if (text[i] === text[j]) {
//         count++;
//       }
//     }
//     if (count === 1) {
//       console.log(`${text[i]} occurence ${count} times`);
//     }
//   }
//   return text;
// };
// occuranceChecker("helloiamsaileshacharya");

//write a function which can calculate square of number

// const findSquare = (num) => {
//   return num * num;
// };

// console.log(findSquare(3));

//calculate compound interest

// const CInterest = ({ p, t, r }) => {
//   const i = (p * t * r) / 100;
//   console.log(i);
// };
// CInterest({ p: 300, t: 2, r: 3 });

//js function which can convert full name to propercase.

// const ProperCase2 = (text) => {
//   const name = text.length;
//   let output = text[0].toUpperCase();

//   for (let i = 1; i < name; i++) {
//     if (text[i - 1] === " ") {
//       output += text[i].toUpperCase();
//     } else {
//       output += text[i];
//     }
//   }
//   console.log(output);
//   return output;
// };
// ProperCase2("sailesh kumar acharya");

//write a implict function that formats the number in comma format.

const numberFormat = (num) => {
  const len = num.toString();
  let count = 0;
  let output = "";

  for (let i = len.length - 1; i >= 0; i--) {
    output = len[i] + output;
    count++;
    if (count === 3 && i !== 0) {
      output = "," + output;
      count = 0;
    }
  }

  console.log(output);
  return output;
};
numberFormat(10000000000);

//another method
const numberFor = (num) => {
  return num.toLocaleString();
};
console.log(numberFor(1000000));

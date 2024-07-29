//functions are the main building block of any program
//2 core principles
//a.DRY(donot repeat yourself)
//b.SOC (separation of concern)

//2 ways to write function
//ES5

//write a sum function for adding 2 numbers

// function sum(a, b) {
//   const c = a + b;
//   return c;
// }
// //function call
// const result = sum(2, 4);
// console.log({ result });

const number = Number(prompt("enter any number"));
function square(a) {
  const c = a * a;
  return c;
}
const result = square(number);
console.log({ result });

//ES6

const squares = (x) => {
  return x * x;
};

const newAnswer = squares(5);
console.log({ newAnswer });

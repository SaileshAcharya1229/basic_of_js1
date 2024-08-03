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
// function call
// const result = sum(2, 4);
// console.log({ result });

// const number = Number(prompt("enter any number"));
// function square(a) {
//   const c = a * a;
//   return c;
// }
// const result = square(number);
// console.log({ result });

//ES6

const squares = (x) => {
  return x * x;
};

const newAnswer = squares(5);
console.log({ newAnswer });

// different types of functions

/*
1. default function
2.parameterized function
3.arrow function
4.closure function
5.IIFes function
6.recursive
7.inline 
8.anonymous 
9.callback function
10.pure function
11.implict
12. explict




*/

//ES5
function sum(a, b) {
  return a + b;
}

//ES6

const sums = (a, b) => {
  return a + b;
};

//default
// const defaultFunc = (names = "student") => {
//   console.log(`hello${names}`);
// };
// defaultFunc("sailesh ");
// defaultFunc();

// //parameterized function

// const parameterizedFunc = ({ a, b, c, d }) => {
//   console.log(a + b);
//   console.log(d - c);
// };
// parameterizedFunc({ a: 5, b: 3, d: 7, c: 8 });

//closure function

const mainCounter = () => {
  let count = 0;
  return () => {
    count = count + 1;
    count = 7;
    return count;
  };
};

const count1 = mainCounter();
const count2 = mainCounter();

console.log("hello1" + count1());
console.log("hello2" + count2());
console.log(count2());

//5.IIFEs(Immediately Invoked Functional Expression)

//Devops (Database seeding)

((name) => {
  console.log(`hello ${name}`);
})("sailesh");

//recursive function

//code for factorial
const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};
const fact = factorial(5);
console.log(fact);

//code for multiplication table

const multiplication = (num, i) => {
  if (i > 10) {
    return 0;
  }
  console.log(`${num}* ${i}= ${num * i}`);

  return multiplication(num, i + 1);
};
//const a = Number(prompt("enter any number"));
multiplication(4, 1);

//code for countdown

const countDown = (count) => {
  if (count === 0) {
    return 0;
  }
  console.log(count);
  return countDown(count - 1);
};

countDown(10);

// 7.Inline function
const test = () => {
  const d = 1;
  console.log({ d });
};
const d = "alpha";
function tests() {
  console.log("global func", { d });
}
test();
tests();

// 8. Anonymous function
// (a) => {
//   console.log(a);
// };

// 9. call back function
const child = (age) => {
  console.log({ age });
};
const parent = (AgeFunction) => {
  const age1 = 23;
  AgeFunction(age1);
};
parent(child);

//10.pure function

const uppercaseConvertor = (text1) => {
  console.log(text1.toUpperCase());
};
uppercaseConvertor("sailesh");

//11.Implicit function
const sum = (a, b) => a + b;
sum(3, 4);

//12.Explicit Function
const sum2 = (a, b) => {
  console.log(sums(a + b));
};
sum2(a, b);

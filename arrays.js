//collection of data

const arr1 = [];

const cars1 = [
  { name: "Honda", CC: "150" },
  { name: "Yamaha", CC: "250" },
  { name: "pulsar", CC: "220" },
];

//read
console.log(cars1[1]);
//to make copy of array

let cars = JSON.parse(JSON.stringify(cars1));
//let cars = [...cars1];

//update
const newcc = "190";
cars[0].CC = newcc;

console.log(cars[0]);

cars[0].model = "XL";
console.log(cars[0]);

//Delete

delete cars[1].CC;
console.log({ cars1 });

console.log({ cars });


//other important methods in array
//map,filter,reduce,slice,splice,some,every,includes,find,sort




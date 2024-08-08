//write a js function that sorts the age in ascending order.

const peoples = [
  { name: "raktim", age: 30 },
  { name: "anjali", age: 18 },
  { name: "paras", age: 25 },
];

const sortPeopleByAge = (arr) => {
  const comparefunction = (a, b) => a.age - b.age;
  arr.sort(comparefunction);
  return arr;
};
const sortarray = sortPeopleByAge(peoples);
console.log(sortarray);

//another one
const peoples1 = [
  { name: "raktim", age: 30 },
  { name: "anjali", age: 18 },
  { name: "paras", age: 25 },
];

const sortPeopleByAge1 = (arr) => {
  let len = peoples.length;
  for (i = 0; i < len; i++) {
    for (j = i + 1; j < len; j++) {
      if (peoples1[i].age > peoples1[j].age) {
        let temp = peoples1[i];
        peoples1[i] = peoples1[j];
        peoples1[j] = temp;
      }
    }
  }
  return peoples1;
};
console.log(sortPeopleByAge1());

//normal questions
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

//1.get an array of all names

//objects
//complex data type
//CRUD

//create

const sailesh = {
  name1: "Sailesh Acharya",
  class: "BCA",
  dob: "2000-11-12",
  gender: "male",
  hasValidLiscense: "true",
  phone: {
    home: 9845294776,
    personal: 9869220542,
  },
  age: function age() {
    return 2024 - Number(this.dob.split("-")[0]);
  },
  newAge: () => {
    return 2024 - Number(sailesh.dob.split("-")[0]);
  },
};

//Read

console.log(sailesh.name1, sailesh.dob);
console.log(sailesh.phone.home);

console.log(sailesh.age());
console.log(sailesh.newAge());

//Update

sailesh.name1 = "Sailesh Prasad Acharya";
console.log(sailesh);

//delete

delete sailesh.class;
console.log({ sailesh });

//spread Operator
//it is use to make duplicate of any objects to modify their data.

const { newAge, ...rest } = { sailesh };
console.log({ rest });

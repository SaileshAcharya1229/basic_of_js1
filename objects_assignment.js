// a. Find the value of the price property and if it is greater than 100,
//  discount it by 10%. If that’s not the case, discount it by 7%.
//  b. Update the object with the new property - discount and the
// corresponding value (7% or 10%) and the new price.

const product1 = {
  name1: "headphone",
  price: "101",
  isAvailable: "true",
  //discount: "7%",

  FinalAmount: () => {
    let op = product1.price;
    if (op > 100) {
      return (op = op - (op * 7) / 100);
    } else {
      return (op = op - (op * 10) / 100);
    }
  },
};

//read
console.log(product1);

console.log(product1.FinalAmount());

//update
product1.price = product1.FinalAmount();
product1.discount = "7%";
console.log(product1);
console.log(product1.price);

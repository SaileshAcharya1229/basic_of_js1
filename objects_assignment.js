// a. Find the value of the price property and if it is greater than 100,
//  discount it by 10%. If that’s not the case, discount it by 7%.
//  b. Update the object with the new property - discount and the
// corresponding value (7% or 10%) and the new price.

// const product1 = {
//   name1: "headphone",
//   price: "101",
//   isAvailable: "true",
//discount: "7%",

//   FinalAmount: () => {
//     let op = product1.price;
//     if (op > 100) {
//       return (op = op - (op * 7) / 100);
//     } else {
//       return (op = op - (op * 10) / 100);
//     }
//   },
// };

// //read
// console.log(product1);

// console.log(product1.FinalAmount());

// //update
// product1.price = product1.FinalAmount();
// product1.discount = "7%";
// console.log(product1);
// console.log(product1.price);

//3.Use given object and loop through
//  its properties and if it has property “discount”
//   print “Already discounted by…” and add
//   the value (how much was the discount).
//    In opposite case, do what you did in the previous
//    exercise: check the price, depending on it
//    (if it’s greater or lower than 100) add discount (10% or 7%)
//    and add the property “discount” to the object.

let prod = {
  name: "earpode",
  price: "100",
  discount: "7%",
};

const newProd1 = prod;
console.log({ newProd1 });
const userPrice = Number(prompt("enter the price of product"));
newProd1.price = userPrice;

const newProd2 = (newProd1) => {
  if (newProd1.price > 100) {
    newProd1.discount = "10%";
    const newprice = newProd1.price - newProd1.price * 0.1;
    newProd1.price = newprice;
  } else {
    newProd1.discount = "7%";
    const newprice2 = newProd1.price - (newProd1.price * 7) / 100;
    newProd1.price = newprice2;
  }
  return newProd1;
};

const finalOutput = newProd2(newProd1);
console.log(finalOutput);

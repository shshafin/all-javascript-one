// let= we can re assign but can not re declare
// const= we can not re assign & can not re declare

// let x = "shaila";
// x = "shafin";
// console.log(x);

// const y = 2;
// console.log(y);

// includes & slice
// const name = "shafin";
// let result = name.includes("i");
// console.log(result);

// const number = [1, 2, 34, 5, 6, 7, 5];
// let find = number.includes(6);
// var fu = number.slice(2, 5);
// console.log(fu);
// console.log(find);

// const hu = ["shafin", "shaila", "swarna", "sadnan"];
// let re = hu.includes("shafin");
// console.log(re);
// console.log(hu.slice(1, 3));

// splice
// const hu = ["shafin", "shaila", "swarna", "sadnan"];
// let result = hu.splice(1, 1);
// console.log(result);
// console.log(hu);

// add with splice
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let me=number.splice(5, 0, 11);
// console.log(number);

const name = [
  "shafin",
  "jakia",
  "afia",
  "shaila",
  "parul",
  "jahangir",
  "amena",
];

// includes
console.log(name.includes("afia"));
// slice
let result = name.slice(2, 4);
console.log(result);
// splice
// console.log(name.splice(2, 5));
// var some = name.splice(4, 0, "swarna");
var some = name.splice(3, 1, "swarna");
console.log(name);

// function number(array) {
//   let sum = 0;
//   for (let add of array) {
//     sum = sum + add;
//   }
//   console.log(sum);
// }

// const arr = [1, 2, 3, 4, 5];
// number(arr);

// function number(array) {
//   let sum = 0;
//   for (let add of array) {
//     sum = sum + add;
//   }
//   return sum;
// }
// const arr = [1, 2, 3, 4, 5];
// let total = number(arr);
// console.log(total);

// function number(array) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// const arr = [1, 2, 3, 4, 5];
// let total = number(arr);
// console.log(total);

// function number(array) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i += 2) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let total = number(arr);
// console.log(total);
// function number(array) {
//   let sum = 0;
//   for (let add of array) {
//     if (add % 2 == 1) {
//       sum = sum + add;
//     }
//   }
//   return sum;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let total = number(arr);
// console.log(total);

// function sumOfFunction(arr) {
//   let sum = 0;
//   for (let add of arr) {
//     if ( add%2 == 0) {
//       sum = sum + add;
//     }
//   }
//   console.log(sum);
// }
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// sumOfFunction(number);

// function element(arr){
// for(let item of arr){
//   console.log(item);
// }
// }
// const number=[1,2,3,4,5,6];
// element(number);

// function element(arr) {
//   for (let item of arr) {
//     // if (item % 2 == 1) {
//     //   console.log(item);
//     // }
//     if (item % 2 == 0) {
//       console.log(item);
//     }
//   }
// }
// const number = [1, 2, 3, 4, 5, 6];
// element(number);

// function all(add) {
//   const main =
//     "amar nam " +
//     add.name +
//     ", amar address " +
//     add.address +
//     ", amar boyosh " +
//     add.age;

//   console.log(main);
// }

// const info = {
//   name: "shafin",
//   address: "Mirpur-10",
//   age: 19,
// };

// all(info);

// function name(add) {
//   const sentence =
//     " amar baba " +
//     add.father +
//     "\n amar ma " +
//     add.mother +
//     "\n amar bonera " +
//     add.sister +
//     "\n amar valobasha " +
//     add.love;

//   return sentence;
// }

// const intro = {
//   father: "Jahangir",
//   mother: "Parul",
//   sister: "Afia jakia",
//   love: "Swarna",
// };

// console.log(name(intro));

// 5!

// const prompt = require("prompt-sync")();
// let number = prompt("enter a number ");

// let sum = 1;
// for (let i = number; i >= 1; i--) {
//   sum = sum * i;
// }
// console.log(sum);

// const prompt = require("prompt-sync")();

// let number = prompt("enter a number:- ");
// let sum = 1;
// for (let i = number; i >= 1; i--) {
//   sum = sum * i;
// }
// console.log(sum);

// function factorial(number) {
//   let sum = 1;
//   for (let i = number; i >= 1; i--) {
//     sum = sum * i;
//   }
//   return sum;
// }

// const prompt = require("prompt-sync")();
// let x = prompt("enter a number:- ");

// console.log(factorial(x));

// function main(x) {
//   let largest = x[0];
//   for (let i = 1; i < x.length; i++) {
//     if (x[1] > largest) {
//       largest=x[1];
//     }
//     elseif(){}

//   }
//   console.log(element);
// }

// const array = [7, 19, 8, 28, 29];

// let number = 5;

// let sum = 1;
// for (let i = number; i >= 1; i--) {
//   sum = sum * i;
// }
// console.log(sum);

// function factorial(number) {
//   let sum = 1;
//   for (let i = number; i >= 1; i--) {
//     sum = sum * i;
//   }
//   return sum;
// }

// console.log(factorial(5));

// function number(x) {
//   let largest = x[0];

//   for (let i = 1; i < x.length; i++) {
//     const main = x[i];
//     if (main > largest) {
//       largest = main;
//     }
//   }
//   return largest;
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(number(array));

// function number(x) {
//   let smallest = x[0];
//   for (let i = 1; i < x.length; i++) {
//     const main = x[i];
//     if (main < smallest) {
//       smallest = main;
//     }
//   }
//   return smallest;
// }
// const array = [18, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(number(array));

// function name(friend) {
//   let biggest = friend[0];
//   for (let i = 1; i < friend.length; i++) {
//     if (friend[i].length > biggest.length) {
//       biggest = friend[i];
//     }
//   }
//   return biggest;
// }

// const array = [
//   "shafin",
//   "swarna",
//   "parul",
//   "afia",
//   "jakia",
//   "amena",
//   "jahangir",
// ];

// console.log(name(array));

// function namelist(friend) {
//   let largest = friend[0];

//   for (let i = 1; i < friend.length; i++) {
//     const main = friend[i];
//     if (main.length > largest.length) {
//       largest = main;
//     }
//   }
//   return largest;
// }

// const array = [
//   "shafin",
//   "swarna",
//   "parul",
//   "afia",
//   "jakia",
//   "amena",
//   "jahangir",
// ];

// console.log(namelist(array));

// function list(number) {
//   let largest = number[0];
//   for (let i = 0; i < number.length; i++) {
//     const main = number[i];
//     if (main > largest) {
//       largest = main;
//     }
//   }
//   return largest;
// }

// const array = [1, 2, 3, 4, 5, 6, 78, 9];
// console.log(list(array));

var age = "19";

// (==) means only checking value //
if (age == 19) {
  console.log("equal to 19");
} else {
  console.log("not equal to 19");
}

// (===) means checking type of variable //
if (age === 19) {
  console.log("equal to 19");
} else {
  console.log("not equal to 19");
}

// x choto y boro hole x er value e ashbe

var x = 5;
var y = 10;
var remain = x % y;
console.log(remain);

//  || && sign

var x = true;
var y = false;

if (x == true || y == true) {
  console.log("baire jabo");
}
if (x == true && y == true) {
  console.log("baire jabo");
} else {
  console.log("ghumaw");
}

// bus-50 car-11 rickshaw-70tk
var people = 2829;
var peopleForBus = people % 50; //29
var peopleForCar = peopleForBus % 11; //7
var totalFair = peopleForCar * 70;
// console.log(peopleForBus);
// console.log(peopleForCar);
console.log(totalFair);

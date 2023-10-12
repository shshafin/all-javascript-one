// while loop
var i = 1;
while (i <= 10) {
  console.log("i miss you", i);
  i++;
}

// for loop
for (var x = 1; x <= 10; x++) {
  console.log("Allah i need your support", x);
}

var arr = [1, 2, 3, 4, 5];

// break
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (arr[i] == 4) {
    break;
  }
}
// var i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// continue
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == 4) {
//         continue;
//     }
//     console.log(arr[i]);
//   }

for (var i = 0; i < arr.length; i++) {
  if (arr[i] == 3) {
    continue;
  }
  console.log(arr[i]);
}

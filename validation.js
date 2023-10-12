// function number(a, b) {
//   if (typeof a != "number" || typeof b != "number") {
//     return "error";
//   }
//   return a + b;
// }
// console.log(number(28, "29"));

// function name(a, b) {
//   if (typeof a != "string" || typeof b != "string") {
//     return "please correct the input";
//   }
//   return a + " " + b;
// }
// console.log(name("shafin", "shaila"));

// function number(call) {
//   if (!Array.isArray(call)) {
//     return "please provide an array";
//   }

//   let sum = 0;
//   for (let i of call) {
//     sum += i;
//   }
//   return sum;
// }
// const x = [1, 2, 3, 4, 5];
// console.log(number("hu"));

// function findVowel(s) {
//   if (typeof s != "string") {
//     return "please input string";
//   }
//   let vowel = 0;
//   let consonant = 0;
//   let space = 0;
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     if (
//       char == "a" ||
//       char == "e" ||
//       char == "i" ||
//       char == "o" ||
//       char == "u"
//     ) {
//       vowel++;
//     } else if (char != " ") {
//       consonant++;
//     } else {
//       space++;
//     }
//   }
//   let obj = {
//     vowelCount: vowel,
//     consonantCount: consonant,
//     spaceCount: space,
//   };
//   return obj;
// }

// const sentence = "i love you swarna";
// console.log(findVowel(sentence));

// function number(item) {
//   if (!Array.isArray(item)) {
//     return "please provide an array";
//   }

//   let sum = 0;
//   for (let i of item) {
//     sum += i;
//   }
//   // for (let i = 0; i <= item.length; i++) {
//   //   sum = sum + i;
//   // }
//   return sum;
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(number(7));

function findLetter(item) {
  if (typeof item != "string") {
    return "please provide a string";
  }

  let vowel = 0;
  let consonant = 0;
  let space = 0;
  for (let i = 0; i < item.length; i++) {
    let char = item[i].toLowerCase();
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      vowel++;
    } else if (char != " ") {
      consonant++;
    } else {
      space++;
    }
  }
  const obj = {
    vowelCount: vowel,
    consonantCount: consonant,
    spaceCount: space,
  };
  return obj;
}

const sentence = "I love yOu swarna";
console.log(findLetter(sentence));

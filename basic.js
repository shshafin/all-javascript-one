// int
var x = 25.33;
var y = parseInt(x);
console.log(y);

// float
var x = 15.34;
var y = parseFloat(x);
console.log(parseInt(y));

// type of
var x = "18.97";
var y = 18.97;
var z = true;
console.log(typeof x, typeof y, typeof z);

// to fixed
var number = 25.3938;
var fix = number.toFixed(2);
var flo = parseFloat(fix);
console.log(flo);
console.log(typeof flo);

// Numbers

const myNumber = 42;
const myFloat = 42.0;

const myString = "42";

console.log(myNumber);
console.log(myFloat);

console.log(myNumber === myFloat);

console.log(myString + 3);
console.log(Number(myString) + 3);

console.log(Number(true) + 1);

// The Number.isInteger() method determines whether the passed value is an integer.
console.log("Number.isInteger()")
console.log(Number.isInteger(myString)); // false
console.log(Number.isInteger(2)); // true
console.log(Number.isInteger("32")); // false


// The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.
console.log("Number.parseFloat()");
console.log(Number.parseFloat("42.123abc"));
console.log(Number.parseFloat("42.123abc").toFixed(2));

console.log((42.725453).toFixed(2));

// The Number.parseInt() method parse a string argument and returns an integer
console.log(Number.parseInt("44.21de2kjk").toFixed(2))

// The toString() method returns a string representing the number.
console.log("toString()")
console.log(typeof "433.43dfdf".toString())

console.log(typeof Number.parseFloat("6734.34hjjiui"))

// Chaining = Using several methods chained together 
console.log(typeof Number.parseFloat("4.2356abc").toFixed(2).toString());


// NaN = acronym for Not a Number
console.log(Number("asbc"));
// The Number.isNaN() Mmethod determines whether the passed value is NaN AND ITS type is Number
console.log("isNaN()")
console.log(Number.isNaN("asbc"));
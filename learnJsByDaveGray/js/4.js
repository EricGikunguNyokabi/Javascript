// Math Methods and properties

console.log(Math.PI);
console.log(Math.trunc(Math.PI));

console.log(Math.round(3.5));
console.log(Math.ceil(3.4)); // ceiling, round-up
console.log(Math.floor(3.9)); // floor, round-down

// Power method
console.log(Math.pow(3,4));

console.log(Math.min(3,4,7,5,23));
console.log(Math.max(3,4,7,5,23));

// Use Math.floor() not Math.ceil() for generating random number from 1 to 10
// Math.ceil(Math.random()*10) // has a chance of resulting in Zero
// Math.floor(Math.random()*10)  // is the way to go 
console.log(Math.floor(Math.random() * 10) + 1 );
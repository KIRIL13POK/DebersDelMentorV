" use strict"
console.log(1 === 1);
// expected output: true

console.log('hello' === 'hello');
// expected output: true

console.log('1' ===  1);
// expected output: false

console.log(0 === false);
// expected output: false


console.log("hello" === "hello");   // true
console.log("hello" === "hola");    // false

console.log(3 === 3);               // true
console.log(3 === 4);               // false

console.log(true === true);         // true
console.log(true === false);        // false

console.log(null === null);         // true
console.log("3" === 3);           // false

console.log(true === 1);          // false

console.log(null === undefined);  // false
/*
const object1 = {
    name: "hello"
  }
  
  const object2 = {
    name: "hello"
  }
  
  console.log(object1 === object2);  // false
  console.log(object1 === object1);  // true */
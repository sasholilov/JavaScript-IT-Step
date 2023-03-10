// ECMAScript 6 introduces the `let` and `const` keywords for variable declarations.
// `let` variables are like `var` variables, but they are block-scoped (as opposed to function-scoped).
// `const` variables are like `let` variables, but their value cannot be reassigned after they are declared.

let message = "Hello, world!";
const MAX_MESSAGE_LENGTH = 100;

// ECMAScript 6 introduces arrow functions, which are a shorthand for declaring anonymous functions.
// This example defines a function that takes a single argument `n` and returns its square.
const square = (n) => n * n;

// ECMAScript 6 adds support for template literals, which allow you to include expressions within string literals.
console.log(`The square of 5 is ${square(5)}.`);

// ECMAScript 6 introduces destructuring assignment, which allows you to extract values from arrays and objects
// and assign them to variables in a single line of code.
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c); // 1, 2, 3

const obj = {x: 1, y: 2, z: 3};
const {x: xVal, y: yVal, z: zVal} = obj;
console.log(xVal, yVal, zVal); // 1, 2, 3

// ECMAScript 6 also provides a new way to define object literals using the shorthand notation
const x = 1,
  y = 2,
  z = 3;
const objNew = {x, y, z};
console.log(objNew); // {x: 1, y: 2, z: 3}

// ECMAScript 6 adds support for classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person = new Person("John", 30);
person.sayHello(); // Hello, my name is John

// ECMAScript 6 adds new method like for of loop, find, findIndex, includes
// for of loop
for (let val of [1, 2, 3]) {
  console.log(val);
}
// find
console.log([1, 2, 3].find((val) => val > 1));
// findIndex
console.log([1, 2, 3].findIndex((val) => val > 1));
// includes
console.log([1, 2, 3].includes(2));

// ECMAScript 6 introduces default parameters for functions.
// If a value is not provided for a parameter with a default value, the default value will be used.

function greet(name = "stranger") {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, stranger!
greet("John"); // Hello, John!

// ECMAScript 6 adds support for the spread operator, which allows you to spread the elements of an array or object
// into a new array or object.

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

const obj1 = {a: 1, b: 2};
const obj2 = {...obj1, c: 3};
console.log(obj2); // {a: 1, b: 2, c: 3}

// ECMAScript 6 includes a number of new methods for working with arrays, including `map`, `filter`, and `reduce`.
// `map` applies a function to each element of an array and returns a new array with the results.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((x) => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// `filter` applies a function to each element of an array and returns a new array with only the elements
// for which the function returned `true`.
const even = numbers.filter((x) => x % 2 === 0);
console.log(even); // [2, 4]

// `reduce` applies a function to each element of an array, accumulating the results in a single value.
const sum = numbers.reduce((total, x) => total + x);
console.log(sum); // 15

// ECMAScript 6 introduced the `Promise` object to handle asynchronous operations
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve("Promise resolved!");
    } else {
      reject("Promise rejected!");
    }
  }, 1000);
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// ECMAScript 6 introduce `Symbol` which is a new data type that is used to create unique and immutable
// identifiers for objects.
const sym = Symbol("mySymbol");
console.log(typeof sym); // symbol
console.log(sym.toString()); // Symbol(mySymbol)

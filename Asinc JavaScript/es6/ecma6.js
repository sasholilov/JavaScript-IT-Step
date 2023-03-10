// Constants
const pi = 3.14;

// let keyword allows you to re-assign value inside a block but not outside
let x = 5;
if (x > 0) {
  let x = 10;
  console.log(x); // Output: 10
}
console.log(x); // Output: 5

// Arrow functions
let square = (x) => x * x;
console.log(square(5)); // Output: 25

// Enhanced object literals
let name = "John";
let age = 30;
let person = {name, age};
console.log(person); // Output: {name: "John", age: 30}

// Template literals
//let name = "John";
//let age = 30;
let message = `Hello, ${name}! You are ${age} years old.`;
console.log(message); // Output: "Hello, John! You are 30 years old."

// Destructuring assignment
let [first, second, third] = ["one", "two", "three"];
console.log(first); // Output: "one"

// The spread operator
let numbers1 = [1, 2, 3];
let newNumbers = [0, ...numbers1, 4];
console.log(newNumbers); // Output: [0, 1, 2, 3, 4]

// Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

let john = new Person("John", 30);
console.log(john.getGreeting());
// Output: "Hello, my name is John and I am 30 years old."

// Inheritance
class Student extends Person {
  constructor(name, age, field) {
    super(name, age);
    this.field = field;
  }

  getField() {
    return this.field;
  }
}
let alice = new Student("Alice", 22, "Computer Science");
console.log(alice.getField()); // Output: "Computer Science"

// Modules
import {square} from "./math.js";
console.log(square(5)); // Output: 25

function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5)); // Output: 5
console.log(multiply(5, 2)); // Output: 10

// Promises
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hello, world!"), 1000);
});
promise.then((message) => console.log(message)); // Output: "Hello, world!"

// Asynchronous functions
async function asyncFunction() {
  let message = await promise;
  console.log(message); // Output: "Hello, world!"
}
asyncFunction();

//Set
let numbers = [1, 2, 3];
let numberSet = new Set(numbers);
console.log(numberSet); // Output: Set { 1, 2, 3 }
//Map
let squares = numbers.map((x) => x * x);
console.log(squares); // Output: [1, 4, 9]

// Iteration and For-Of Loop
let myArray = [1, 2, 3];
for (let value of myArray) {
  console.log(value);
}
// Output:
// 1
// 2
// 3

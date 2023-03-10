// JSON stands for JavaScript Object Notation and is a lightweight data interchange format
// It is easy for humans to read and write and easy for machines to parse and generate

// JSON can be represented in JavaScript as an object, array, or value

// Here is an example of a JSON object:
const jsonObject = {
  name: "John",
  age: 30,
  city: "New York",
};

// You can access the properties of a JSON object using dot notation or bracket notation:
console.log(jsonObject.name); // "John"
console.log(jsonObject["age"]); // 30

// Here is an example of a JSON array:
const jsonArray = [
  {
    name: "John",
    age: 30,
    city: "New York",
  },
  {
    name: "Jane",
    age: 25,
    city: "Chicago",
  },
];

// You can access the elements of a JSON array using array notation:
console.log(jsonArray[0].name); // "John"
console.log(jsonArray[1].age); // 25

// You can convert a JavaScript object or array to a JSON string using the JSON.stringify() function:
const jsonString = JSON.stringify(jsonObject);
console.log(jsonString); // '{"name":"John","age":30,"city":"New York"}'

// You can convert a JSON string to a JavaScript object or array using the JSON.parse() function:
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject); // {name: "John", age: 30, city: "New York"}
let data = data.name;
// You can use the fetch() function to retrieve JSON data from an API or other source:
const API_URL = "https://my-api.com/endpoint/mitko";
async function request() {
  try {
    const response = await fetch(API_URL);
    button.disable = true;
    const jsonData = await response.json();

    console.log(jsonData); // JSON data returned by the API
  } catch (error) {
    console.error(error); // Handle any errors that occur during the fetch
  }
}

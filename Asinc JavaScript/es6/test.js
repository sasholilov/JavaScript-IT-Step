// A promise is an object that represents the eventual completion or failure of an asynchronous operation
// A promise has three states: pending, fulfilled, or rejected

// You can create a promise using the Promise constructor:
const promise = new Promise((resolve, reject) => {
  // The resolve and reject functions are used to change the state of the promise
  // You can use setTimeout to simulate an async operation
  setTimeout(() => {
    // After the async operation is complete, you can call resolve to fulfill the promise
    resolve("Async operation complete");
  }, 10000);
});
// You can use the then() method to specify what should happen when the promise is fulfilled:
promise.then((result) => {
  console.log(result); // "Async operation complete"
});

// You can use the catch() method to specify what should happen when the promise is rejected:
promise.catch((error) => {
  console.error(error); // Handle the error
});

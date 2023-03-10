// A promise is an object that represents the eventual completion or failure of an asynchronous operation
// A promise has three states: pending, fulfilled, or rejected

// You can create a promise using the Promise constructor:
const promise = new Promise((resolve, reject) => {
  // The resolve and reject functions are used to change the state of the promise
  // You can use setTimeout to simulate an async operation
  setTimeout(() => {
    // After the async operation is complete, you can call resolve to fulfill the promise
    resolve("Async operation complete");
  }, 2000);
});

// You can use the then() method to specify what should happen when the promise is fulfilled:
promise.then((result) => {
  console.log(result); // "Async operation complete"
});

// You can use the catch() method to specify what should happen when the promise is rejected:
promise.catch((error) => {
  console.error(error); // Handle the error
});

// You can chain then() and catch() methods to handle both fulfilled and rejected states:
promise
  .then((result) => {
    console.log(result); // "Async operation complete"
  })
  .catch((error) => {
    console.error(error); // Handle the error
  });

// You can use the Promise.all() method to wait for multiple promises to complete:
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Async operation 1 complete");
  }, 1000);
});
const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Async operation 2 complete");
  }, 2000);
});
const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Async operation 3 complete");
  }, 3000);
});

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // ["Async operation 1 complete", "Async operation 2 complete", "Async operation 3 complete"]
  })
  .catch((error) => {
    console.error(error); // Handle the error
  });

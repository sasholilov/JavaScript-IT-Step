const promise = new Promise((resolve, reject) => {
  // The resolve and reject functions are used to change the state of the promise
  // You can use setTimeout to simulate an async operation
  console.log("start");
  setTimeout(() => {
    // After the async operation is complete, you can call resolve to fulfill the promise
    console.log("Async operation complete");
  }, 5000);
  console.log("next");
});

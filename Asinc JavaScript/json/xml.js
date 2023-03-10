function makeAjaxRequest() {
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Open a new connection, using the GET request on the URL endpoint
  xhr.open("GET", "https://example.com/data", true);

  // Send the request
  xhr.send();

  // This will be called after the request is completed
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Parse the received JSON data
      const data = JSON.parse(xhr.responseText);
    }
  };
}

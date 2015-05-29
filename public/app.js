
// Function that is bound to the button, and sends a post request to our backend.
function sendTweet() {

  // set the output content using jQuery
  $("#demo").html("tweet tweet");

  // send post request with empty body, and wire up done and fail handler functions
  $.post("/tweet").done(successCallback).fail(failureCallback);
}

/*
 * Success callback function. Separated out for clarity.
 */
function successCallback(data, status) {
  alert("Data: " + data + "\nStatus: " + status);
}

/*
 * Failure callback function. Separated out for clarity.
 */
function failureCallback(xhr) {
  alert("Failure: " + xhr.responseText + "\nStatus: " + xhr.status);
}

// require express module
var express = require("express");

// require nicer http request module
var request = require("request");

// create a new instance of an express app
var app = express();

// variable to hold our api key
var apiKey = "B9C9BE260BU87J8D";

// Create a handler function that listens for POST requests to /tweet and
// then creates an outgoing http request to thingspeak behind the scenes
app.post("/tweet", function(req, res) {
  var body = { api_key: apiKey, status: "Hello backend" };

  // send the request out to thingspeak
  request.post("http://api.thingspeak.com/apps/thingtweet/1/statuses/update", { form: body }, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      // if everything good, say ok
      res.send("OK");
    } else {
      // return error back to browser
      res.status(response.statusCode).send(response.body);
    }
  });

});

// Tell express to server our index.html file from the public folder
app.use(express.static("public"));

// Boot the server instance listening on port 3000
var server = app.listen(3000, function() {
  var port = server.address().port;

  console.log("Started server listening at http://localhost:%s", port);
});

var express = require("express");
var bodyParser = require("body-parser");
const path = require("path");

var app = express();


var PORT = 8080;

const tables = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.post("/api/view", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html

  console.log(newReservation);
  console.log(tables);
  tables.push(newReservation);
  console.log(tables);
  res.json(newReservation);
});



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
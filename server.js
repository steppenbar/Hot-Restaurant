var express = require("express");
var bodyParser = require("body-parser");
const path = require("path");

var app = express();


var PORT = 8080;


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

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
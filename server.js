var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var customers = [
    {
    custName: "",
    phoneNum: "",
    custEmail: "",
    custID: ""
    }
]


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, ""));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, ""));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, ""));
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

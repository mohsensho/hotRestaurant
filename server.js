var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var customerTables = [];

var waitList = [];


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/api/reservations", function(req, res) {
    // console.log('res get');
    // console.log(res);
    // console.log("log: "+req.body.reserve_name);

    var newReservation = req.body;
    console.log(newReservation);
    customerTables.push(newReservation);
    
    
    res.sendFile(path.join(__dirname, "tables.html"));
    res.end("blah!!");
  }); 
  app.post("/api/reservations", function(req, res) {
    console.log('res post');
    res.end("post done");
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
    res.json(newReservation);
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


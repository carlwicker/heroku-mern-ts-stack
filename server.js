const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Config Environmental Variables
require("dotenv").config();

// Test End Point
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log("Listening on Port: " + port));

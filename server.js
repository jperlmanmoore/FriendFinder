const http = require("http");
const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.Port || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const fs = require("fs");
const port = 5000;

app.use(express.static(path.join(__dirname, "build")));
app.use(cors());

app.get("/week1", (req, res) => {
  res.sendFile(__dirname + "/build/" + "index.html");
});

app.get("/week2", (req, res) => {
  res.sendFile(__dirname + "/build/" + "index.html");
});

app.get("/week3", (req, res) => {
  res.sendFile(__dirname + "/build/" + "index.html");
});

app.listen(port);

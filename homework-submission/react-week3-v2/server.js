const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, "build")));
app.use(cors());

app.listen(port, console.log("Hey you!"));

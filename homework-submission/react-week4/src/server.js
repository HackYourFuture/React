const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.static(__dirname + "build"));
app.use(cors());

app.listen(port, console.log("Hey you!"));

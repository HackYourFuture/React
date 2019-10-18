const express = require("express");
const app = express();
const path = require("path");
const port = 3001;
app.use(express.static(path.join(__dirname, "../todo-app/build/")));
console.log(path.join(__dirname, "../todo-app/build/static/"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../todo-app/build/index.html"));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

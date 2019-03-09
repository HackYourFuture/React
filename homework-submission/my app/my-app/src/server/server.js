
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`listining on port ${port}`)
});
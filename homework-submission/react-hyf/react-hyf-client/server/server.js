const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '../build')));

app.listen(port, err => {
  if (err) return console.log(err);
  console.log(`Server started on http://localhost:${port}`);
});

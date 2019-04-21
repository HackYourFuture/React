const express = require('express');
const path = require('path');
const BUILD = './client/build';

const PORT = 8000;

const app = express();
app.use(express.static(path.join(__dirname, BUILD)));

app.get('/', (req, res) => {
  res.json("I'm working...");
});

app.get('/', (req, res) => {
  res.sendFile(express.static(path.join(__dirname, BUILD, 'index.html')));
});

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`This app is listening on: http://localhost:${PORT}`);
});

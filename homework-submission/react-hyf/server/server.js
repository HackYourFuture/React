const express = require('express');
const path = require('path');
const buildFolder = '../client/build';
const app = express();

app.use(express.static(path.join(__dirname, buildFolder)));

app.get('/', (req, res) => {
  res.sendFile(express.static(path.join(__dirname, buildFolder, 'index.html')));
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Listened on port ${PORT}`);
});

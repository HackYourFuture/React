const express = require('express');
const path = require('path');
const buildFolder = '../react-hyf-client/build';
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, buildFolder)));

app.get('/', (req, res) => {
  res.sendFile(express.static(path.join(__dirname, buildFolder, 'index.html')));
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Listened on port ${PORT}`);
});

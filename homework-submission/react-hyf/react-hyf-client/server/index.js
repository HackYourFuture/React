const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const port = 5000;

app.use(express.json());

app.use(cors());

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

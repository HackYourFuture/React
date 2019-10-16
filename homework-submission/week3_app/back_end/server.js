const express = require('express');
const path = require('path');
const stepsData = require('./stepsData');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../build')));

app.get('/steps', function(req, res) {
  res.json(stepsData);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`The server is listening to: http://localhost:${port}/`));

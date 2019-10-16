const express = require('express');
const stepsData = require('./stepsData');
const app = express();

app.use(express.json());

app.get('/', function(req, res, next) {
  res.json({ greeting: 'Hi EX' });
});

app.get('/steps', function(req, res, next) {
  res.json(stepsData);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`The server is listening to: http://localhost:${port}/`));

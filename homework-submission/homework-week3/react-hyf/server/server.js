const express = require('express');
const app = express();

app.use(express.static('./../react-hyf-client/build'));

app.get('/', function(req, res) {
  res.sendFile('./../react-hyf-client/build/index.html');
});

app.listen(1234);

const express = require('express');
const app = express();
var path = require('path');

const port = 1234;
app.use(express.static(path.join('./../react-hyf-client', 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join('./../react-hyf-client', 'build', 'index.html'));
});

app.listen(port, () => console.log(`server listening on port ${port}!`));

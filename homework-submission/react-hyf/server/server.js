const express = require('express');
const app = express();
const port = 1234;

app.use(express.static('./../react-hyf-client/build'));

app.get('/', function(req, res) {
  res.sendFile('./../react-hyf-client/build/index.html');
});

app.listen(port, () => console.log(`server listening on port ${port}!`));

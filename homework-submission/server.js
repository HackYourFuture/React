const express = require('express');
const app = express();

const port = 3000;

app.use('/', express.static('.'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(` Listening to port number ${port}`);
});

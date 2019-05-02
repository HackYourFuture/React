const express = require('express');
const app = express();
const path = require('path');

const port = 1234;

app.use(express.static(path.resolve(__dirname, '../react-hyf-client', 'build')));

app.get('/index', function(req, res) {
  res.sendFile(path.join(__dirname, '../react-hyf-client', 'build', 'index.html'));
});

app.listen(port, () => console.log(`server listening on port ${port}!`));

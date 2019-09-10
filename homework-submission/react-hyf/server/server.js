const express = require('express');
const app = express();

const path = require('path');
const root = '../react-hyf-client/build';

app.use(express.static(path.join(__dirname, root)));

app.get('/', (req, res) => {
  let file = path.join(__dirname, root);
  res.sendFile(path.join(file));
});

const port = 3333;
app.listen(port, () => {
  console.log('server is listening to ' + port);
});

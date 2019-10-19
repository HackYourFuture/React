var path = require('path');

const express = require('express');
const app = express();
const port = 8000;
app.use(express.static(path.join(__dirname, '../react-hyf-client/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../react-hyf-client/public/index.html'));
  // console.log(__dirname);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

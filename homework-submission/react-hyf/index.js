const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

app.use(express.static(path.join(__dirname, '/../react-hyf/build')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/../react-hyf/public', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

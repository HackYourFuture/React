const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'react-hyf-client', 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'react-hyf-client', 'build', 'index.html'));
});

app.listen(5000, () => console.log(' listening on port 5000!'));

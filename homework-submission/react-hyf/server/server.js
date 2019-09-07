const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../react-hyf-client/build')));
app.get('/', (req, res) => {
  res.sendFile(__dirname, '../react-hyf-client/build', 'index.html');
});

app.listen(3030, () => console.log('application is listening on port 3030'));

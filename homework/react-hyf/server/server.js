const path = require('path');
const express = require('express');
const app = express();
var cors = require('cors');
const port = 4000;
app.use(express.static(path.join(__dirname, '../build')));
app.use(cors());
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build','index.html'));
  console.log('mustafa');
});
app.listen(port, () => {console.log(`App listening on port ${port}!`);});

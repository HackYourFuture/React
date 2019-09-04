'use strict';

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const root = '../react-hyf-client/build';

app.use(express.static(path.join(__dirname, root)));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, root, 'index.html'));
});

'use strict';

const express = require('express');
const path = require('path');

const app = express();
const port = 5000;
const root = '../react-hyf-client/build';

app.use(express.static(path.join(__dirname, root)));

app.get('/', async (request, response) => {
  response.sendFile(path.join(__dirname, root, 'index.html'));
});

app.listen(port, () => console.log(`Server is listening on port ${port}!`));

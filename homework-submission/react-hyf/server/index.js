const express = require('express');
const path = require('path');
const app = express();

const source = '../client-side-routing/build';

app.use(express.static(path.join(__dirname, source)));

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

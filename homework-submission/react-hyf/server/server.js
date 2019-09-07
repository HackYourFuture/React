const express = require('express');
const app = express();

const path = '../react-hyf-client/week3/build';
app.use(express.static(path));

app.get('/', (request, response) => {
  response.sendFile(path / index, event => {
    console.log(event);
  });
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

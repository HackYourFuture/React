const express = require('express');

const app = express();

app.use(express.static('../react-hyf-client/build'));

app.get('/', async (req, res) => {
  await res.sendfile('index.html', error => {
    throw error;
  });
  res.end();
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});

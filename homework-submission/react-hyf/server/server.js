const express = require('express');

const app = express();

app.use(express.static('../react-hyf-client/build'));

app.get('/', (req, res) => {
  res.sendFile('../react-hyf-client/build/index', e => {
    console.log(e);
  });
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Listening Port Number: ${PORT}`);
});

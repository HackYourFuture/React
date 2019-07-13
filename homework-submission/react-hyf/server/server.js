const express = require('express');

const app = express();

app.use(express.static('../react-hyf-client/build'));

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});

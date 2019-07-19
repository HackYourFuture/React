const express = require('express');
const axios = require('axios');

// to load .env files
require('dotenv').config();

const app = express();
app.use(express.static('../react-hyf-client/build'));

app.post('/', (req, res) => {
  const URL = 'https://jsonplaceholder.typicode.com/users';
  axios(URL)
    .then(users => {
      res.status(200).send(users.data);
    })
    .catch(error => {
      res.status(500).send({ error: 'sorry' });
    });
});

//process.env.PORT is assigned in .env file as 7000
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

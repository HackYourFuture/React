const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const baseURL = `https://uinames.com/api/?amount=20`;

app.get('/users', (req, res) => {
  axios(baseURL)
    .then(data => {
      res.status(200).send(data.data);
      res.json(data.data);
    })
    .catch(e => {
      res.status(500).send({ error: 'sorry something went wrong' });
    });
});

// test route to react page
app.get('/all_users', (req, res) => {
  res.status(200).send(data.data);
  res.json(data.data);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});

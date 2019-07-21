const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
require('dotenv').config()

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const API_KEY = process.env.API_KEY;

app.post('/weather', (req, res) => {
  const cityName = req.body.cityName;

  if (!cityName) {
    res.status(500).send({ error: `please give a city name ${cityName}` });
  }

  const baseURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;

  axios(baseURL)
    .then(apiRes => {
      res.status(200).send(apiRes.data);
    })
    .catch(e => {
      res.status(500).send({ error: 'sorry something went wrong' });
    });
});

const PORT = 9000;

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
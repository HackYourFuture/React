const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const API_KEY = '6c47007e51949c06dfa37a8fe2f608d4';
// GET URL ---
// city name ---
// weather api ---
// send json
// if error send 500

app.get('/weather', (req, res) => {
  const cityName = req.body.cityName;

  const baseURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;

  const getWeather = axios(baseURL)
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

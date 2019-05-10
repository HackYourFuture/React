const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

fetch('https://uinames.com/api/?amount=10')
  .then(fetchedData => fetchedData.json())
  .then(data =>
    router.get('/', (req, res, next) => {
      res.send(data);
    })
  )
  .catch(err => err);

// router.get('/', (req, res, next) => {
//   res.send(JSON.stringify(sendData));
// });

module.exports = router;

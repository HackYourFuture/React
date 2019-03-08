const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const port = process.env.PORT || 5000;

const app = express();
routes(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

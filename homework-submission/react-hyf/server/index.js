const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

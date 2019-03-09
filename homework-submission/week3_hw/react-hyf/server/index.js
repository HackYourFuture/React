const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/index');
const app = express();

app.use(bodyParser.json());

routes(app);
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

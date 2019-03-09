const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routers = require('./routers/index');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routers(app);
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
const Port = 5000;
app.listen(Port, () => {
  console.log(`the server listen to http://localhost:${Port}`);
});

const express = require('express');
const app = express();

app.get('/hey', (req, res) => res.send('ho!'));

app.listen(8080, () => console.log('The server is listening to: http://localhost:8080/'));

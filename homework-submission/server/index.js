const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('../build'));

app.listen(port, () => console.log(`Server listening on port ${port}!`));

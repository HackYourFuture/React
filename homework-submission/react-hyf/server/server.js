const express = require('express');
const path = require('path');

const PORT = 5000;
const app = express();
app.use(express.static(path.join(__dirname, '../react-hyf-client/build')));

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../react-hyf-client/build/index.html')),
);

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`));

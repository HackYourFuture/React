const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../react-hyf-client/build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../react-hyf-client/build/index.html'));
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

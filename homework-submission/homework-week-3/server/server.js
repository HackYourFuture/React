const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./build', { index: false }));
app.get('/index', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

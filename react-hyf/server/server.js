const Express = require('express');
const path = require('path');
const app = Express();

const PORT = 7000;
const ROOT = '../react-hyf-client/build';
const PREV_ROOT = '../previousHomework/build';

app.use(Express.static(path.join(__dirname, ROOT)));
app.use(Express.static(path.join(__dirname, PREV_ROOT)));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, ROOT, 'index.html'))
);

app.get('/week2', (req, res) =>
  res.sendFile(path.join(__dirname, PREV_ROOT, 'index.html'))
);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);

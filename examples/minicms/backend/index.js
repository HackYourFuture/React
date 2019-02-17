const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const DATA_DIR = 'data'

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api/pages/:page', (req, res) => {
  const filename = path.join(DATA_DIR, req.params.page + '.md');
  fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
      return res.send({ status: 'error', error: err.toString() });
    } else {
      const lines = data.split('\n');
      const title = lines[0].slice(1).trim();
      const body = lines.slice(1).join('\n').trim();
      const page = { title, body };
      return res.send({ status: 'ok', page });
    }
  })
});

app.patch('/api/pages/:page', (req, res) => {
  const filename = path.join(DATA_DIR, req.params.page + '.md');
  let page = '';
  page += `# ${req.body.title}\n`;
  page += req.body.body;
  fs.writeFile(filename, page, (err, data) => {
    if (err) {
      return res.send({ status: 'error', error: err });
    } else {
      return res.send({ status: 'ok' });
    }
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

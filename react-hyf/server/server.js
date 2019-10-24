const Express = require('express');
const path = require('path');
const app = Express();

const PORT = 5000;
const ROOT = '../react-hyf-client/build';
const WEEK1_ROOT = '../previousHomeworks/week1/build';
const WEEK2_ROOT = '../previousHomeworks/week2/build';

app.use(Express.static(path.join(__dirname, ROOT)));
app.use(Express.static(path.join(__dirname, WEEK1_ROOT)));
app.use(Express.static(path.join(__dirname, WEEK2_ROOT)));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, ROOT, '/index.html')));

app.get('/week1', (req, res) => res.sendFile(path.join(__dirname, WEEK1_ROOT, '/index.html')));
app.get('/week2', (req, res) => res.sendFile(path.join(__dirname, WEEK2_ROOT, '/index.html')));

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

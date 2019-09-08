const Express = require('express');
const path = require('path');
const app = Express();
const PORT = 3000;
const root = '../react-hyf-client/build';
app.use(Express.static(path.join(__dirname, root)));

app.listen(PORT, () => {
  console.log(`listenin port on ${PORT}`);
});

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, root, 'index.html'));
});
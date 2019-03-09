// const html = require('../../client/public/index.html');

module.exports = app => {
  app.get('/', (req, res) => {
    res.send('html');
  });
};

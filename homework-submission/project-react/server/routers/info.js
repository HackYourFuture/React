module.exports = app => {
  app.get('/greeting', (req, res) => {
    res.send({
      greeting: `greeting from the backend`,
    });
  });
  app.get('/hello', (req, res) => {
    res.send({
      todo: 'do the homework',
    });
  });
};

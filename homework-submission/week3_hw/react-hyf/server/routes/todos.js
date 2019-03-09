let todos = require('../todos.json');
module.exports = app => {
  app.get('/todos', (req, res) => {
    console.log('Retrieving Todos');
    res.json(todos);
  });

  app.delete('/todos/:id', (req, res) => {
    console.log(`delete with id : `);
    res.send('Deleted a todo item');
  });

  app.delete('/todos', (req, res) => {
    console.log('Deleting all Todos');
    res.send('Deleted todos');
  });
  app.post('/todos', (req, res) => {
    console.log('Posting Todos');
    res.send('posted todos');
  });
};

// app.post('/todos', (req, res) => {
//   res.send('POST');
// });

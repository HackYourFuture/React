let todos = [
  {
    id: 1,
    text: 'Practice for staatsexamen',
  },
  {
    id: 2,
    text: 'Jogging.',
  },
  {
    id: 3,
    text: "Do the HYF's homework",
  },
  {
    id: 4,
    text: 'Feed my cat',
  },
];

module.exports = app => {
  console.log(todos);
  app.get('/todos', (req, res) => {
    res.json(todos);
  });

  app.post('/todos', (req, res) => {
    console.log(req.body);
    console.log('Creating a new animal');
    res.send('New Todo');
  });

  app.delete('/todos', (req, res) => {
    todos = [];
    console.log('deleting a todo');
    res.send('Deleting animal');
  });
};

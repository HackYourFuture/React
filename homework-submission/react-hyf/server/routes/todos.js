let todos = [
  {
    id: 0,
    text: 'Practice for staatsexamen',
  },
  {
    id: 1,
    text: 'Jogging.',
  },
  {
    id: 2,
    text: "Do the HYF's homework",
  },
  {
    id: 3,
    text: 'Feed my cat',
  },
];

module.exports = app => {
  app.get('/todos', (req, res) => {
    res.json(todos);
  });

  app.get('/todos/:id', (req, res) => {
    const id = req.params.id;
    res.json(todos[id]);
  });

  app.post('/todos/:item/:id', (req, res) => {
    const newData = {
      id: req.params.id,
      text: req.params.item,
    };
    todos.push(newData);
    console.log(req.body);
    console.log('Creating a new animal');
    res.json(todos);
  });

  app.delete('/todos/:id', (req, res) => {
    let id = Number(req.params.id);
    todos.splice(id, 1);
    console.log('deleting a todo');
    res.json(todos);
  });
};

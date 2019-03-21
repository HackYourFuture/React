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
  app.get('/todos', (req, res) => {
    res.json(todos);
  });

  app.get('/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    const foundTodo = todos.find(todo => {
      return todo.id === id;
    });
    if (!foundTodo) {
      res.status(404).send(`Todo with ID ${id} not found`);
      return;
    }
    res.json(foundTodo);
  });

  app.post('/todos', (req, res) => {
    let highestId = todos[0].id;
    todos.forEach(todo => {
      if (todo.id > highestId) {
        highestId = todo.id;
      }
    });
    const newId = highestId + 1;
    const newTodo = {
      id: newId,
      text: req.body.text,
    };
    todos.push(newTodo);
    res.json(newTodo);
  });

  app.delete('/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = todos
      .map(todo => {
        return todo.id;
      })
      .indexOf(id);
    if (index === -1) {
      res.status(404).send(`Todo with ID ${id} not found`);
      return;
    }
    todos.splice(index, 1);
    res.json(todos);
  });
};

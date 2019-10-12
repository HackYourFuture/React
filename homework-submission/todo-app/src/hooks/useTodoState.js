import { useState, useEffect } from 'react';
import axios from 'axios';

export default userTodos => {
  const [todos, setTodos] = useState(userTodos);
  const addTodo = async todo => {
    const response = await axios.post(`https://todo-5edaf.firebaseio.com/todos.json`, { todo });
    const newID = response.data.name;
    const newTodos = [...todos, { ...todo, id: newID }];
    setTodos(newTodos);
  };

  const getTodos = async () => {
    const response = await axios.get('https://todo-5edaf.firebaseio.com/todos.json');
    const data = await response.data;
    const newTodos = [];
    if (data) {
      const todoKeys = Object.keys(data);
      todoKeys.forEach(key => {
        const { description, deadline, done } = data[key].todo;
        newTodos.push({ id: key, description, deadline, done });
      });
      setTodos(newTodos);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const toggleComplete = async id => {
    const findTodo = todos.find(todo => todo.id === id);
    const toggled = {
      description: findTodo.description,
      deadline: findTodo.deadline,
      done: !findTodo.done,
    };
    await axios.patch(`https://todo-5edaf.firebaseio.com/todos/${id}.json/`, {
      todo: toggled,
    });

    const toogledTodo = todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo));
    setTodos(toogledTodo);
  };

  const removeTodo = async id => {
    const findTodo = todos.find(todo => todo.id === id);
    await axios.delete(`https://todo-5edaf.firebaseio.com/todos/${id}.json/`, {
      todo: findTodo,
    });
    const keepTodos = todos.filter(todo => todo.id !== id);
    setTodos(keepTodos);
  };

  const updateTodo = async (id, description, deadline) => {
    const findTodo = todos.find(todo => todo.id === id);
    if (findTodo) {
      const editTodo = { description, deadline, done: findTodo.done };
      await axios.put(`https://todo-5edaf.firebaseio.com/todos/${id}.json/`, {
        todo: editTodo,
      });
      const updatedTodo = todos.map(todo =>
        todo.id === id ? { ...todo, description, deadline } : todo,
      );
      setTodos(updatedTodo);
    }
  };

  return { todos, addTodo, toggleComplete, removeTodo, updateTodo };
};

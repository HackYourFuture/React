import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Input from './components/input';
import todoShow from './components/todo';
function App () {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: 'Get out of bed',
      deadline: '2017-09-11',
      done: true,
    },
    {
      id: 2,
      description: 'Brush teeth',
      deadline: '2017-09-10',
      done: false,
    },
    {
      id: 3,
      description: 'Eat breakfast',
      deadline: '2017-09-09',
      done: false,
    },
  ]);

  const [form, setForm] = useState({
    id: todos.length+1,
    description: '',
    deadline: '',
    done: false,
  });
console.log(form);
  const handleChangeInput = e => {
    const newTodo = e.target.value;
    const key = [e.target.name];
    const newForm = { ...form, [key]: newTodo };
    setForm(newForm);
  };
  const handleDeleteTodo = (id) => {
    const removeTodo = todos.filter(item=>item.id!==id);
    setTodos(removeTodo);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (form.description&&form.deadline) {
      setTodos([...Input, form]);
      setForm({
        description: '',
        deadline: '',
      });
    } else {window.alert('Please enter a todo');
    }
  };
  const [showTodoList, setShowTodoList] = useState(false);
  const [buttonText, setButtonText] = useState(false);

  const toggleList = () => {
    return setShowTodoList(!showTodoList), setButtonText(!buttonText);
  };
  return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Todo App</h2>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <Input
            placeholder="description"
            value={form.description}
            name="description"
            handleChangeInput={handleChangeInput}/>
          <Input
            placeholder="dd-mm-yyyy"
            value={form.deadline}
            name="deadline"
            handleChangeInput={handleChangeInput}/>
          <Button value={'Add'}/>
       </form>
        <button className="btn" onClick={toggleList}>
          {buttonText ? 'hide' : 'show'}
        </button>
          {showTodoList && (
        <div className="container">
          {todos.map(todo => {
            const { id, description, deadline, done } = todo;
            return (
              <todoShow
                key={id}
                id={id}
                description={description}
                deadline={deadline}
                done={done}
                handleRemoveItem={handleDeleteTodo}
              />
            );
          })}
        </div>
      )}
      </div>
    );
};

export default App;

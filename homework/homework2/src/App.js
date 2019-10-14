import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Input from './components/input';
import Todo from './components/todo';
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

  const handleChangeInput = event => {
    const newTodo = event.target.value;
    const key = [event.target.name];
    const newForm = { ...form, [key]: newTodo };
    setForm(newForm);
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter(item=>item.id!==id);
    setTodos(newTodos);
    console.log(id);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (form.description&&form.deadline) {
      setTodos([...todos, form]);
      setForm({
        id: todos.length+1,
        description: '',
        deadline: '',
        done: false,
      });
    } else {window.alert('Please enter a todo description and select a deadline');
    }
  };
  const [showTodoList, setShowTodoList] = useState(false);

  const toggleList = () => {
    return setShowTodoList(!showTodoList);
  };
  const onFocusInput = e => {
    e.currentTarget.type = 'date';
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
            handleChangeInput={handleChangeInput}
            />
          <div><Input
            placeholder="dd-mm-yyyy"
            value={form.deadline}
            name="deadline"
            handleChangeInput={handleChangeInput}
            onFocusInput={onFocusInput}/>            
            </div>
          <div><Button  value={'Add'}/></div>
       </form>
       <button className="button" onClick={toggleList}>
        {showTodoList ? 'hide' : 'show'}
      </button>
      
      {showTodoList && (
        <div className="container">
          {todos.map(todo => {
            const { id, description, deadline, done } = todo;
            return (
              <Todo
                id={id}
                key={id}
                description={description}
                deadline={deadline}
                done={done}
                handleDeleteTodo={handleDeleteTodo}
              />
            );
          })}
        </div>
      )}
      </div>
    );
}
export default App;

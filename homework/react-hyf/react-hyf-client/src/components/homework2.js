import React, { useState } from 'react';
import '../App.css';
import '../index.css';

function Button({ type = 'submit', value }) {
    return (
        <button className="button" type={type} value={value}>
          {value}
        </button>
    );
  }

function Input({ type = 'text', placeholder, value, name, handleChangeInput,onFocusInput }) {
    return (
        <input
          className="input" 
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={handleChangeInput}
          onFocus={onFocusInput}
        />
    );
  }

function Todo({ id, description, deadline, handleDeleteTodo }) {
    return (
      <h3 id={id} className="todo" onClick={() => handleDeleteTodo(id)}>
        {description}/{deadline}
      </h3>
    );
  }

function Homework2 () {
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
    } else if (!form.description){window.alert('Please enter a todo description');
    }else if (!form.deadline){window.alert('Please enter a todo deadline');
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
      <div className="homework2">
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
export default Homework2;

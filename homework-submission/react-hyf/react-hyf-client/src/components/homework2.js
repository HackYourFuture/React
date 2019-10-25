import React, { useState } from 'react';
import '../App.css';
import '../index.css';
import uuid from 'uuid';

function Button({ type = 'submit', value, clickHandler }) {
  return (
      <button className="button" type={type} value={value} onClick={clickHandler}>
        {value}
      </button>
  );
}

function Input({ type = 'text', placeholder, value, name, handleChangeInput,onFocusInput }) {
    return (
      <div>
        <input
          className="input" 
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={handleChangeInput}
          onFocus={onFocusInput}/>
     </div>
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
        id: uuid.v4(),
        description: 'Get out of bed',
        deadline: '2017-09-11',
        done: true,
      },
      {
        id: uuid.v4(),
        description: 'Brush teeth',
        deadline: '2017-09-10',
        done: false,
      },
      {
        id: uuid.v4(),
        description: 'Eat breakfast',
        deadline: '2017-09-09',
        done: false,
      },
  ]);
  const [showTodoList, setShowTodoList] = useState(false);

  const [form, setForm] = useState({
    id:uuid.v4(),
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
        id: uuid.v4(),
        description: '',
        deadline: '',
        done: false,
      });
    } else if (!form.description){window.alert('Please enter a todo description');
     }else if (!form.deadline){window.alert('Please enter a todo deadline');
    } 
  };
  
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
          <Input
            placeholder="dd-mm-yyyy"
            value={form.deadline}
            name="deadline"
            handleChangeInput={handleChangeInput}
            onFocusInput={onFocusInput}/> 
          <Button  value={'Add'}/>
       </form>
       <Button  value={showTodoList ? 'hide' : 'show'}  clickHandler={toggleList}/>       
      {showTodoList && (
        <div>
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

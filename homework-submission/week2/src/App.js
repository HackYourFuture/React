import React, { useState } from 'react';
import './App.css';
import uuid from 'uuid';
import ListItem from './components/listItem';
import ListHeader from './components/listHeader';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuid.v4(),
      description: 'Get out of bed',
      deadline: '2017-09-11',
      done: false,
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

  const [form, setForm] = useState({
    id: uuid.v4(),
    description: '',
    deadline: '',
    done: false,
  });

  const handleChangeInput = e => {
    const newItem = e.target.value;
    const key = [e.target.name];
    const newForm = { ...form, [key]: newItem };
    setForm(newForm);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.description.length === 0) {
      window.alert('empty description is not allowed ');
    } else {
      setTodos([...todos, form]);
      setForm({
        id: uuid.v4(),
        description: '',
        deadline: '',
        done: false,
      });
    }
  };

  const handleRemoveItem = description => {
    const removeItem = todos.filter(todo => todo.description !== description);
    console.log(removeItem);
    setTodos(removeItem);
  };

  const [showTodoLIst, setShowTodoLIst] = useState(false);

  const toggleList = () => {
    return setShowTodoLIst(!showTodoLIst);
  };

  const onFocusInput = e => {
    e.currentTarget.type = 'date';
  };

  return (
    <div className="App-header">
      <ListHeader listName="Todo List" />
      <form className="form" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="description..."
          value={form.description}
          name="description"
          handleChangeInput={handleChangeInput}
        />
        <Input
          placeholder="deadline..."
          value={form.deadline}
          name="deadline"
          handleChangeInput={handleChangeInput}
          onFocusInput={onFocusInput}
        />
        <Button value={'Add'} />
      </form>

      <button className="btn" onClick={toggleList}>
        {showTodoLIst ? 'hide' : 'show'}
        {showTodoLIst} my list
      </button>

      {showTodoLIst && (
        <div className="container">
          {todos.map(todo => {
            const { id, description, deadline, done } = todo;
            return (
              <ListItem
                key={id}
                description={description}
                deadline={deadline}
                done={done}
                handleRemoveItem={handleRemoveItem}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
export default App;

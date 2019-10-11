import React, { useState } from 'react';
import './App.css';
import uuid from 'uuid';
import List from './components/list';
import ListHeader from './components/listHeader';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  const [Todos, setTodos] = useState([
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
      setTodos([...Todos, form]);
      setForm({
        id: uuid.v4(),
        description: '',
        deadline: '',
        done: false,
      });
    }
  };

  const handleRemoveItem = id => {
    const removeItem = Todos.filter(todo => todo.id !== id);
    setTodos(removeItem);
  };

  const [showTodoLIst, setShowTodoLIst] = useState(false);
  const [buttonText, setButtonText] = useState(false);

  const toggleList = () => {
    // eslint-disable-next-line
    return setShowTodoLIst(!showTodoLIst), setButtonText(!buttonText);
  };

  return (
    <div className="App-header">
      <ListHeader listName="Todo List" />
      <form className="form" onSubmit={handleSubmit}>
        <Input
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
        />
        <Button value={'Add'} />
      </form>

      <button className="btn" onClick={toggleList}>
        {buttonText ? 'hide' : 'show'}
        {buttonText} my list
      </button>

      {showTodoLIst && (
        <div className="container">
          {Todos.map(todo => {
            const { id, description, deadline, done } = todo;
            return (
              <List
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

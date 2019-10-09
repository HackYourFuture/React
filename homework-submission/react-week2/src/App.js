import React, { useState } from 'react';
import './App.css';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';
import todoData from './components/todoData/todoData';
const shortid = require('shortid');

const App = () => {
  const [data, setData] = useState({
    items: todoData,
  });

  const deleteItemFnc = id => {
    let items = data.items.filter(item => item.id !== id);
    setData({ items });
  };
  const addItemFnc = item => {
    item.id = shortid.generate();
    const items = data.items;
    items.push(item);
    setData({ items });
  };
  const checkBoxFnc = id => {
    const items = data.items;
    const itemIndex = items.findIndex(item => item.id === id);
    items[itemIndex].done ? (items[itemIndex].done = false) : (items[itemIndex].done = true);
    setData({ items });
  };

  return (
    <div className="App container">
      <h3 className="text-center">Todo list App</h3>
      <TodoItems items={data.items} deleteItemFnc={deleteItemFnc} checkBoxFnc={checkBoxFnc} />
      <AddItem addItemFnc={addItemFnc} />
      <button onClick={() => console.log(data)}>console.log(state)</button>
    </div>
  );
};

export default App;

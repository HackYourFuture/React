import React, { useState } from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';
import todoData from './components/todoData/todoData';
import shortid from 'shortid';
import './Week2.css';

const Week2 = () => {
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
    <div>
      <header className="App-header">
        <h1>Week2</h1>
      </header>
      <main className="App-main container">
        <h3>Todo list App</h3>
        <TodoItems items={data.items} deleteItemFnc={deleteItemFnc} checkBoxFnc={checkBoxFnc} />
        <AddItem addItemFnc={addItemFnc} />
      </main>
    </div>
  );
};

export default Week2;
// _____________

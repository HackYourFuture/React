import React from 'react';
import { ListItem, List } from './list';
import data from './data';
import './Week1.css';
const Week1 = () => {
  return (
    <div>
      <header className="App-header">
        <h1>Week1</h1>
      </header>
      <main className="App-main">
        <List>
          <ListItem description="Get out of bed" deadline="Wed Sep 13 2017" />
          <ListItem description="Brush teeth" deadline="Thu Sep 14 2017" />
          <ListItem description="Eat breakfast" deadline="Fri Sep 15 2017" />
        </List>
        <List>
          {data.map((item, index) => (
            <ListItem key={index} {...item} />
          ))}
        </List>
      </main>
    </div>
  );
};

export default Week1;

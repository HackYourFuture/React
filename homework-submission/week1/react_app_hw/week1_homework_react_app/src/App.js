import React from 'react';
import './App.css';
import { ListItem, List } from './components/list';
import data from './list_data/data';

// Parent component: it is the container component "class based", it create HTML Div, that contains all the above components.
function App() {
  return (
    <div className="App">
      <List>
        <ListItem description="Get out of bed" deadline="Wed Sep 13 2017" />
        <ListItem description="Brush teeth" deadline="Thu Sep 14 2017" />
        <ListItem description="Eat breakfast" deadline="Fri Sep 15 2017" />
      </List>
      <List>
        {data.map(item => (
          <ListItem {...item} />
        ))}
      </List>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import ListBoard from './components/ListBoard/ListBoard';
import ListItems from './components/ListItems/ListItems';

const items = [
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
];

function App() {
  return (
    <div className="App">
      <ListBoard name={'Static List'}>
        <ListItems description={'Get out of bed'} deadline={' Wed Sep 13 2017'} />
        <ListItems description={'Brush teeth'} deadline={'Thu Sep 14 2017'} />
        <ListItems description={'Eat breakfast'} deadline={' Fri Sep 15 2017'} />
      </ListBoard>
      <ListBoard name={'Dynamic List'}>
        {items.map(item => (
          <ListItems description={item.description} deadline={item.deadline} done={item.done} />
        ))}
      </ListBoard>
    </div>
  );
}

export default App;

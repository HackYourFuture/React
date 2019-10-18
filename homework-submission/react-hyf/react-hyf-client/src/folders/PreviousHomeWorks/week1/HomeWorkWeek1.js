import React from 'react';
import './style.css';
import ListItem from '../components/week1/items';
import ListHeader from '../components/week1/listHeader';
import List from '../components/week1/list';
const items = [
  {
    id: '76385kjsng2358',
    description: 'Get out of bed',
    deadline: '2017-09-11',
    done: true,
  },
  {
    id: '76385kjsng23453518',
    description: 'Brush teeth',
    deadline: '2017-09-10',
    done: false,
  },
  {
    id: '76385kjsng2397528',
    description: 'Eat breakfast',
    deadline: '2017-09-09',
    done: false,
  },
];
// I created List, ListHeader and ListItem Components.

// I have  props : listName, description,deadline and done for both Static and Dynamic List.
// I created them in theirs Container/Parent Component.
// passed all of them in theirs sub-Components in order to use them.

function HomeWorkWeek1() {
  return (
    <div className="App-header">
      <div className="StaticList">
        <ListHeader listName={'Static List'} />
        <ul>
          <ListItem description="Get out of bed" deadline="Wed Sep 13 2017" />
          <ListItem description="Brush teeth" deadline="Thu Sep 14 2017" />
          <ListItem description="Eat breakfast" deadline="Fri Sep 15 2017" />
        </ul>
      </div>
      <List listName={'Dynamic List'} items={items} />
    </div>
  );
}

export default HomeWorkWeek1;

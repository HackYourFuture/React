import React from 'react';
import './style1.css';

const ListItem = ({ description, deadline, className }) => {
  return (
    <li className={className}>
      {description}, {deadline}
    </li>
  );
};
// The goal of this component is to create a single item of a list .

const StaticList = () => {
  return (
    <div>
      <ul>
        <ListItem description="Get out of bed" deadline="Wed Sep 13 2017" />
        <ListItem description="Brush teeth" deadline="Thu Sep 14 2017" />
        <ListItem description="Eat breakfast" deadline="Fri Sep 15 2017" />
      </ul>
    </div>
  );
};
// This StaticList function creates a ul list component which has its own props.

const todoItems = [
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
const DynamicList = () => {
  return (
    <ul>
      {todoItems.map(({ id, description, deadline, done }) => (
        <ListItem
          key={id}
          description={description}
          deadline={deadline}
          className={done ? 'tick' : 'cross'}
        />
      ))}
    </ul>
  );
};
// This DynamicList function creates a dynamic  ul list component which accepts a object parameter and loops it with map.

class App extends React.Component {
  render() {
    return (
      <div>
        <StaticList />
        <DynamicList />
      </div>
    );
  }
}

// App is a class component which renders the other components in React.

export default App;

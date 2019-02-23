import React, { Component } from 'react';
import Data from './data.json';

const ListItem = props => {
  return (
    <li>
      {props.description} , {props.deadLine}
    </li>
  );
};

const List = () => {
  return (
    <ul>
      <ListItem description="Get out of bed" deadLine="Wed Sep 13 2017" />
      <ListItem description="Brush teeth" deadLine="Thu Sep 14 2017" />
      <ListItem description="Eat breakfast" deadLine="Fri Sep 15 2017" />
    </ul>
  );
};

const Item = Data.map(elem => {
  return (
    <li
      key={elem.id}
      style={elem.done === true ? { textDecoration: 'line-through' } : { textDecoration: '' }}
    >
      {elem.description} ,{elem.deadline}
    </li>
  );
});

const List2 = () => {
  return <ul>{Item}</ul>;
};

const Header = () => {
  return <h1>welcome to Todos list app</h1>;
};
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <List />
        <List2 />
      </div>
    );
  }
}

export default App;

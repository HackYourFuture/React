const ListItem = props => {
  return (
    <li>
      {props.description}
      {props.deadline}
    </li>
  );
};
const Header = () => {
  return <h1>Static List</h1>;
};

const List = () => {
  return (
    <ul className="list">
      <ListItem description="Get out of bed" deadline=", Wed Sep 13 2017 ." />
      <ListItem description=" Brush teeth" deadline=", Thu Sep 14 2017 ." />
      <ListItem description=" Eat breakfast" deadline=", Fri Sep 15 2017 ." />
    </ul>
  );
};
const Data = [
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

const Items = Data.map(elem => {
  return (
    <div>
      <li
        key={elem.id}
        style={elem.done === true ? { textDecoration: 'line-through' } : { textDecoration: '' }}
      >
        {elem.description} ,{elem.deadline}
      </li>
    </div>
  );
});

const ToDoListDynamic = () => (
  <div>
    <h1>Dynamic List</h1>

    <ul className="list">{Items}</ul>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <List />
        <ToDoListDynamic />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// the role of this component is to create a list tag
// with three prop items.(description, deadline and class for CSS)
// this component is used both for static and dynamic

const List = ({ description, deadline, className }) => {
  return (
    <li className={className}>
      {description}, {deadline}
    </li>
  );
};

//STATIC LIST

// this component is used for creating a <ul> tag to contain
// <li> tags

const UnorderedStaticList = () => {
  return (
    <ul>
      <List description="Get out of bed" deadline="Wed Sep 13 2017" className="finished" />
      <List description="Brush teeth" deadline="Thu Sep 14 2017" className="" />
      <List description="Eat breakfast" deadline="Fri Sep 15 2017" className="" />
    </ul>
  );
};

// this component contains all the list items

class StaticList extends React.Component {
  render() {
    return (
      <div>
        <h1>Static List</h1>
        <UnorderedStaticList />
      </div>
    );
  }
}

//DYNAMIC LIST

// This component is for creating a dynamic <li> tags and
// containing them inside <ul> tag. map function is assigning
// all the respective features.

const UnorderedDynamicList = () => {
  const todos = [
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

  const processTodos = todos.map(todo => (
    <List
      description={todo.description}
      deadline={todo.deadline}
      key={todo.id}
      className={todo.done ? 'finished' : ''}
    />
  ));

  return <ul>{processTodos}</ul>;
};

// this component contains all the list items

class DynamicList extends React.Component {
  render() {
    return (
      <div>
        <h1>Dynamic List</h1>
        <UnorderedDynamicList />
      </div>
    );
  }
}

const inject = document.getElementById('thisIsWhereReactIsInjected');

ReactDOM.render(
  <div>
    <StaticList />
    <DynamicList />
  </div>,
  inject,
);

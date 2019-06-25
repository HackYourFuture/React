const Item = ({ id, description, deadline, done }) => {
  if (done == true) {
    return (
      <li className="true">
        {id} {description} {deadline}
      </li>
    );
  } else {
    return (
      <li>
        {id} {description} {deadline}
      </li>
    );
  }
};

const StaticList = () => {
  return (
    <ul className="static-list">
      <Item description={'Get out of bed'} deadline={'Wed Sep 13 2017'} />
      <Item description={'Brush teeth'} deadline={'Thu Sep 14 2017'} />
      <Item description={'Eat breakfast'} deadline={'Fri Sep 15 2017'} />
      <Item description={'Play sport'} deadline={'Sat Sep 16 2017'} />
      <Item description={'Do homework'} deadline={'Sun Sep 17 2017'} />
      <Item description={'Go to party'} deadline={'Mon Sep 18 2017'} />
    </ul>
  );
};

const DynamicList = ({ data }) => {
  const result = data.map(({ id, done, description, deadline }) => {
    return <Item key={id} id={id} description={description} deadline={deadline} done={done} />;
  });
  return <ul className="dynamic-list">{result}</ul>;
};

class App extends React.Component {
  todoObject = [
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

  render() {
    return (
      <div>
        <h2>Static List</h2>
        <StaticList />
        <h2>Dynamic List</h2>
        <DynamicList data={this.todoObject} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('thisIsWhereReactIsInjected'));

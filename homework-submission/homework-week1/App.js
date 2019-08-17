class ListItem extends React.Component {
  // ListItem component is creating a list item in page
  render() {
    const { description, deadline } = this.props;

    return (
      <li key={this.props.id} className={this.props.done ? 'itemCompleted' : 'itemNotCompleted'}>
        {description} , {deadline}
      </li>
    );
  }
}

class StaticList extends React.Component {
  // StaticList component is creating a list by using the ListItem component in page statically
  render() {
    return (
      <ul>
        <ListItem id="1" description="Get out of bed" deadline="Wed Sep 13 2017" />
        <ListItem id="2" description="Brush teeth" deadline="Thu Sep 14 2017" />
        <ListItem id="3" description="Eat breakfast" deadline="Fri Sep 15 2017" />
      </ul>
    );
  }
}

class DynamicList extends React.Component {
  // DynamicList component is creating a list by using the ListItem component in page dynamically
  render() {
    const { todoList } = this.props;
    return (
      <ul>
        {todoList.map(item => {
          return (
            <ListItem
              key={item.id * 3}
              id={item.id}
              description={item.description}
              deadline={item.deadline}
              done={item.done}
            />
          );
        })}
      </ul>
    );
  }
}

class App extends React.Component {
  // This component is main component that use another components.
  render() {
    const list = [
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

    return (
      <div>
        <h1>Static List</h1>
        <StaticList />
        <h1>Dynamic List</h1>
        <DynamicList todoList={list} />
      </div>
    );
  }
}
const root = document.getElementById('thisIsWhereReactIsInjected');
ReactDOM.render(<App />, root);

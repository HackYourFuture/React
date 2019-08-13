class ComponentStatic extends React.Component {
  // The goal of this component is to create a list item in page statically
  render() {
    const { description, deadline } = this.props;
    return (
      <li>
        {description} , {deadline}
      </li>
    );
  }
}

class ComponentDynamic extends React.Component {
  // The goal of this component is to create a list in page dynamically
  render() {
    const { todoList } = this.props;
    return (
      <ul>
        {todoList.map(item => {
          if (item.done == false)
            return (
              <li key={item.id}>
                {item.description}, {item.deadline}
              </li>
            );
        })}
      </ul>
    );
  }
}

class App extends React.Component {
  // This component is main component that uses another component.
  render() {
    const data = {
      todoList: [
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
      ],
    };

    return (
      <div>
        <ul>
          <h1>Static List</h1>
          <ComponentStatic description="Get out of bed" deadline="Wed Sep 13 2017" />
          <ComponentStatic description="Brush teeth" deadline="Thu Sep 14 2017" />
          <ComponentStatic description="Eat breakfast" deadline="Fri Sep 15 2017" />
          <h1>Dynamic List</h1>
        </ul>
        <ComponentDynamic todoList={data.todoList} />
      </div>
    );
  }
}
const root = document.getElementById('thisIsWhereReactIsInjected');
ReactDOM.render(<App />, root);

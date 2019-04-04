// This component is to create todoList Table.
class Table extends React.Component {
  render() {
    const description = this.props.description;
    const deadline = this.props.deadline;
    const done = this.props.done;

    return (
      <table className={done}>
        <tbody>
          <tr>
            <td>{description}</td>
            <td>{deadline}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

// This component is to create a todoList by using Table component (nested component).
class StaticList extends React.Component {
  render() {
    return (
      <div>
        <h1>Static List</h1>
        <Table description="Get out of bed" deadline="Wed Sep 13 2017" />
        <Table description="Brush teeth" deadline="Thu Sep 14 2017" />
        <Table description="Eat breakfast" deadline="Fri Sep 15 2017" />
      </div>
    );
  }
}

// This component is to create a todoList by using Table component (nested component) and the data pass dynamically.
class DynamicList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  render() {
    const { todoList } = this.state;
    return (
      <div>
        <h1>Dynamic List</h1>
        {todoList.map(todo => (
          <Table
            key={todo.id}
            description={todo.description}
            deadline={todo.deadline}
            done={todo.done ? 'cross-out' : null}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <StaticList />
    <DynamicList />
  </div>,
  document.getElementById('thisIsWhereReactIsInjected')
);

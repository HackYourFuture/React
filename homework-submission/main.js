const List = props => {
  return (
    <li>
      {props.description},{props.deadline}
    </li>
  );
};

class TodoList extends React.Component {
  staticList = [
    { description: 'Get out of bed', deadline: 'Wed Sep 13 2017' },
    { description: 'Brush teeth', deadline: 'Thu Sep 14 2017' },
    { description: 'Eat breakfast', deadline: 'Fri Sep 15 2017' },
  ];

  dynamicList = [
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
        <h1>static List</h1>
        <List description={this.staticList[0].description} deadline={this.staticList[0].deadline} />
        <List description={this.staticList[1].description} deadline={this.staticList[1].deadline} />
        <List description={this.staticList[2].description} deadline={this.staticList[2].deadline} />

        <div>
          <h1>Dynamic List</h1>
          {this.dynamicList.map(todoList => (
            <div>
              <li
                key={todoList.id}
                style={
                  todoList.done === true
                    ? { textDecoration: 'line-through' }
                    : { textDecoration: '' }
                }
              >
                {todoList.description},{todoList.deadline}
              </li>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TodoList />, document.getElementById('root'));

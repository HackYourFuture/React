// Create a todo list item as reusable component:
class TodoListItem extends React.Component {
  render() {
    const { description, deadline, className, id} = this.props;
     return (
      <li className= {className} key= {id}>
        {description}, {deadline}
      </li>
    );
  }
}

// Create a todo list called Static List with three list items
class StaticList extends React.Component {
  render() {
    return (
      <div className="static_list">
        <h1>Static List</h1>
        <ul>
          <TodoListItem description="Get out of bed" deadline="Wed Sep 13 2017" />
          <TodoListItem description="Brush teeth" deadline="Thu Sep 14 2017" />
          <TodoListItem description="Eat breakfast" deadline="Fri Sep 15 2017" />
        </ul>
      </div>
    );
  }
}

const dynamicListArray = [
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
// Create a todo list called Dynamic List with the items of the dynamicListArray
class DynamicList extends React.Component {
  render() {
    return (
      <div className="dynamic_list">
        <h1>Dynamic List</h1>
        <ul>
          {dynamicListArray.map(listItem => {
            return (
              <TodoListItem
                key={listItem.id}
                className={listItem.done === true ? "done" : "not_done"}
                description={listItem.description}
                deadline={listItem.deadline}                
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

// Render the all lists
class App extends React.Component {
  render() {
    return (
      <div className="main">
        <StaticList />
        <DynamicList />
      </div>
    );
  }
}

const root = document.getElementById('thisIsWhereReactIsInjected');
ReactDOM.render(<App />, root);

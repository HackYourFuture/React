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

//with this component you can create a title for both lists by passing the title text as props
class ListTitle extends React.Component {
  render() {
    const { text } = this.props;
    return <h2 class="list_title">{text}</h2>;
  }
}

// this component creates reusable list items for both lists. each ListItem has description, deadline and done properties
//description is the description of the TODO item eg: "Go to dentist", deadline is the final date for the TODO and Done is
// to mark TODO as completed
class ListItem extends React.Component {
  render() {
    const { description, deadline, done } = this.props;

    return (
      <li className={`li_style ${done ? 'done' : ''}`}>
        {description}, {deadline}
      </li>
    );
  }
}

// this component creates a dynamic list for the todoItems object
class DynamicList extends React.Component {
  render() {
    const { todos } = this.props;
    return (
      <ul className="list">
        {todos.map((todo, index) => (
          <ListItem key={index} {...todo} />
        ))}
      </ul>
    );
  }
}

// this component creates a static list for given values inside the component
class StaticList extends React.Component {
  render() {
    return (
      <ul className="list">
        <ListItem description="Get out of bed" deadline="Wed Sep 13 2017" />
        <ListItem description="Brush teeth" deadline="Thu Sep 14 2017" />
        <ListItem description="Eat breakfast" deadline="Fri Sep 15 2017" />
      </ul>
    );
  }
}
//main component to render all the components
class App extends React.Component {
  render() {
    return (
      <div>
        <ListTitle text="Static List" />
        <StaticList />
        <ListTitle text="Dynamic List" />
        <DynamicList todos={todoItems} />
      </div>
    );
  }
}
const root = document.getElementById('thisIsWhereReactIsInjected');
ReactDOM.render(<App />, root);

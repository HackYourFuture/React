'use strict';

const todoListArr = [
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

// The goal of this component is to take a parameter for list type as props
// and insert a header with class of 'list-title' for lists
const ListTitle = props => <h1 className="list-title">{props.type} List</h1>;

// The goal of this component is to insert a list item with given description and
// deadline, to give this inserted item proper class names, to add an event listener
// that when a todo is clicked crosses it out as done if the todo is not done
// and vice versa
class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: props.done ? props.done : false };
    this.changeDoneState = this.changeDoneState.bind(this);
  }

  changeDoneState() {
    this.setState({ done: !this.state.done });
  }

  render() {
    const { description, deadline } = this.props;
    const date = new Date(deadline).toLocaleDateString('en-EN', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    return (
      <li onClick={this.changeDoneState} className={`list-item ${this.state.done}`}>
        {description}, {date}
      </li>
    );
  }
}

// The goal of this component is to insert a static-type list with static list items
class StaticList extends React.Component {
  render() {
    return (
      <div className="list-container">
        <ListTitle type="Static" />
        <ul className="list static">
          <ListItem description="Get out of bed" deadline="Wed Sep 13 2017" />
          <ListItem description="Brush teeth" deadline="Thu Sep 14 2017" />
          <ListItem description="Eat breakfast" deadline="Fri Sep 15 2017" />
        </ul>
      </div>
    );
  }
}

class DynamicList extends React.Component {
  render() {
    const { todoArr } = this.props;
    return (
      <div className="list-container">
        <ListTitle type="Dynamic" />
        <ul className="list dynamic">
          {todoArr.map(todo => (
            <ListItem key={todo.id} {...todo} />
          ))}
        </ul>
      </div>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <main>
        <StaticList />
        <DynamicList todoArr={todoListArr} />
      </main>
    );
  }
}

const root = document.getElementById('thisIsWhereReactIsInjected');

ReactDOM.render(<Main />, root);

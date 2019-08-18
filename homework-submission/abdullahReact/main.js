const toDoItems = [
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

//the goal of this component is to define/create a reusable list item that uses own function to set state.
// props.description and props.deadline are to write in list item (<li>) as text
// props.done is to initialize state.done.

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: props.done };
    this.switchDoneState = this.switchDoneState.bind(this);
  }

  switchDoneState() {
    this.setState({ done: !this.state.done });
  }

  render() {
    const { description, deadline } = this.props;
    return (
      <li onClick={this.switchDoneState} className={`listItem ${this.state.done}`}>
        {description} - {deadline}
      </li>
    );
  }
}

//the goal of this component is to define/create a reusable list header.
//it returns a header with taken parameter/prop.type + "List"

const ListHeader = listHead => {
  return <h2 className="listHeader">{listHead.type} List</h2>;
};

//the goal of this component is to create an unordered list statically
//it returns a ul which has a header(with given prop.type) 3 item with given props.
class StaticList extends React.Component {
  render() {
    return (
      <ul>
        <ListHeader type="Static" />
        <ListItem description="Get out of bed" deadline="2017-09-11" done={true} />
        <ListItem description="Brush teeth" deadline="2017-09-10" done={false} />
        <ListItem description="Eat breakfast" deadline="2017-09-09" done={false} />
      </ul>
    );
  }
}
//the goal of this component is to create an unordered list dynamically
//it returns a ul which has items as many as given props.array has.
class DynamicList extends React.Component {
  render() {
    const { toDoArr } = this.props;
    return (
      <ul>
        <ListHeader type="Dynamic" />
        {toDoArr.map(item => (
          <ListItem key={item.id} {...item} />
        ))}
      </ul>
    );
  }
}

//the goal of this component is to inject lists to html. it returns a div element which has two ul.
class App extends React.Component {
  render() {
    return (
      <div>
        <StaticList />
        <DynamicList toDoArr={toDoItems} />
      </div>
    );
  }
}

const root = document.getElementById('thisIsWhereReactIsInjected');

ReactDOM.render(<App />, root);

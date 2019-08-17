//Create a todo list called Static List with three list items:

const staticList = [
  { description: 'Get out of bed', deadline: 'Wed Sep 13 2017' },
  { description: 'Brush teeth', deadline: 'Thu Sep 14 2017' },
  { description: 'Eat breakfast', deadline: 'Fri Sep 15 2017' },
];

//1- Divide the list into reusable components (create at least 2):

// A- reusable list title component:
//the goal of this component is to create a reusable list title by using props
class ListTitle extends React.Component {
  render() {
    const { title } = this.props;
    return <h1>{title}</h1>;
  }
}

// B- reusable li component
//the goal of this component is to create a list item
class Item extends React.Component {
  render() {
    // 4- Each list item should have a prop of description and deadline
    const { description, deadline, done } = this.props;
    return (
      //6 Using CSS (a conditional className), cross out the item if done is true
      <li className={done ? 'item-list' : ''}>
        {description}, {deadline}
      </li>
    );
  }
}

// 3- Reuse one component at least 3 times
// the goal of this component is to make static component which make render to the title list and three items
class List extends React.Component {
  render() {
    return (
      <div>
        <ListTitle title="Static List" />
        <ul>
          <Item description={staticList[0].description} deadline={staticList[0].deadline} />
          <Item description={staticList[1].description} deadline={staticList[1].deadline} />
          <Item description={staticList[2].description} deadline={staticList[2].deadline} />
        </ul>
      </div>
    );
  }
}

//Create a second todo list
const secondTodoList = [
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

//the goal of this component is to dynamically render the second todo list using map() function:
class DynamicList extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        <ListTitle title="Dynamic List" />
        <ul>
          {items.map(item => (
            <Item
              key={item.id}
              description={item.description}
              deadline={item.deadline}
              done={Item.done}
            />
          ))}
        </ul>
      </div>
    );
  }
}

// the goal of this component is to render the previous components (List, DynamicList)
class App extends React.Component {
  render() {
    return (
      <div>
        <List />
        <DynamicList items={secondTodoList} />
      </div>
    );
  }
}
// I tell ReactDOM to render the content of <App/> component in the root.
const root = document.getElementById('thisIsWhereReactIsInjected');
ReactDOM.render(<App />, root);

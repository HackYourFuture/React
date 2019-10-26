import React from 'react';
import './Week1.css';

const staticList = [
  'Get out of bed, Wed Sep 13 2017',
  'Brush teeth, Thu Sep 14 2017',
  'Eat breakfast, Fri Sep 15 2017',
];

const dynamicList = [
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

// This component is header aimed for top of each list
const Header = ({ name }) => <h1 className="header">{name}</h1>;

// This component renders a todo item which contains description and deadline
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: this.props.done };
    this.itemDone = this.itemDone.bind(this);
  }

  itemDone() {
    this.setState({ done: !this.state.done });
  }

  render() {
    const { description, deadline } = this.props;

    return (
      <li
        onClick={this.itemDone}
        className={`list-box ${this.state.done ? 'font-color' : 'bg-color-hover'}`}
      >
        <div>
          <span className={`block ${this.state.done && 'through'}`}>{description}</span>
          <span>{deadline}</span>
        </div>
      </li>
    );
  }
}

// This component renders static todo list
const StaticComponent = () => {
  return (
    <div className="class-div">
      <Header name="Static List" />
      <ul>
        <Todo description="Get out of bed" deadline="Wed Sep 13 2017" />
        <Todo description="Brush teeth" deadline="Thu Sep 14 2017" />
        <Todo description="Eat breakfast" deadline="Fri Sep 15 2017" />
      </ul>
    </div>
  );
};

// This component renders dynamic todo list
const DynamicComponent = ({ items }) => {
  return (
    <div className="class-div">
      <Header name="Dynamic List" />
      <ul>
        {items.map(elem => (
          <Todo
            key={elem.id}
            description={elem.description}
            deadline={elem.deadline}
            done={elem.done}
          />
        ))}
      </ul>
    </div>
  );
};

class Week1 extends React.Component {
  render() {
    return (
      <div className="title">
        <StaticComponent items={staticList} header="Static List" />
        <DynamicComponent items={dynamicList} header="Dynamic List" />
      </div>
    );
  }
}

export default Week1;

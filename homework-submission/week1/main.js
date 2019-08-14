'use strict';

const root = document.getElementById('thisIsWhereReactIsInjected');

const staticList = [
  'Get out of bed, Wed Sep 13 2017',
  'Brush teeth, Thu Sep 14 2017',
  'Eat breakfast, Fri Sep 15 2017'
];

const dynamicList = [
  {
    id: 1,
    description: 'Get out of bed',
    deadline: '2017-09-11',
    done: true
  },
  {
    id: 2,
    description: 'Brush teeth',
    deadline: '2017-09-10',
    done: false
  },
  {
    id: 3,
    description: 'Eat breakfast',
    deadline: '2017-09-09',
    done: false
  }
];

class Container extends React.Component {
  render() {
    return (
      <div className="flex">
        <StaticComponent array={staticList} header="Static Todo List" />
        <DynamicComponent array={dynamicList} header="Dynamic Todo List" />
      </div>
    );
  }
}

// Custom header title
const Title = ({ text }) => <h1 className="py-3 text-lg font-bold text-center uppercase">{text}</h1>;

// Check icon
const Icon = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      fill={color}
      d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"
    />
  </svg>
);

// Renders static todo list
const StaticComponent = () => {
  return (
    <div className="m-4 w-64">
      <Title text="Static List" />
      <ul className="shadow-2xl rounded-lg overflow-hidden">
        <TodoItem description="Get out of bed" deadline="Wed Sep 13 2017" />
        <TodoItem description="Brush teeth" deadline="Thu Sep 14 2017" />
        <TodoItem description="Eat breakfast" deadline="Fri Sep 15 2017" />
      </ul>
    </div>
  );
};

// Renders dynamic todo list
const DynamicComponent = ({ array }) => {
  return (
    <div className="m-4 w-64">
      <Title text="Dynamic List" />
      <ul className="shadow-2xl rounded-lg overflow-hidden">
        {array.map(item => (
          <TodoItem key={item.id} description={item.description} deadline={item.deadline} done={item.done} />
        ))}
      </ul>
    </div>
  );
};

// This component renders a todo item which contains description and deadline
class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: this.props.done };
    this.toggleDone = this.toggleDone.bind(this);
  }

  toggleDone() {
    this.setState({ done: !this.state.done });
  }

  render() {
    const { description, deadline } = this.props;

    return (
      <li
        onClick={this.toggleDone}
        className={`flex items-center p-3 bg-white leading-none cursor-pointer ${
          this.state.done ? 'text-gray-500' : 'hover:bg-gray-100'
        }`}
      >
        <span className={'mr-3'}>{<Icon color={this.state.done ? '#2F855A' : '#CCC'} />}</span>
        <div>
          <span className={`block font-bold ${this.state.done ? 'line-through' : ''}`}>{description}</span>
          <span>{deadline}</span>
        </div>
      </li>
    );
  }
}

ReactDOM.render(<Container />, root);

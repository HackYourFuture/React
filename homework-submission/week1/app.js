'use strict';

// The goal of this component is to get the description and deadline values from the TodoList static and dynamic which extends from React Component
const Item = props => {
  return (
    <div>
      <h1 className={props.done === true ? 'activate' : ''}>
        {props.description} {props.deadline}
      </h1>
    </div>
  );
};

const e = React.createElement;

class TodoList extends React.Component {
  // Here is static todo list
  staticTodoList = [
    { description: 'Get out of bed', deadline: 'Wed Sep 13 2017' },
    { description: 'Brush teeth', deadline: 'Thu Sep 14 2017' },
    { description: 'Eat breakfast', deadline: 'Fri Sep 15 2017' },
  ];

  // Here is dynamic todo list
  dynamicTodoList = [
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
        <Item
          description={this.staticTodoList[0].description}
          deadline={this.staticTodoList[0].deadline}
        />
        <Item
          description={this.staticTodoList[1].description}
          deadline={this.staticTodoList[1].deadline}
        />
        <Item
          description={this.staticTodoList[2].description}
          deadline={this.staticTodoList[2].deadline}
        />

        <div className="secondWrapper">
          {this.dynamicTodoList.map(todoList => (
            <Item
              key={todoList.id}
              done={todoList.done}
              description={todoList.description}
              deadline={todoList.deadline}
            />
          ))}
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(TodoList), domContainer);

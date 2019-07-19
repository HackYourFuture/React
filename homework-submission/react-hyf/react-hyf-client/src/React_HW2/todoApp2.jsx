import React from 'react';

function guidGenerator() {
  var S4 = function() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}

// ContentDynamicTodo component is for map function to use
const ContentDynamicTodo = ({ description, deadline, className, deleteItem }) => {
  return (
    <tr className={className} onClick={deleteItem}>
      <td className="content"> {description} </td>
      <td className="content"> {deadline} </td>
      <td className="content"> {className} </td>
    </tr>
  );
};

// DynamicList where map function is
const DynamicList = ({ list, deleteItem }) => {
  const runTodoList = list.map(todo => (
    <ContentDynamicTodo
      key={todo.id}
      description={todo.description}
      deadline={todo.deadline}
      className={todo.done ? '√' : 'x'}
      deleteItem={() => {
        deleteItem(todo.id);
      }}
    />
  ));
  return runTodoList;
};

// Here is our main Application component as a class
class AppTodoW2 extends React.Component {
  //TodoList which contains new item as state
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
      newTodo: {
        id: '',
        description: 'Description',
        deadline: 'No Deadline Entry',
        done: false,
      },
    };
  }

  NewTodoDescriptionAndDeadline = () => {
    return (
      <div>
        <div>
          <label> Description </label>
          <div id="containerDescriptionInput">
            <input
              type="text"
              onChange={event => {
                const inputValue = event.target.value;
                this.setState({
                  newTodo: {
                    ...this.state.newTodo,
                    description: inputValue,
                  },
                });
              }}
            />
          </div>
        </div>
        <div>
          <label htmlFor=""> Deadline </label>
          <div id="containerDateInput">
            <input
              type="date"
              onChange={event => {
                const inputValue = event.target.value;
                this.setState({
                  newTodo: {
                    ...this.state.newTodo,
                    deadline: inputValue,
                  },
                });
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  // function for adding todo
  addState = () => {
    const toDos = this.state.todoList;

    this.setState({
      newTodo: {
        ...this.state.newTodo,
        id: guidGenerator(),
      },
    });

    this.setState({
      todoList: [...toDos, this.state.newTodo],
    });
    console.log(this.state);
  };

  // function for deleting todo
  deleteItem = id => {
    const removeTodo = this.state.todoList.filter(todo => id !== todo.id);
    this.setState({
      todoList: removeTodo,
    });
  };

  render() {
    return (
      <div>
        <h1> Todo list as dynamic allows removing and adding items </h1>
        <table>
          <thead>
            <tr>
              <th className="contentTitle"> Description </th>
              <th className="contentTitle"> Deadline </th>
              <th className="contentTitle"> Done </th>
            </tr>
          </thead>
          <tbody>
            <DynamicList list={this.state.todoList} deleteItem={this.deleteItem} />
          </tbody>
        </table>
        <this.NewTodoDescriptionAndDeadline />
        <button onClick={this.addState}> Add </button>
      </div>
    );
  }
}

export default AppTodoW2;

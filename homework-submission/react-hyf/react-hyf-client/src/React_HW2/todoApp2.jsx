import React from 'react';

// ContentDynamicTodo component is for map function to use
const ContentDynamicTodo = ({ description, deadline, className, deleteItem }) => {
  return (
    <tbody>
      <tr className={className} onClick={deleteItem}>
        <td class="evenBackgroundColor">
          <td class="content"> {description} </td> <td class="content"> {deadline} </td>{' '}
          <td class="content"> {className} </td>{' '}
        </td>{' '}
      </tr>{' '}
    </tbody>
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
  return <tbody> {runTodoList} </tbody>;
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

  NewListItem = props => {
    // since we are using props here too!
    return (
      <p>
        <label htmlFor=""> Deadline </label>{' '}
        <div id="containerDateInput">
          {' '}
          <input
            id="inputDate"
            type="date"
            name={props.name} // since this is a component we can specify the name via props
            onChange={event => {
              const inputValue = event.target.value;
              this.setState({
                // using the name in this kind of use allowing use to modify the key name to be as we specify the value of it
                newTodo: {
                  ...this.state.newTodo,
                  deadline: inputValue,
                  id: Math.random(),
                },
              });
            }}
          />{' '}
        </div>{' '}
      </p>
    );
  };

  // Adding a description for new todo.
  NewTodoDescription = () => {
    return (
      <p>
        <label> Description </label>{' '}
        <div id="containerDescriptionInput">
          <input
            type="text"
            onChange={event => {
              const inputValue = event.target.value;
              this.setState({
                newTodo: {
                  ...this.state.newTodo,
                  description: inputValue,
                  id: Math.random(),
                },
              });
            }}
          />{' '}
        </div>{' '}
      </p>
    );
  };

  // Adding a deadline for new todo.
  NewTodoDeadline = () => {
    return (
      <p>
        <label htmlFor=""> Deadline </label>{' '}
        <div id="containerDateInput">
          {' '}
          <input
            id="inputDate"
            type="date"
            onChange={event => {
              const inputValue = event.target.value;
              this.setState({
                newTodo: {
                  ...this.state.newTodo,
                  deadline: inputValue,
                  id: Math.random(),
                },
              });
            }}
          />{' '}
        </div>{' '}
      </p>
    );
  };

  // function for adding todo
  addState = () => {
    this.setState({
      todoList: [...this.state.todoList, this.state.newTodo],
    });
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
        <h1> Todo list as dynamic allows removing and adding items </h1>{' '}
        <table>
          <thead>
            <tr>
              <th>
                <th class="contentTitle"> Description </th> <th class="contentTitle"> Deadline </th>{' '}
                <th class="contentTitle"> Done </th>{' '}
              </th>{' '}
            </tr>{' '}
          </thead>{' '}
          <DynamicList list={this.state.todoList} deleteItem={this.deleteItem} />{' '}
          <this.NewTodoDescription />
          <this.NewTodoDeadline />
          <button onClick={this.addState}> Add </button>{' '}
        </table>{' '}
      </div>
    );
  }
}
export default AppTodoW2;

'use strict';
function AddingForm({ addTodoItem }) {
  return (
    <div className='form'>
      <form onSubmit={addTodoItem} className='Add'>
        <input type='text' name='description' placeholder='Description' className='AddingList' />
        <input type='date' name='deadline' placeholder='Deadline' />
        <input type='submit' name='add' value='Add' className='submit' />
      </form>
    </div>
  );
}

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      dynamicList: [
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
    };
  }

  addItem = element => {
    element.preventDefault();
    const newTodo = {
      id: this.state.dynamicList.length + 1,
      description: element.target.description.value,
      deadline: element.target.deadline.value,
      done: false,
    };
    console.log(newTodo);
    this.setState({ dynamicList: this.state.dynamicList.concat(newTodo) });
  };
  removeItem = index => {
    const newTodoList = this.state.dynamicList.splice(index, 1);
    console.log(index);

    this.setState({ todoList: newTodoList });
  };
  render() {
    return (
      <div>
        <h1>Dynamic List</h1>
        <AddingForm addTodoItem={this.addItem} />

        {this.state.dynamicList.map((todoList, index) => (
          <div className='todoList'>
            <li
              key={todoList.id}
              style={
                todoList.done === true ? { textDecoration: 'line-through' } : { textDecoration: '' }
              }
            >
              {todoList.description},{todoList.deadline}
              <button onClick={() => this.removeItem(index)}>remove</button>
            </li>
          </div>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<TodoList />, document.getElementById('root'));

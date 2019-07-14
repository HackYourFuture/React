import React from 'react';

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
      id: Math.random()
        .toString(36)
        .substr(2, 10),
      description: element.target.description.value,
      deadline: element.target.deadline.value,
      done: false,
    };

    this.setState({ dynamicList: this.state.dynamicList.concat(newTodo) });
  };
  removeItem = index => {
    const newTodoList = this.state.dynamicList.filter(item => item.id !== index);

    this.setState({ dynamicList: newTodoList });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Dynamic List</h1>
        <AddingForm addTodoItem={this.addItem} />

        {this.state.dynamicList.map(item => (
          <div
            className='todoList'
            key={item.id}
            style={item.done === true ? { textDecoration: 'line-through' } : { textDecoration: '' }}
          >
            {item.description},{item.deadline}
            <button onClick={() => this.removeItem(item.id)}>remove</button>
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;

import React from 'react';
import Item from '../src/components/Item';

class TodoList extends React.Component {
  state = {
    todoList: [
      {
        title: 'either to reject the provision blinded welcome the option to find ',
        description: 'the pain he may please the some of the things the power of life',
      },
      {
        title: 'it will be blinded',
        description: 'any and often rejecting a pleasure to get  mānsit film will take to provide',
      },
      {
        title: ' do you hate',
        description: 'rationally come to seek out and  nal or to avoid it,',
      },
    ],
    todoValue: { title: '', description: '' },
  };

  handleChange = ({ target: input }) => {
    console.log(this.state.data);
    const todoValue = { ...this.state.todoValue };

    todoValue[input.name] = input.value;
    this.setState({ todoValue });
  };

  handleDelete = todo => {
    const { todoList } = this.state;
    const filteredData = todoList.indexOf(todo);
    todoList.splice(filteredData, 1);

    this.setState({ todoList });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { todoList, todoValue } = this.state;
    if (todoValue.title !== '' && todoValue.description !== '') {
      todoList.push(todoValue);
      this.setState({ todoList });
    } else {
      alert('Please fill all fields');
    }
  };

  render() {
    let message;
    const { length: count } = this.state.todoList;
    if (count === 0) {
      message = <p className="head">There are no todos to display.</p>;
    } else {
      message = <p className="head">Showing {count} todos.</p>;
    }

    return (
      <div>
        {message}
        <div className="secondWrapper">
          {this.state.todoList.map((todo, i) => {
            return (
              <React.Fragment key={i}>
                <Item
                  title={todo.title}
                  description={todo.description}
                  clicked={() => this.handleDelete(todo)}
                />
              </React.Fragment>
            );
          })}
        </div>

        <form onSubmit={this.handleSubmit}>
          <h1>Insert your data</h1>
          <input type="text" placeholder="Title Field" name="title" onChange={this.handleChange} />
          <input
            type="text"
            placeholder="Description Field"
            name="description"
            onChange={this.handleChange}
          />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default TodoList;

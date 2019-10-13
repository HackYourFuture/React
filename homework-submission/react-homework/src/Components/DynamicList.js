import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h3>Todo List</h3>
        <span className="stats">Type:Dynamic</span>
      </header>
    );
  }
}

class TodoItem extends Component {
  render() {
    return (
      <div className="todoItem">
        <span
          onClick={this.props.click}
          className={`todoItem-name ${this.props.done ? ' line-through' : ''}`}
        >
          {this.props.description}, {this.props.deadline} {this.props.done}
        </span>
      </div>
    );
  }
}

class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.click}>
          <input type="text" name="description" className="item" />
          <button className="btn-add-item">Add New Item</button>
        </form>
      </div>
    );
  }
}

class DynamicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
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
      ]
    };
    this.deleteItemHandler = this.deleteItemHandler.bind(this);
    this.onSubmitHandle = this.onSubmitHandle.bind(this);
  }

  deleteItemHandler = itemIndex => {
    // const persons = this.state.persons.slice();
    const items = [...this.state.items];
    items.splice(itemIndex, 1);
    this.setState({ items: items });
  };

  onSubmitHandle = event => {
    event.preventDefault();
    this.setState({
      items: [
        ...this.state.items,
        {
          id: 5,
          description: event.target.description.value,
          done: false,
          deadline: '2017-09-09'
        }
      ]
    });
    event.target.description.value = '';
  };

  render() {
    const todos = this.state.items.map(item => {
      return (
        <TodoItem
          click={this.deleteItemHandler}
          key={item.id}
          description={item.description}
          deadline={item.deadline}
          done={item.done}
        />
      );
    });
    return (
      <div className="todoList">
        <Header />
        {todos}
        <Form click={this.onSubmitHandle} />
      </div>
    );
  }
}

export default DynamicList;

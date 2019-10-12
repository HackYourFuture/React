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

class AddItem extends Component {
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
    this.onSubmitHandle = this.onSubmitHandle.bind(this);
  }

  onSubmitHandle = event => {
    event.preventDefault();
    this.setState({
      items: [
        ...this.state.items,
        {
          id: Date.now(),
          description: event.target.description.value,
          done: false,
          deadline: new Date()
        }
      ]
    });
    event.target.description.value = '';
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandle.bind(this)}>
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
  }

  deleteItemHandler = itemIndex => {
    // const persons = this.state.persons.slice();
    const items = [...this.state.items];
    items.splice(itemIndex, 1);
    this.setState({ items: items });
  };

  render() {
    const todos = this.state.items.map((item, i) => {
      return (
        <TodoItem
          click={() => this.deleteItemHandler(i)}
          key={i}
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
        <AddItem />
      </div>
    );
  }
}

export default DynamicList;

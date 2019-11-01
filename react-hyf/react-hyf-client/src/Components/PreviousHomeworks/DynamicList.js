import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Header from './Header';
import Form from './Form';
import uuid from 'uuid/v4';

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
  }

  deleteItemHandler = itemIndex => {
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
          id: uuid(),
          description: event.target.description.value,
          done: event.target.done.value,
          deadline: event.target.deadline.value
        }
      ]
    });
    event.target.description.value = '';
  };

  render() {
    const todos = this.state.items.map((item, index) => {
      return (
        <TodoItem
          click={() => this.deleteItemHandler(index)}
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

import React, { Component } from 'react';
import './App.css';
import data from './data';
import Header from './Header';
import AddForm from './AddForm';
import Todo from './Todo';

class App extends Component {
  state = {
    data,
  };

  handleSubmit = newItem => {
    let newData = this.state.data;
    newData.push(newItem);
    this.setState({ data: newData });
  };
  handleChange = i => {
    data[i].done = !data[i].done;
    this.setState({ data });
  };
  handleUpdate = (updatedItem, i) => {
    let data = [...this.state.data];
    data[i].description = updatedItem.description;
    data[i].done = false;
    this.setState({ data });
  };
  handleRemove = i => {
    this.state.data.splice(i, 1);
    this.setState({ data });
  };
  render() {
    const todos1 = [];
    const todos2 = [];
    data.forEach((item, index) =>
      item.done
        ? todos1.push(
            <Todo
              item={item}
              key={item.id}
              index={index}
              handleChange={this.handleChange}
              onRemove={this.handleRemove}
              handleUpdate={this.handleUpdate}
            />
          )
        : todos2.push(
            <Todo
              item={item}
              key={item.id}
              index={index}
              handleChange={this.handleChange}
              onRemove={this.handleRemove}
              handleUpdate={this.handleUpdate}
            />
          )
    );
    return (
      <div id="main">
        <div className="adding-form">
          <Header />
          <AddForm onSubmit={this.handleSubmit} />
        </div>
        <div className="undone">{data.length === 0 ? 'No items...' : todos1}</div>
        <div className="done">{data.length === 0 ? 'No items...' : todos2}</div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import data from './data';
import Header from './Header';
import Form from './Form';
import Todo from './Todo';
import Edit from './Edit';

class App extends Component {
  state = {
    editing: false,
    data,
  };

  handleSubmit = newItem => {
    let newData = data;
    newData.push(newItem);
    this.setState({ data: newData });
  };
  handleChange = item => {
    let i = data.indexOf(item);
    data[i].done = !data[i].done;
    this.setState({ data });
  };
  handleUpdate = (updatedItem, item) => {
    let i = data.indexOf(item);
    data[i].description = updatedItem.description;
    data[i].done = false;
    this.setState({ data: this.state.data, editing: false });
  };
  handleRemove = item => {
    let i = data.indexOf(item);
    data.splice(i, 1);
    this.setState({ data });
  };
  handleEdit = item => this.setState({ editing: data.indexOf(item) });
  handleCancel = () => this.setState({ editing: false });

  render() {
    const todos = this.state.data.map(item =>
      this.state.editing === data.indexOf(item)  ? (
        <Edit
          item={item}
          key={item.id}
          onUpdate={this.handleUpdate}
          handleCancel={this.handleCancel}
        />
      ) : (
        <Todo
          item={item}
          key={item.id}
          handleChange={this.handleChange}
          onRemove={this.handleRemove}
          onEdit={this.handleEdit}
        />
      )
    );
    return (
      <div className="App">
        <Header />
        <Form onSubmit={this.handleSubmit} />
        {this.state.data.length === 0 ? 'No items...' : todos}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import data from './data';
import Header from './Header';
import Form from './Form';
import Todo from './Todo';
import Edit from './Edit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      data,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(newItem) {
    let newData = this.state.data;
    newData.push(newItem);
    this.setState({ data: newData });
  }
  handleChange(item) {
    let i = data.indexOf(item);
    data[i].done = !data[i].done;
    this.setState({ data });
  }
  handleUpdate(updatedItem, item) {
    let i = data.indexOf(item);
    data[i].description = updatedItem.description;
    data[i].done = false;
    this.setState({ data: this.state.data, editing: false });
  }
  handleRemove(item) {
    let i = data.indexOf(item);
    data.splice(i, 1);
    this.setState({ data });
  }
  handleEdit(item) {
    this.setState({ editing: item.id });
  }
  handleCancel() {
    this.setState({ editing: false });
  }

  render() {
    const todos = this.state.data.map(item =>
      this.state.editing === item.id ? (
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
        <Form onSubmit={this.handelSubmit} />
        {this.state.data.length === 0 ? 'No items...' : todos}
      </div>
    );
  }
}

export default App;

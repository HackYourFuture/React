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
    this.handelSubmit = this.handelSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handelSubmit(newItem) {
    var newData = this.state.data;
    newData.push(newItem);
    this.setState({ data: newData });
  }
  handleChange(item) {
    let i = data.indexOf(item);
    data[i].done = !data[i].done;
    this.setState({ data });
  }
  handleUpdate(updatedItem) {
    this.state.data.forEach(item => {
      if (item.id === updatedItem.id) {
        item.description = updatedItem.description;
      }
    });
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

  render() {
    const todos = this.state.data.map(item =>
      this.state.editing === item.id ? (
        <Edit item={item} key={item.id} onUpdate={this.handleUpdate} />
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

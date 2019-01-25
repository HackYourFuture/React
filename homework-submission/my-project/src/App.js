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
  handleRemove = item => {
    let i = data.indexOf(item);
    data.splice(i, 1);
    this.setState({ data });
  };
  render() {
    const todos = this.state.data.map((item, index) => (
      <Todo
        item={item}
        key={item.id}
        index={index}
        handleChange={this.handleChange}
        onRemove={this.handleRemove}
        handleUpdate={this.handleUpdate}
      />
    ));
    return (
      <div className="App">
        <Header />
        <AddForm onSubmit={this.handleSubmit} />
        {data.length === 0 ? 'No items...' : todos}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Form from './Components/Form';
import List from './Components/List';
import './App.css';

@inject('TasksStore')
@observer

class App extends Component {
  componentWillMount() {
    this.props.TasksStore.getTodos();
  }
  render() {
    const {
      handleAdd,
      handleCheck,
      data
    } = this.props.TasksStore;
    return (
      <div className="App">
        <Form
          onAdd={handleAdd}

        />
        <List
          handleCheck={handleCheck}
          todos={data}
        />
      </div>
    );
  }
}

export default App;

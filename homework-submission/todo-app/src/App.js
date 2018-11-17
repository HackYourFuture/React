import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Form from './Components/Form';
import List from './Components/List';
import './App.css';

@inject('TasksStore')
@observer

class App extends Component {
  render() {
    const { TasksStore } = this.props;
    return (
      <div className="App">
        <Form
          onAdd={TasksStore.handleAdd}

        />
        <List
          handleCheck={TasksStore.handleCheck}
          todos={TasksStore.todos}
          handleRemove={TasksStore.handleRemove}

        />
      </div>
    );
  }
}

export default App;

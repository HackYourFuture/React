import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Todo from './Todo';
import Form from './Form';
import { inject, observer } from 'mobx-react';

@inject('TodoStore')

@observer
class App extends Component {


  render() {
    const { isDoneCheck, AddItems, removeItems, TodosList } = this.props.TodoStore;
    return (
      <div className="App" >
        <Header />
        <div>
          <Form AddItems={AddItems} />

          <Todo isDoneCheck={isDoneCheck} TodosList={TodosList}
            removeItems={removeItems} />
        </div>

      </div>

    );
  }
}

export default App;

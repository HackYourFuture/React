import React, { Component } from 'react';
import { Provider } from 'mobx-react'
import stores from './stores'
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { loadFromLocalStorage, saveToLocalStorage } from './storage/localStoarge';
export default class App extends Component {

  render() {

    return (

      <Provider {...stores}>
       <React.Fragment>
        <Form
            addNewTask={this.addNewTask}
        />

        <List
            toggleDone={this.toggleDone}  
            deleteTask={this.deleteTask}
        />
       </React.Fragment>
      </Provider>
    );
  }
}

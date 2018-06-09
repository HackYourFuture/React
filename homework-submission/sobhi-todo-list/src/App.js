
import React from 'react';

import './App.css';

import ToDoItems from './ToDoItems';

import Header from './Header';

export default class App extends React.Component {

  render() {

    return (

      <div className="App" >

        <Header />

        <ToDoItems />

      </div >

    );
  }
}


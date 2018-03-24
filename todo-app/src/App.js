import React, { Component } from 'react';
import Header from './Components/Header'
import Container from './Components/Container'
import {Provider} from 'mobx-react'

import Stores from './Stores/index'
import './App.css';

class App extends Component {

  render() {

    return (
      <Provider {...Stores}>
        <div className="App">
            <Header className="Header"/>
            <Container />
        </div>
      </Provider>
      
    );
  }
}

export default App;

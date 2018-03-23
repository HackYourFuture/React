import React, { Component } from 'react'
import { Provider } from "mobx-react"

import stores from "./stores"

import "./style.css"
import Header from "./components/Header.js"
import TodoList from "./components/TodoList"
import AddingContainer from "./components/AddingContainer"
import FeaturesContainer from "./components/FeaturesContainer"


export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <React.Fragment>
          <Header />
          <AddingContainer  />
          <FeaturesContainer  />
          <TodoList />
        </React.Fragment>
      </Provider>
    );
  }
}

 

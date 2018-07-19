import React, { Component } from "react";
import "./App.css";
import Forms from "./components/forms";
import TodoItems from "./components/TodoItems";
import { inject, observer } from "mobx-react";
import Header from "./components/header";

@inject("RashadStore")
@observer
class App extends Component {
  render() {
    const {
      checker,
      submitHandler,
      remover,
      todosList,
      count
    } = this.props.RashadStore;

    return (
      <div className="App">
        <Header className="header" />
        <Forms submitHandler={submitHandler} />
        <TodoItems
          id="todosList"
          checker={checker}
          todosList={todosList}
          remover={remover}
        />
        {count}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Forms from "./components/forms";
import ItemsTodo from "./components/items";
import { inject, observer } from "mobx-react";

@inject("Stores")
@observer
class App extends Component {
  render() {
    const { checker, submitHandler, remover, todos, count } = this.props.Stores;

    return (
      <div className="App">
        <Forms submitHandler={submitHandler} />
        <ItemsTodo
          id="Todos"
          checker={checker}
          todos={todos}
          remover={remover}
        />
        {count}
      </div>
    );
  }
}

export default observer(App);

//export default App;

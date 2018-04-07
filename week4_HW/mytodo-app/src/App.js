import React, { Component } from 'react'
import TodoList from './components/TodoList'
import { Provider } from 'mobx-react' 
import stores from './stores'


class App extends Component {
  render() {

    return (
      <Provider {...stores}>
        <div className="App">
          <TodoList/>
        </div>
      </Provider>  
    );
  }
}

export default App;


//dataFromApp = { this.state.isDone }
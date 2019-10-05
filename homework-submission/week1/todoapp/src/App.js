import React, { Component } from 'react';
//we need to pass todo components to the todos.js component so via props we do it, first import todos component into here so we can nest it
import Todos from './Todos';
//name of our component and passed it a function inside that function we want to return some kind of template

class App extends Component {
  state = {
    todos: [
      { id: 1, content: ' Get out of bed', deadline: 'Wed Sep 13 2017' },
      { id: 2, content: 'Brush teeth', deadline: 'Thu Sep 14 2017' },
      { id: 3, content: 'Eat breakfast', deadline: 'Fri Sep 15 2017' },
    ],
  };
  //we have our state stored in this route component
  render() {
    //this is here our route component and its going to be a container which going to store the state of our application, we are going to store the todoes inside the state of this component
    //this return is where we ultimately want to render our todos
    // this is another component for listing individual todoes
    return (
      //here we can nest our Todo component and pass it some props with name of todos, inside the curly brackets because it going to be dynamic and we are gonna pass it into todos property above
      //{this.state.todos} >> this going to pass that array into the state component above, and we can access those todos inside the Todos file/component so we need to accept those props over there>> go to that file Todos.js to see more
      <div className="App">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;

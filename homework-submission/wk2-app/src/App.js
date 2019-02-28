import React, { Component } from 'react';
import Input from './component/Input.js';
import Btn from './component/Btn.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      arrTodo: [
        {
          title: 'react',
          done: false,
        },
        {
          title: 'homework',
          done: false,
        },
      ],
      greeting: {
        value: 'Welcome to the Todo App',
      },
    };
  }
  handleInput(event) {
    this.setState({
      todo: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      todo: '',
      arrTodo: [
        ...this.state.arrTodo,
        {
          title: this.state.todo,
          done: false,
        },
      ],
    });
  }
  handleDoneBtn(elem) {
    elem.done === false ? (elem.done = true) : (elem.done = false);
  }

  handleRemoveBtn(ind) {
    const arrTodo = [...this.state.arrTodo];
    arrTodo.splice(ind, 1);
    this.setState({
      arrTodo,
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.greeting.value}</h1>
        <form onSubmit={this.handleSubmit.bind(this)} className="Form">
          <label htmlFor="todo" />
          <Input
            value={this.state.todo}
            onChange={this.handleInput.bind(this)}
            type="text"
            className="inputForm"
            id="todo"
          />
          <Btn name="add" className="btnForm" type="submit" />
        </form>
        <ul>
          {this.state.arrTodo.map((elem, ind) => {
            return (
              <li key={ind}>
                {elem.title}
                <Input type="checkbox" onChange={() => this.handleDoneBtn(elem)} />
                <Btn name="X" className="listBtn" onClick={() => this.handleRemoveBtn(ind)} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;

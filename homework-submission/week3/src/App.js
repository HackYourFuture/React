import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TODOList from './components/TODOList';
import AddingForm from './components/AddingForm';
import Data from './TODOS.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: Data,
    }
  }

  checkStatus = (id) => {
    const newTodoItems = this.state.items.map((element) => {
      if (id === element.id) {
        return {
          ...element,
          done: !element.done
        }
      }
      return element;
    });
    this.setState({ items: newTodoItems });
  }

  addTodoItem = (e) => {
    e.preventDefault();
    const newTodoItems = {
      "id": this.state.items.length + 1,
      "description": e.target.description.value,
      "deadline": e.target.deadline.value,
      "done": false
    }
    this.setState({ items: this.state.items.concat(newTodoItems) });
  }

  removeTodoItem = (id) => {
    const newTodoItems = this.state.items.map((element) => {
      if (id === element.id) {
        this.state.items.splice(element.id - 1, 1)
      }
      return element;
    });

  }

  render() {
    const title = 'My TODO List';
    return (
      <div className="root">
        <div className="App">
          <Header />
          <section>
            <h1>{title}</h1>

            <AddingForm addTodoItem={this.addTodoItem} />

            {this.state.items.map((element, index) => {
              return < TODOList
                key={index}
                TODO_Id={element.id}
                TODO_Description={element.description}
                TODO_Deadline={element.deadline}
                TODO_Status={element.done}
                checkStatus={this.checkStatus}
                removeTodoItem={this.removeTodoItem}
              />
            })
            }

          </section>
        </div>
      </div>
    );
  }
}

export default App;

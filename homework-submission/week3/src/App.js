import React, {
  Component
} from 'react';
import './App.css';
import Header from './Header';
import Todo from './Todo';
import TodoList from './TodoList.json';
import Form from './Form';

class App extends Component {
  state = {
    data: TodoList
  };


  isDoneCheck = (id) => {
    const todoItem = this.state.data.map((element) => {
      if (id === element.id) {
        return {
          ...element,
          done: !element.done
        }
      }
      return element;
    });
    this.setState({ data: todoItem });
  }

  AddItems = (event) => {
    event.preventDefault();
    const NewTodo = {
      "id": this.state.data.length + 1,
      "description": event.target.description.value,
      "deadline": event.target.deadline.value,
      "done": false
    }
    this.setState({ data: this.state.data.concat(NewTodo) });
  }

  removeItems = (i) => {
    const NewTodo = this.state.data.map((item) => {
      if (i === item.id) {
        this.state.data.splice(1, 1);
      }
      return item;
    });
    this.setState({ data: NewTodo });
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <Form AddItems={this.AddItems} />
        <div >
          {this.state.data.map((element, index) =>
            <Todo
              key={index}
              todoId={element.id}
              text={element.description}
              date={element.deadline}
              status={element.done}
              isDoneCheck={this.isDoneCheck}
              removeItems={this.removeItems} />
          )}
        </div>

      </div>

    );
  }
}

export default App;

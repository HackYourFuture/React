import React from 'react';
import './App.css';
import todos from "./components/todos.json";
import TodoList from "./components/TodoList";


class App extends React.Component {
  state = {
    todos,
    task: "",
    date: ""
  };

  // submitHandler = (e) => {
  //   e.preventDefault();
  //   let { todos } = this.state;
  //   todos.push(e.target.value);
  //   this.setState({
  //     task: e.target.task.value,
  //     date: e.target.date.value
  //   });
  // }

  render() {

    return (
      <div className="App" >
        {/* <img className="image"
          src="https://cdn-images-1.medium.com/max/2000/1*o-9xgkkyBgkhnBVN_Wxs6Q.png" /> */}

        <ul>
          <TodoList />
        </ul>

      </div>
    )
  }

}
export default App;

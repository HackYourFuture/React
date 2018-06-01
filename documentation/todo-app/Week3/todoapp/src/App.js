import React, { Component } from 'react';
import './App.css';
// import TodoJsonList from './TodoJsonList';
import InputForm from './components/InputForm';
import ItemsList from './components/ItemsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sam's updated Week2 React homework</h1>
        </header>
        <p className="App-intro">
          Below is my TodoApp:
        </p>

        <InputForm />

        {/* <form className='input-form' onSubmit={this.addTodo}>
          <input
            className='todo-input'
            type='text'
            placeholder='Add the task here, then press ENTER'
            // onKeyUp={this.addTodo}
            ref={this.itemInput}
          />
          <input className='deadline-input'
            type='date'
            placeholder='Pick your deadline'
            ref={this.deadlineInput}
          />
          <button type='submit' className='add-button'>Add </button>
        </form> */}


        <ItemsList />

        {/* <div className='list-format'>
          <div>
            {this.state.TodoJsonList.map((todo, index) => {
              return (
                <div key={index + 1} className='list-format'>
                  <p>{index + 1}</p>
                  <input type='checkbox' className='checkBox' onChange={(event) => { this.checkItem(todo, index, event) }} />
                  <p className={'todo-desc' + (todo.done ? ' completed' : '')}><strong>Description: </strong>{todo.description}.</p>
                  <p className={(todo.done ? ' completed' : '')}><strong>Deadline: </strong>{todo.deadline}</p>
                  <button className='remove-item' onClick={(event) => this.deleteTodo(index)}> X </button>
                </div>
              );
            })}
          </div>

        </div> */}

      </div>
    );
  }


  // state = {
  //   TodoJsonList
  // }

  // itemInput = React.createRef();
  // deadlineInput = React.createRef();

  // addTodo = (event) => {
  //   event.preventDefault();
  //   // if (event.key === 'Enter') {
  //   const itemInput = this.itemInput.current.value;
  //   const deadlineInput = this.deadlineInput.current.value;

  //   if (!itemInput || !deadlineInput) {
  //     alert('Please fill up');
  //   }

  //   this.setState((prevState) => {
  //     let lastList = prevState.TodoJsonList;

  //     lastList.push({
  //       id: Date.now(),
  //       description: itemInput,
  //       deadline: deadlineInput,
  //       done: false
  //     });

  //     return {
  //       TodoJsonList: lastList
  //     }

  //   })

  //   this.itemInput.current.value = '';
  //   this.deadlineInput.current.value = '';
  // }

  // deleteTodo = (index) => {
  //   this.setState((prevState) => {
  //     let lastList = prevState.TodoJsonList;

  //     lastList.splice(index, 1);
  //     return {
  //       TodoJsonList: lastList
  //     }
  //   })
  // }

  // checkItem = (todo, index, event) => {
  //   this.setState((prevState) => {
  //     let lastList = prevState.TodoJsonList;
  //     todo.done = !todo.done;

  //     lastList.splice(index, 1, todo);

  //     return {
  //       TodoJsonList: lastList
  //     }

  //   })
  // }
}
// }

export default App;

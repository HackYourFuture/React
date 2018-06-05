import React, { Component } from 'react';
import moment from 'moment';

//Components
import './App.css';
import Header from './components/Header';
import Photo from './components/Photo';
import TodoItems from './components/TodoItems';
import AddTodoForm from './components/AddTodoForm';

//DATA
import todoData from './components/data/todo.json';


class App extends Component {
  state =  {
    items: todoData,
   }
 
  

  checkStatus = (id) => {
    const newItems = this.state.items
    .map((element, index) => {
      if (id === element.id) {
        return {
          ...element,
          done: !element.done
        }
      } 
      return element; 
    });
    this.setState({ items: newItems });
    }
    
 

  createTodoTask = (fields) => {
    const todoIds = this.state.items.map(item => item.id);
    const newTodoId = Math.max(...todoIds) + 1;
    const updatedState = {
      ...fields,
      id: newTodoId,
      createdAt:moment().format('YYYY-MM-DD , h:mm a')
    }
    this.setState({
      items: [
        ...this.state.items,
        updatedState,
      ]
    });
  }
 
  handleDelete = (itemToBeDeleted) => {
    const newItems = this.state.items.filter((_item) => {
      return _item !== itemToBeDeleted
    });
 
    
    this.setState({ items: newItems });
  }


  


  render() {
    return (
      <div className="App">
        <Header />
        <h2>{moment().format('MMMM Do YYYY , h:mm a')}</h2>
        <Photo />    
        <AddTodoForm
          createTodoTask={this.createTodoTask}
        />
        {this.state.items.map((element, index) =>
          <TodoItems
            elements={element}  
            todoId={element.id}
            todoTask={element.description}
            createdAt={element.createdAt}
            taskDate={element.deadline}
            todoStatus={element.done}
            checkStatus={this.checkStatus}
            handleDelete={this.handleDelete}
          />
        )}   
        
        
      </div>
    );
  }
}

export default App;

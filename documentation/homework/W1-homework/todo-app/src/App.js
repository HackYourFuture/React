import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Photo from './components/Photo';
import TodoItems from './components/TodoItems';

class App extends Component {
  
  state = {
    items: [
      {
        "id": 1,
        "description": "Get out of bed",
        "deadline": "2017-09-11",
        "done": true
      },
      {
        "id": 2,
        "description": "Brush teeth",
        "deadline": "2017-09-10",
        "done": false
      },
      {
        "id": 3,
        "description": "Eat breakfast",
        "deadline": "2017-09-09",
        "done": false
      }
    ]
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
    

   

 

  render() {
    return (
      <div className="App">
        <Header />
        <Photo />    
        
        {this.state.items.map((element, index) =>
          <TodoItems
            todoId={element.id}
            todoTask={element.description}
            taskDate={element.deadline}
            todoStatus={element.done}
            checkStatus={this.checkStatus}
          />
        )}       
      </div>
    );
  }
}

export default App;

import React, {
  Component
} from 'react';
import './App.css';
import Header from './Header';
import Todo from './Todo';

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

  isDoneCheck = (id) => {
    const todoItem = this.state.items.map((element) => {
      if (id === element.id) {
        return {
          ...element,
          done: !element.done
        }
      }
      return element;
    });
    this.setState({ items: todoItem });
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <div >
          {this.state.items.map((element,index) =>
            <Todo
               key={index}
              todoId={element.id}
              text={element.description}
              date={element.deadline}
              status={element.done}
              isDoneCheck={this.isDoneCheck}
            />
          )}
        </div>

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TODOList from './components/TODOList';
import Data from './TODOS.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: Data,
    }
  }

  checkStatus = (id) => {
    const newItems = this.state.items.map((element) => {
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
    const title = 'My TODO List';
    return (
      <div className="root">
        <div className="App">
          <Header />
          <section>
            <h1>{title}</h1>
            {this.state.items.map((element, index) => {
              return < TODOList
                key={index}
                TODO_Id={element.id}
                TODO_Description={element.description}
                TODO_Deadline={element.deadline}
                TODO_Status={element.done}
                checkStatus={this.checkStatus}
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

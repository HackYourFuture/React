import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ItemsComponent from './components/ItemsComponent'
import './App.css'

class App extends Component {
  state = {
    items: {
      1: {
        item: 'Get out of bed',
        completed: false
      },
      2: {
        item: 'Brush teeth',
        completed: false
      }
    }
  }
  completeItem = id => {
    let items = {
      ...this.state.items,
      [id]: { ...this.state.items[id], completed: true }
    }
    this.setState({
      items
    })
  }
  deleteItem = id => {
    let { [id]: deleted, ...items } = this.state.items
    this.setState({
      items
    })
  }
  addItem = e => {
    e.preventDefault()
    let items = {
      ...this.state.items,
      [new Date().valueOf()]: {
        item: this.todoItem.value,
        completed: false
      }
    }
    this.setState({
      items
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrap">
          <h2>Todo App</h2>
          <ul className="menu">
            <li>
              <Link to={'/'}>To do</Link>
            </li>
            <li>
              <Link to={'/completed'}>Completed</Link>
            </li>
          </ul>
          <Route
            exact
            path="/"
            render={props => (
              <ItemsComponent
                items={this.state.items}
                done={false}
                action={this.completeItem}
                addItem={this.addItem}
                inputRef={el => (this.todoItem = el)}
              />
            )}
          />
          <Route
            exact
            path="/completed"
            render={props => (
              <ItemsComponent
                items={this.state.items}
                done={true}
                action={this.deleteItem}
              />
            )}
          />
        </div>
      </BrowserRouter>
    )
  }
}
export default App

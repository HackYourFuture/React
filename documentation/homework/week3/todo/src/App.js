import React, { Component } from 'react';
import './App.css';
import moment from 'moment'

// Components
import AssignItem from './components/Assign'
import ListItem from './components/ListItem'

// Params
import Params from './Params/locals'

class App extends Component {
  state = {
    list: []
  }
  componentWillMount() {
    this.setState({
      list: Params.getLocals || []
    })
  }
  handleRemove = (event, local_id) => {
    this.setState({
      list: Params.removeLocal(local_id)
    })
  }
  handleAssign = (event) => { // Inserting Values
    event.preventDefault()
    const { deadline, description } = event.target
    const MOMENT_FORMAT = ["MM-DD-YYYY", "YYYY-MM-DD", "YYYY/MM/DD", "MM/DD/YYYY"]
    this.setState({
      list: Params.saveLocal( // the Id is automaticly generats
        Params.getLocals,
        {
          description: description.value,
          deadline: moment(deadline.value, MOMENT_FORMAT).format('LLLL')
        }
      )
    })
  }
  handleCheckboxUpdate = (event, local_id) => {
    this.setState({
      list: Params.updateLocal(local_id, 'done', event.target.checked)
    })
  }
  render() {
    return (
      <div className="App">
        <AssignItem handleAssign={this.handleAssign} list={this.state.list} />
        <ul>
          {
            this.state.list.map(item => {
              return (
                <li key={item.id} className={item.done ? 'done' : ''}>
                  <ListItem
                    id={item.id}
                    done={item.done}
                    handleCheckboxUpdate={this.handleCheckboxUpdate}
                    handleRemove={this.handleRemove}
                    description={item.description}
                    deadline={item.deadline}
                  />
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;

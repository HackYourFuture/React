import React, { Component } from 'react';
import './App.css';

import HomeworkWeek3 from './components/createDynamiclistUsers';
import PreviousHomeworks from './PreviousHomeworks ';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    //fetch users
    this.fetchusers().then(users => {
      this.setState({
        users,
      });
    });
  }

  fetchusers = async () => {
    const response = await fetch(' https://uinames.com/api/?amount=10');
    const data = await response.json();
    return data;
  };

  render() {
    return (
      <div className="TodoListMain">
        <div className="header">
          <br />
          <h1> Fetch API</h1>
          <HomeworkWeek3 entries={this.state.users} />
          <PreviousHomeworks />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import User from './User';
import { observer, inject } from 'mobx-react';

import './App.css';

@inject('User')
@observer
class App extends Component {

  render() {
    const store = this.props.User;
    return (
        <div className="App">
          <User
          name={store.nameWithGreetings}
          changeName={store.addNewName}/>
        </div>
    );
  }
}

export default App;

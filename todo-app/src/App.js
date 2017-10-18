import React from 'react';
// or  import React, { Component } from 'react';
// then line 6 will be  
// export default class App extends Component {

import Tasks from './Tasks'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ToDo List:</h1>
        <Tasks />
      </div>
    );
  }
}

// export default App; or what we did in line 6

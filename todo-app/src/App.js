// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         Hello World!
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import Tasks from './Task'
import task from './taskDB'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ToDo:</h1>
        <div>
          {task.map((task, index) => {
            return (
              <Tasks
                key={index}
                task={task}
              />

            );
          }
          )}
        </div>
      </div>
    );
  }
}


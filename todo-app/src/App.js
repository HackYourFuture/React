import React from 'react';
import Tasks from './Tasks'
import action from './actions'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ToDo List:</h1>
        <div>
          {action.map((action, index) => {
            return (
              <Tasks
                key={index}
                task={action}
              />

            );
          }
          )}
        </div>
      </div>
    );
  }
}
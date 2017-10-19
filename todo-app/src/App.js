import React from 'react';
import Tasks from './Tasks'
import task from './TasksDB'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ToDo List:</h1>
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


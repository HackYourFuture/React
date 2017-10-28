import React from 'react';
import Task from './Tasks'
import tasks from './TasksDB'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ToDo List:</h1>
        <div>
          {tasks.length > 0 ?

            tasks.map((task, index) => {
              return (
                <Task
                  key={index}
                  task={task}
                />
              );

            })
            : (" No Items ... ")}
        </div>
      </div>
    );
  }
}


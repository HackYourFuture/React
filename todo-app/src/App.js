<<<<<<< HEAD
import React, { Component } from 'react';
import TodosList from './todosList'
import Todo from './todo'
import './App.css'
=======
// import React, { Component } from 'react';
>>>>>>> 3736327cdf25edd8a2cb7314d56e45fa6c863768

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
<<<<<<< HEAD
      <div className='App'>
        <h1>Todo List App</h1>
        {TodosList.length!==0 ? TodosList.map((todo, index) => {
          return (
            <Todo key={index}
            description={todo.description}
            done={todo.done}
            />
          )
         }) : ("No list")}
        </div>
      )
    }
    }

export default App
=======
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

>>>>>>> 3736327cdf25edd8a2cb7314d56e45fa6c863768

import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import HomeworkWeek1 from './components/homeworkweek1/homeworkweek1';
import HomeworkWeek2 from './components/homeworkweek2/homeworkweek2';
import HomeworkWeek3 from './components/homeworkweek3/homeworkweek3';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>HomeworkWeek1</h2>
        <HomeworkWeek1 />
        <h2>HomeworkWeek2</h2>
        <HomeworkWeek2 />
        <h2>HomeworkWeek3</h2>
        <div className="container week3">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Gender</th>
                <th scope="col">Region</th>
              </tr>
            </thead>
            <tbody>
              <HomeworkWeek3 />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;

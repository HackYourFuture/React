import React from 'react';
<<<<<<< HEAD
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
=======
import Comment from './Comment';
import comments from './comments-from-db';

export default class App extends React.Component {
  renderComments(comments) {
    return comments.map((comment, index) => {
      return (
        <Comment
          key={index}
          comment={comment}
        />
      );
    })
  }

  render() {
    return (
      <div>
        <h1>Comments:</h1>

        {this.renderComments(comments)}
>>>>>>> 4a9ff3bd4372f9ba43916d7487e68c4ddaf3601b
      </div>
    );
  }
}
<<<<<<< HEAD

// export default App; or what we did in line 6
=======
>>>>>>> 4a9ff3bd4372f9ba43916d7487e68c4ddaf3601b

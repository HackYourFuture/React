import React, { Component } from 'react';

class Post extends Component {

   render() {
      return (
         <div className="todo-item">
            <div>{this.props.checkbox}</div>
            <h2> {this.props.description}  </h2>
            <p>{this.props.deadline}</p>
         </div>
      );
   }
}

export default Post; 
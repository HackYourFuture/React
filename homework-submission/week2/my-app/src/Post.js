import React, { Component } from 'react';


class Post extends Component {

   render() {
      return (
         <div className="todo-item">
            <div>{this.props.children}</div>
            <h2 style={{ textDecoration: this.props.children.props.children.props.checked ? "line-through" : "" }}> {this.props.description}  </h2>
            <p>{this.props.deadline}</p>
         </div>
      );
   }
}

export default Post; 
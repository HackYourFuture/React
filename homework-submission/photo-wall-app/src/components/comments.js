import React, { Component } from "react";

class Comments extends Component {
  state = {
    loading: false,
    user: "",
    text: ""
  };

  render() {
    return (
      <div className="comment">
        <h4>{this.props.author}</h4>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Comments;

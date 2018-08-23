import React from "react";

class List extends React.Component {
  render() {
    return (
      <div className="listConteiner">
        <ul>{this.props.children} </ul>
      </div>
    );
  }
}

export default List;

import React from "react";

class Checkbox extends React.Component {
  render() {
    let done = this.props.done;
    return (
      <div>
        <button onClick={this.props.onClick}>
          {done ? <i class="fa fa-times" /> : ""}
        </button>
      </div>
    );
  }
}

export default Checkbox;

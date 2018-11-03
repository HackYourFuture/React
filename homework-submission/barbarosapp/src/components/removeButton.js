import React from "react";

class RemoveButton extends React.Component {
  render() {
    const { handleRemove, id } = this.props;

    return (
      <button onClick={() => handleRemove(id)} className="removeButton">
        Remove
      </button>
    );
  }
}

export default RemoveButton;

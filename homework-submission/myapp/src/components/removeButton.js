import React from "react";
import { observer, inject } from "mobx-react";

@inject("todoStore")
@observer
class RemoveButton extends React.Component {
  render() {
    const { todoStore, id } = this.props;

    return (
      <button
        onClick={() => todoStore.handleRemove(id)}
        className="removeButton"
      >
        Remove
      </button>
    );
  }
}

export default RemoveButton;

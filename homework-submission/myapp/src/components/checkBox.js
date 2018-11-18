import React from "react";
import { observer, inject } from "mobx-react";

@inject("todoStore")
@observer
class CheckBox extends React.Component {
  
  render() {
    const { todoStore, done, id } = this.props;

    return (
      <div>
        <p>Check ?</p>
        <input
          type="checkbox"
          onChange={(event) => todoStore.handleCheckBox(event, id)}
          className="CheckBox"
          checked={done}
        />
        <p>{done ? "Done" : "Undone"}</p>
      </div>
    );
  }
}

export default CheckBox;

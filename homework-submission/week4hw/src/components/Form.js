import React from "react";
import { observer, inject } from "mobx-react";

@inject("todoListStore")
@observer
class Form extends React.Component {
  render() {
    const { onSubmitForm } = this.props.todoListStore;

    return (
      <form style={{ marginBottom: "20px" }} onSubmit={onSubmitForm}>
        <input
          type="text"
          name="description"
          placeholder="write the description"
        />
        <input type="text" name="deadline" placeholder="write the deadline" />
        <input style={{ fontSize: "12px" }} type="submit" name="submit" />
      </form>
    );
  }
}

export default Form;

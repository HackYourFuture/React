import React from "react";
import { inject, observer } from "mobx-react";

@inject("TodoStore")
@observer
class Edit extends React.Component {
  render() {
    const { handleEdit } = this.props.TodoStore;
    const { itemID } = this.props;
    return (
      <button className="btn" onClick={() => handleEdit(itemID)}>
        Edit
      </button>
    );
  }
}

@inject("TodoStore")
@observer
class Update extends React.Component {
  render() {
    const { handleUpdate } = this.props.TodoStore;
    const { itemID } = this.props;
    return (
      <button className="btn" onClick={() => handleUpdate(itemID)}>
        Update
      </button>
    );
  }
}

@inject("TodoStore")
@observer
class Remove extends React.Component {
  render() {
    const { handleRemove } = this.props.TodoStore;
    const { itemID } = this.props;
    return (
      <button className="btn" onClick={() => handleRemove(itemID)}>
        Remove
      </button>
    );
  }
}

@inject("TodoStore")
@observer
class Cancel extends React.Component {
  render() {
    const { handleCancel } = this.props.TodoStore;
    return (
      <button className="btn" onClick={handleCancel}>
        Cancel
      </button>
    );
  }
}

export { Edit, Update, Remove, Cancel };

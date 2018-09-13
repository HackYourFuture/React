import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("TodosStore")
@observer
class Edit extends Component {
  render() {
    const { handleEdit } = this.props.TodosStore;
    const { itemID } = this.props;
    return (
      <button className="btn" onClick={() => handleEdit(itemID)}>
        Edit
      </button>
    );
  }
}

@inject("TodosStore")
@observer
class Update extends Component {
  render() {
    const { handleUpdate } = this.props.TodosStore;
    const { itemID } = this.props;
    return (
      <button className="btn" onClick={() => handleUpdate(itemID)}>
        Update
      </button>
    );
  }
}

@inject("TodosStore")
@observer
class Remove extends Component {
  render() {
    const { handleRemove } = this.props.TodosStore;
    const { itemID } = this.props;
    return (
      <button className="btn" onClick={() => handleRemove(itemID)}>
        Remove
      </button>
    );
  }
}

@inject("TodosStore")
@observer
class Cancel extends Component {
  render() {
    const { handleCancel } = this.props.TodosStore;
    return (
      <button className="btn" onClick={handleCancel}>
        Cancel
      </button>
    );
  }
}

export { Edit, Update, Remove, Cancel };

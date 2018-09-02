import React, { Component } from "react";
import Item from "./Item";
import "./list.css";
import { Edit, Update, Remove } from "./UserAction";

export default class ListItems extends Component {
  state = {
    actions: {
      editClicked: false
    }
  };
  handleEdit = (e, item) => {
    let { actions } = this.state;
    actions.editClicked = !this.state.actions.editClicked;
    this.setState({ actions });
  };

  render() {
    const {
      dataModel,
      handleCheck,
      // handleEdit,
      handleRemove,
      handleUpdate,
      actions
    } = this.props;
    const todoItems = dataModel.map((entity, i) => (
      <React.Fragment key={i}>
        <input
          type="checkbox"
          checked={entity.done}
          onChange={() => handleCheck(entity)}
        />
        <Item todo={entity} />
        <span className="user-action-wrapper">
          <Edit todo={entity} handleEdit={this.handleEdit} actions={actions} />
          {this.state.actions.editClicked && <Update />}
          <Remove todoIndex={i} handleRemove={handleRemove} />
        </span>
      </React.Fragment>
    ));

    return (
      <ul className="list">
        {dataModel.length === 0 ? (
          <p className="no-todos">No todos</p>
        ) : (
          todoItems
        )}
      </ul>
    );
  }
}

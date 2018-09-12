import React, { Component } from "react";
import Item from "./Item";
import "./list.css";
import { Edit, Cancel, Update, Remove } from "./UserAction";

export default class ListItems extends Component {
  render() {
    const {
      dataModel,
      handleCheck,
      handleEdit,
      handleRemove,
      handleUpdate,
      handleUpdateDescription,
      handleUpdateDeadline,
      handleCancel,
      actions
    } = this.props;

    const todoItems = dataModel.map((entity, i) => (
      <React.Fragment key={i}>
        <input
          type="checkbox"
          checked={entity.done}
          onChange={() => handleCheck(entity)}
        />
        <Item
          todo={entity}
          actions={actions}
          handleUpdateDescription={handleUpdateDescription}
          handleUpdateDeadline={handleUpdateDeadline}
        />
        <span className="user-action-wrapper">
          {actions.editClicked && actions.updatedTodo.itemID === entity.id ? (
            <React.Fragment>
              <Cancel handleCancel={handleCancel} />
              <Update handleUpdate={handleUpdate} itemID={entity.id} />
            </React.Fragment>
          ) : (
            <Edit handleEdit={handleEdit} itemID={entity.id} />
          )}
          <Remove handleRemove={handleRemove} itemIndex={i} />
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

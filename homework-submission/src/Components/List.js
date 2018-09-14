import React, { Component } from "react";
import Item from "./Item";
import "./list.css";
import { Edit, Cancel, Update, Remove } from "./UserAction";

export default class ListItems extends Component {
  render() {
    const {
      dataModel,
      updatedTodo,
      handleToggleCheck,
      handleEdit,
      handleRemove,
      handleUpdate,
      handleUpdateDescription,
      handleUpdateDeadline,
      handleCancel
    } = this.props;

    const todoItems = dataModel.map(entity => (
      <React.Fragment key={entity.id}>
        <input
          type="checkbox"
          checked={entity.done}
          onChange={() => handleToggleCheck(entity)}
        />
        <Item
          todo={entity}
          handleUpdateDescription={handleUpdateDescription}
          handleUpdateDeadline={handleUpdateDeadline}
          updatedTodo={updatedTodo}
        />
        <span className="user-action-wrapper">
          {updatedTodo.id === entity.id ? (
            <React.Fragment>
              <Cancel handleCancel={handleCancel} />
              <Update handleUpdate={handleUpdate} itemID={entity.id} />
            </React.Fragment>
          ) : (
            <Edit handleEdit={handleEdit} itemID={entity.id} />
          )}
          <Remove handleRemove={handleRemove} itemID={entity.id} />
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

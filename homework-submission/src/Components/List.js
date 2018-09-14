import React, { Component } from "react";
import Item from "./Item";
import "./list.css";
import { Edit, Cancel, Update, Remove } from "./UserAction";

import { inject, observer } from "mobx-react";

@inject("TodoStore")
@observer
export default class ListItems extends Component {
  render() {
    const { handleToggleCheck, todos, updatedTodo } = this.props.TodoStore;

    const todoItems = todos.map(entity => (
      <React.Fragment key={entity.id}>
        <input
          type="checkbox"
          checked={entity.done}
          onChange={() => handleToggleCheck(entity.id)}
        />
        <Item renderedTodo={entity} />
        <span className="user-action-wrapper">
          {updatedTodo.id === entity.id ? (
            <React.Fragment>
              <Cancel />
              <Update itemID={entity.id} />
            </React.Fragment>
          ) : (
            <Edit itemID={entity.id} />
          )}
          <Remove itemID={entity.id} />
        </span>
      </React.Fragment>
    ));
    return (
      <ul className="list">
        {todos.length === 0 ? <p className="no-todos">No todos</p> : todoItems}
      </ul>
    );
  }
}

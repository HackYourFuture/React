import React, { Component } from "react";
import Item from "./Item";
import "./list.css";
import { Edit, Cancel, Update, Remove } from "./UserAction";

import { inject, observer } from "mobx-react";

// when should I inject only one observable, and when should I inject the whole store
@inject("TodosStore")
@observer
export default class ListItems extends Component {
  render() {
    const { todos, actions, handleCheck } = this.props.TodosStore;

    const todoItems = todos.map(entity => (
      <React.Fragment key={entity.id}>
        <input
          type="checkbox"
          checked={entity.done}
          onChange={() => handleCheck(entity.id)}
        />
        <Item todo={entity} />
        <span className="user-action-wrapper">
          {actions.editClicked && actions.updatedTodo.itemID === entity.id ? (
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

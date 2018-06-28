import React from "react";
import Description from "./Description";
import Button from "./Button";
import "../styles/TodoItem.css";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";

@inject("todoListStore")
@observer
class TodoItem extends React.Component {
  @observable isEditing = false;

  editButtonHandler = () => {
    this.isEditing = true;
  };

  cancelButtonHandler = () => {
    this.isEditing = false;
  };

  updateInput = e => {
    e.preventDefault();
    this.props.todoListStore.updateInputHandler(e);
    this.isEditing = false;
  };
  render() {
    const { index, todo } = this.props;
    const { onRemoveItemButton, onCheckboxChange } = this.props.todoListStore;

    let class_name = "display_style";

    if (this.isEditing) {
      class_name = "editing_style";
    }
    return (
      <div className="todo_item">
        <div className="labels_checkbox">
          <input
            type="checkbox"
            onChange={() => onCheckboxChange(index)}
            checked={todo.done}
          />
          <label
            htmlFor={todo.id}
            style={{ textDecoration: todo.done ? "line-through" : "" }}
          >
            <Description
              cancelButtonHandler={this.cancelButtonHandler}
              updateInputHandler={this.updateInput}
              isEditing={this.isEditing}
              index={index}
              description={todo.description}
              deadline={todo.deadline}
            />
          </label>
        </div>
        <div className="buttons_container">
          <Button
            class_name={class_name}
            clickHandler={this.editButtonHandler}
            text={"Edit"}
            index={todo.id}
          />
          <Button
            class_name={"remove_button"}
            clickHandler={onRemoveItemButton}
            text={"remove"}
            index={index}
          />
        </div>
      </div>
    );
  }
}

export default TodoItem;

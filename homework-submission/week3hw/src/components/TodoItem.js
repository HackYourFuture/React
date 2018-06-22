import React from "react";
import Description from "./Description";
import Button from "./Button";
import "../styles/TodoItem.css";
import todoList from "../data/todos.json";

class TodoItem extends React.Component {
  state = {
    isEditing: false,
    todoList
  };

  editButtonHandler = () => {
    this.setState({ isEditing: true });
  };

  cancelButtonHandler = () => {
    this.setState({ isEditing: false });
  };

  updateInputHandler = event => {
    event.preventDefault();

    todoList[event.target.edit_description_input.id].description =
      event.target.edit_description_input.value;

    this.setState({
      todoList,
      isEditing: false
    });

    this.cancelButtonHandler();
  };

  render() {
    const { index, todo, removeButtonHandler, checkBoxHandler } = this.props;

    let class_name = "display_style";

    if (this.state.isEditing) {
      class_name = "editing_style";
    }
    return (
      <div className="todo_item">
        <div className="labels_checkbox">
          <input
            type="checkbox"
            onChange={event => checkBoxHandler(index, event)}
            checked={todo.done}
          />
          <label
            htmlFor={todo.id}
            style={{ textDecoration: todo.done ? "line-through" : "" }}
          >
            <Description
              index={index}
              cancelButtonHandlerProp={this.cancelButtonHandler}
              updateInputProp={this.updateInputHandler}
              isEditing={this.state.isEditing}
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
            clickHandler={removeButtonHandler}
            text={"remove"}
            index={index}
          />
        </div>
      </div>
    );
  }
}

export default TodoItem;

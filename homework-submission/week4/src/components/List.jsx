import React from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import TodoItem from "./TodoItem";


export default class List extends React.Component {
  render() {
      const { title, content } = this.props;
    return (
      <ul className={title}>
        {content.items.map(item => (
          <div key={"wrapper" + item.id}>
            <Checkbox
              type="checkbox"
              done={item.done}
              handleChecked={content.handleChecked}
              id={item.id}
            />
            <TodoItem
              id={item.id}
              contentEditable={item.editable}
              description={item.description}
              date={item.deadline}
              newDescription={content.newItem.newDescription}
              newDate={content.newItem.newDeadline}
              handleDescriptionChange={content.handleDescriptionChange}
              handleDeadLineChange={content.handleDeadLineChange}
            />
            <Button
              key={"edit" + item.id}
              id={item.id}
              action="Edit"
              handleClick={content.handleEdit}
              className="show"
            />
            <Button
              key={"update" + item.id}
              id={item.id}
              action="update"
              handleClick={content.handleUpdate}
              className={!item.editable ? "hide" : "show"}
            />
            <Button
              key={"cancel" + item.id}
              id={item.id}
              action="Cancel"
              handleClick={content.handleCancel}
              className={!item.editable ? "hide" : "show"}
            />
            <Button
              key={"remove" + item.id}
              id={item.id}
              action="Remove"
              handleClick={content.handleRemove}
              className="show"
            />
          </div>
        ))}
      </ul>
    );
  }
}
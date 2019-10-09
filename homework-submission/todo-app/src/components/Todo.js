import React from 'react';
import './Todo.css';
import EditForm from './EditForm';
import useToggleState from '../hooks/useToggleState';

const Todo = props => {
  const { id, description, deadline, done } = props.todo;
  const { removeTodo, completeTodo, updateTodo } = props;

  const [isEditing, toggleEditing] = useToggleState();
  const handleRemove = () => removeTodo(id);
  const handleComplete = () => completeTodo(id);

  return (
    <li className={`Todo ${done ? 'done' : ''}`}>
      {isEditing ? (
        <>
          <EditForm
            updateTodo={updateTodo}
            id={id}
            description={description}
            deadline={deadline}
            toggleEditing={toggleEditing}
          />
          <span className="Todo-update">
            <i onClick={toggleEditing} className={`far fa-edit`}></i>
          </span>
        </>
      ) : (
        <>
          <span className="Todo-description"> {description}</span>
          <span className="Todo-deadline">{deadline}</span>
          <span className="Todo-remove">
            <i onClick={handleRemove} className="far fa-trash-alt"></i>
          </span>
          <span className="Todo-complete">
            <i
              onClick={handleComplete}
              className={`far ${done ? 'fa-check-square' : 'fa-square'}`}
            ></i>
          </span>

          <span className="Todo-update">
            <i onClick={toggleEditing} className={`far fa-edit`}></i>
          </span>
        </>
      )}
    </li>
  );
};

export default Todo;

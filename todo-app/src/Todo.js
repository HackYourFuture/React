import React from 'react';
import { inject, observer } from 'mobx-react';
import TodoBody from './TodoBody';
import './index.css';

@inject('todoStore')
@observer
export default class Task extends React.Component {


  render() {
    const { todoItem, toggleStatus, isEditing, onRemove, onEdit, onCancleEdit, onSaveEdit } = this.props;
    return (
      <li className="task-list">
        <span> <input type='checkbox' checked={todoItem.done} onChange={() => toggleStatus(todoItem._id)} /></span>
        <span> {todoItem.done ? <span className='task-done'>
          Todo: <TodoBody
            todo={todoItem}
            onRemove={() => { onRemove(todoItem._id) }}
            isEditing={isEditing}
            onEdit={() => { onEdit(todoItem._id); }}
            onCancleEdit={() => { onCancleEdit(todoItem._id) }}
            onSaveEdit={description => { onSaveEdit(todoItem._id, description); }}
          />

        </span>
          :
          <span className='task-not-done'>
            Todo: <TodoBody
              todo={todoItem}
              onRemove={() => { onRemove(todoItem._id) }}
              isEditing={isEditing}
              onEdit={() => { onEdit(todoItem._id); }}
              onCancleEdit={() => { onCancleEdit(todoItem._id) }}
              onSaveEdit={description => { onSaveEdit(todoItem._id, description); }}
            />
          </span>
        }
        </span>

      </li>

    )


  }
}
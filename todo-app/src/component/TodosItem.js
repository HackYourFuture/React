import React from 'react';
import { observer, inject } from 'mobx-react'
import EditForm from './EditForm';

//Animation
import Fade from 'react-reveal/Fade';

//Icons
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';

@inject('TodoStore')
@observer
export default class TodosItem extends React.Component {

  render() {
    const { todo,
      toggleDone,
      DeleteTodoItem,
      toggleEdit,
      todoEditingID,
    } = this.props

    return (
      <li className="todoList" key={todo._id} >
        <Fade collapse bottom>
          {
            todoEditingID === todo._id ?
              <EditForm  />
              :
              <div>
                <input type="checkbox"
                  onChange={() => toggleDone(todo)}
                  defaultChecked={todo.done} />
                <span className={todo.done ? 'isCompleted' : ''}>
                  {todo.description}
                </span>
                <button title="Remove todo" className="btnDelete"
                  onClick={() => DeleteTodoItem(todo._id)}>
                  <FaTrash />
                </button>
                <button title="Edit todo" className="btnEdit"
                  onClick={() => toggleEdit(todo._id)}>
                  <FaPencil />
                </button>
                <span className="deadline">
                  <strong>{todo.deadline}</strong>
                </span>
              </div>
          }
        </Fade>
      </li>
    );
  }
}



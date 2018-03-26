import React from 'react';
import Fade from 'react-reveal/Fade';

//Icons
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';
import { observer, inject } from 'mobx-react'

@inject('TodoStore')
@observer
export default class DisplayForm extends React.Component {

  render() {
    const { TodoStore } = this.props;
    const todoListItem = TodoStore.todos.map((todo) => {
      return (
        <li className="todoList" key={todo.id} >
          <Fade collapse bottom>
            <div>
              <input type="checkbox"
                onChange={() => TodoStore.handelCheck(todo)}
                defaultChecked={todo.done} />
              <span className={todo.done ? 'isCompleted' : ''}>
                {todo.description}
              </span>
              <button title="Remove todo" className="btnDelete"
                onClick={() => TodoStore.handelDeleteItem(todo)}>
                <FaTrash />
              </button>
              <button title="Edit todo" className="btnEdit"
                onClick={() => TodoStore.toggleEdit(todo)}>
                <FaPencil />
              </button>
              <span className="deadline">
                <strong>{todo.deadline}</strong>
              </span>
            </div>
          </Fade>
        </li>
      )
    })
    return (
      <ul className="todosItem">
        {todoListItem}
      </ul>
    );
  }
}

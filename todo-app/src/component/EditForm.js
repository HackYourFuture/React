import React from 'react';
import { observer, inject } from 'mobx-react'

//Animation
import Fade from 'react-reveal/Fade';

@inject('TodoStore')
@observer
export default class EditForm extends React.Component {

  render() {
    const {
      todoEditingText,
      changeTodoEditingText,
      saveTodo,
      cancelEditing
    } = this.props.TodoStore
    
    return (
      <div>
        < Fade cascade >
          <input type="text"
            value={todoEditingText}
            onChange={e => changeTodoEditingText(e.target.value)}
          />
          <button className="saveBtn"
            onClick={saveTodo}>
            save
          </button>
          <button className="cancelBtn"
            onClick={cancelEditing}>
            cancel
          </button>
        </Fade>
      </div >
    );
  }
}


import React from 'react';

//Animation
import Fade from 'react-reveal/Fade';
import { observer, inject } from 'mobx-react'

@inject('TodoStore')
@observer
export default class EditForm extends React.Component {

  render() {
    const { TodoStore } = this.props;
    // const todo = TodoStore.todos.map((todo) => { return todo.id })
    // console.log(todo)
    return (
      <Fade cascade >
        <input type="text"
          value={TodoStore.changedText}
          onChange={TodoStore.handleChange}
        />
        <button className="saveBtn"
          onClick={() => TodoStore.handelEditSubmit()}>
          save
        </button>
        <button className="cancelBtn"
          onClick={TodoStore.handelCancel}>
          cancel
          </button>
      </Fade>
    );
  }
}

import React, { Component } from 'react';
import './App.css';
import uuid from "uuid/v4"
import { inject, observer } from 'mobx-react';

@inject('StoreTasks')
@observer
class Todo extends Component {
  render() {
    const { deadline,Description, remove, handelCheck, onsubmit, handelChangeDescripton, handelChangeDate } = this.props.StoreTasks;
    return (
      <div className="root">
        <form onSubmit={(e) => onsubmit(e)}>
          <input value={Description} onChange={handelChangeDescripton} name="Description" placeholder=" enter your task" type="text" className="text" />
          <input value={deadline} onChange={handelChangeDate} type="date" name="deadline" className="date" />
          <button type="submit" >Add</button>
        </form>
        {this.props.StoreTasks.tasks.map((ele, index) =>
          <div className="task">
            <p>{ele.description}</p>
            <p><strong>{ele.deadline}</strong></p>
            <label> {ele.done === true ? "Done" : "not Done"} <input className="checkbox" type="checkbox" defaultChecked={ele.done ? true : false} onChange={(e) => handelCheck(e, index, ele.done)} /> </label>
            <button className="close" onClick={(e) => remove(e, ele.id)} >X</button>
          </div>
        )}
      </div>
    )
  }
}
export default Todo;

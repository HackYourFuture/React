import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('todoStore')
@observer

class TodoList extends Component {

  render() {
    if (this.props.todoStore.list.length === 0) return <p>No items... </p>;
    
    return (
      <ol>{
        this.props.todoStore.list.map((el, i) => {
          return (
            <li className="todoList" key={el.id}>
              <button onClick={() => this.props.todoStore.removeHandler(el.id)}>
                Remove
                    </button>
              <input id={el.id} type="checkbox" onChange={this.props.todoStore.changeToDone} defaultChecked={el.done} />
              <span style={{ textDecoration: el.done ? "line-through" : null }}>
                {el.description} - {el.deadLine}
              </span>
            </li>)
        })
      }
      </ol>
    )
  }
}

export default TodoList;
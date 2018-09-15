import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('todoStore')
@observer

class ItemHandler extends Component {

  render() {
    return (
      <div>
        <label>
          Enter description :<input type="text" onChange={e => this.props.todoStore.descriptionHandler(e.target.value)} value={this.props.todoStore.newField.newDescription.value} />
        </label>
        <fieldset>
          <legend>Choose your date</legend>
          <div>
            <input type="date" min="2018-01-01" onChange={e => this.props.todoStore.deadLineHandler(e.target.value)} />
          </div>
        </fieldset>
        <button onClick={() => this.props.todoStore.addHandler()}>Add</button>
      </div>
    )
  }
}

export default ItemHandler;
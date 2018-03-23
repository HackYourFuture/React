import React, { Component } from 'react'

import { inject, observer } from 'mobx-react'

import AssignItem from './AssignItem'
import ViewRender from './ViewRender'
import EditRender from './EditRender'
import { locals } from '../utils'

@inject('todo_actions')
@observer
export default class Layout extends Component {
  componentDidUpdate = (nextProps) => locals.save = [...nextProps.todo_actions.items]
  render() {
    const {
      items, removeItem, toggle_edit,
      toggle_checkbox, submit_edit,
      item_edit_state, onInputEdit } = this.props.todo_actions
    return (
      <div>
        <AssignItem />
        <ul>
          {(!items.length) ?
            <p>No Items Found...</p> :  
            items.map(item => {
            return (
              (item.Edit) ?
                <EditRender
                  key={item.id}
                  item={item}
                  toggle_edit={toggle_edit}
                  submit_edit={submit_edit}
                  onInputEdit={onInputEdit}
                  item_edit_state={item_edit_state} />
                :
                <ViewRender
                  key={item.id}
                  item={item}
                  removeItem={removeItem}
                  toggle_edit={toggle_edit}
                  toggle_checkbox={toggle_checkbox} />
            )
          })}
        </ul>
      </div>
    )
  }
}
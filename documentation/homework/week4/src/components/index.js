import React, { Component } from 'react'

import { autorun } from 'mobx'
import { inject, observer } from 'mobx-react'

import AssignItem from './AssignItem'
import View from './View'
import Edit from './Edit'
// import { locals } from '../utils' // if localStorage needed

@inject('TodoStore')
@observer
export default class Layout extends Component {
  constructor(props) {
    super(props)
    autorun(() => props.TodoStore.loadData())
    // autorun(() => locals.save = [...this.props.TodoStore.items])
  }
  render() {
    const {
      items, removeItem, toggle_edit,
      toggle_checkbox, submit_edit,
      item_edit_state, onInputEditChange,
    } = this.props.TodoStore

    // Clearefing the (props) for each one
    const Edit_props = {
      toggle_edit, submit_edit, onInputEditChange, item_edit_state,
    }
    const View_props = {
      removeItem, toggle_checkbox, toggle_edit,
    }

    return (
      <div>        
        <AssignItem />
        <ul>
          {(!items.length) ?
            <p>No Items Found...</p> :
            /* an example of the recieving data
              "{
                "_id": "5ac27a0250c2ac002f00dc50",
                "description": "make dinner",
                "deadline": "2018-04-10T00:00:00.000Z",
                "__v": 0,
                "done": false
              }"
            */
            items.map(item => {
              return (
                (item.edit) ?
                  <Edit
                    key={item._id}
                    item={item}
                    {...Edit_props} />
                  :
                  <View
                    key={item._id}
                    item={item}
                    {...View_props} />
              )
            })}
        </ul>
      </div>
    )
  }
}
import { observable, action } from 'mobx'

// Setting our localStorage
import { locals } from '../utils'

// set the default state of the items Object
const default_item_state = {
  id: 0,
  title: '',
  deadline: '',
  done: false,
  Edit: false,
}

class Counter {
  @observable
  item_state = {...default_item_state}

  @observable
  item_edit_state = { ...default_item_state }

  // if the localStorage Empty it will be Only ~> []
  @observable 
  items = locals.load || [] // Items Holder
  
  get id() {
    let randomString = ""
    for (let i = 0; i < 8; i++) {
      let random = Math.floor(Math.random() * (57 - 49) + 49)
      randomString += String.fromCharCode(random)
    }
    return randomString
  }
  
  @action // onInput Change
  onInputChange = (e, field) => (this.item_state = {
    ...this.item_state,
    [field]: e.target.value
  })

  @action
  addNewItem = () => {
    const newItem = {
      ...this.item_state,
      id: this.id
    }
    this.items = [
      ...this.items,
      newItem,
    ]
    this.item_state = default_item_state
    return this.items
  }

  @action
  removeItem = (id) => {
    this.items = this.items.filter(item => item.id !== id)
  }

  @action
  onInputEdit = (e, field) => (this.item_edit_state = {
    ...this.item_edit_state,
    [field]: e.target.value
  })


  @action
  toggle_edit = (id, preVals) => {
    this.items = this.items.map(item => {
      item.Edit = (item.id === id) ? !item.Edit : false
      if (item.Edit) {
        this.item_edit_state = {
          title: preVals.title,
          deadline: preVals.deadline
        }
      }
      return item
    })
  }

  @action
  submit_edit = (id) => {
    this.items = this.items.map(item => {
      if (item.id === id) {
        const { title, deadline } = this.item_edit_state
        item = {
          ...item,
          Edit: false,
          title,
          deadline,
        }
      }
      return item
    })
  }

  @action
  toggle_checkbox = (id) => {
    this.items = this.items.map(item => {
      if (item.id === id) {
        item = {
          ...item,
          done: !item.done
        }
      }
      return item
    })
  }
}

export default new Counter()
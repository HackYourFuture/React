import { observable, action, runInAction } from 'mobx'

// Setting our localStorage
// and request on the wire
import { locals } from '../utils'

// set the default state of the items Object
const default_item_state = {
  description: '',
  deadline: '',
}

class TodoStore {
  @observable // this is only for the adding item
  item_state = { ...default_item_state }

  @observable // this is only for the editing item
  item_edit_state = { ...default_item_state }

  // the items By default ~> []
  @observable
  items = /* locals.load || */[] // Items Holder ~> Uncomment if there is a localSorage

  @action
  loadData = async () => {
    const data = await locals.request('todos').catch(console.error)
    runInAction(() => {
      this.items = data
    })
  }

  @action // onInput Change
  onInputChange = (value, field) => this.item_state[field] = value

  @action
  onInputEditChange = (value, field) => // it want a ...spread beacause we need to change the original value
    this.item_edit_state = { ...this.item_edit_state, [field]: value }

  @action
  addNewItem = async () => {
    // because of the key it should render from the api
    // waiting for the _id
    const newItem = {
      ...this.item_state,
    }
    const item = await locals.request('todos/create', 'POST', newItem).catch(console.error)
    runInAction(() => {
      this.items = [
        ...this.items,
        item,
      ]
      this.item_state = default_item_state
    })
  }

  @action
  removeItem = async (_id) => {
    this.items = this.items.filter(item => item._id !== _id)
    await locals.request(`todos/${_id}`, 'DELETE').catch(console.error)
  }

  @action
  toggle_edit = (_id, preVals) => {
    this.items = this.items.map(item => {
      // no need for existing (edit) in the original schema any way
      item.edit = (item._id === _id) ? !item.edit : false
      if (item.edit) {
        this.item_edit_state = {
          description: preVals.description,
          deadline: preVals.deadline
        }
      }
      return item
    })
  }

  @action
  submit_edit = async (_id) => {
    const { description, deadline } = this.item_edit_state
    const applyChange = {
      description,
      deadline,
    }
    this.items = this.items.map(item => { // Rendering the applied changes
      if (item._id === _id) {
        return {
          ...item,
          ...applyChange,
          // no need for existing (edit) in the original schema any way
          edit: false,
        }
      }
      return item
    })
    await locals.request(`todos/${_id}`, "PATCH", applyChange).catch(console.error)
  }

  @action
  toggle_checkbox = async (_id) => {
    this.items = this.items.map(item => {
      if (item._id === _id) {
        item.done = !item.done
      }
      return item
    })
    const { done } = this.items.find(item => item._id === _id)
    await locals.request(`todos/${_id}`, "PATCH", { done }).catch(console.error)
  }
}

export default new TodoStore()
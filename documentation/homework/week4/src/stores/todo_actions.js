import { observable, action, runInAction } from 'mobx'

// Setting our localStorage
// import { locals } from '../utils'

// set the default state of the items Object
const default_item_state = {
  description: '',
  deadline: '',
  done: false,
  // Edit: false,
}

async function request(url, method, param) {
  method = method ? method.toUpperCase() : "GET"
  let opts = {
    method: method,
  }
  if (method === "POST" || method === "PATCH") {
    const params = {
      "body": JSON.stringify(param),
      "headers": {
        "Content-type": "application/json"
      }
    }
    opts = {
      ...opts,
      ...params,
    }
  }
  const preResponse = await fetch(`https://hyf-react-api.herokuapp.com/${url}`, opts)
  const response = await preResponse.json()
  return response
}

class todo_actions {
  @observable
  item_state = { ...default_item_state }

  @observable
  item_edit_state = { ...default_item_state }

  // the items By default ~> []
  @observable
  items = [] // Items Holder

  @action
  loadData = async () => {
    const data = await request('todos')
    runInAction(() => {
      this.items = data
    })
  }

  @action // onInput Change
  onInputChange = (value, field) => {
    console.log(value)
    this.item_state = {
      ...this.item_state,
      [field]: value
    }
  }

  @action
  onInputEditChange = (value, field) => {
    this.item_edit_state = {
      ...this.item_edit_state,
      [field]: value
    }
  }

  @action
  addNewItem = async () => {
    // because of the key it should render from the server
    // waiting for the _id
    const newItem = {
      ...this.item_state,
    }
    const item = await request('todos/create', 'POST', newItem)
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
    await request(`todos/${_id}`, 'DELETE')
  }

  @action
  toggle_edit = (_id, preVals) => {
    this.items = this.items.map(item => {
      item.Edit = (item._id === _id) ? !item.Edit : false
      if (item.Edit) {
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
          Edit: false,
        }
      }
      return item
    })
    await request(`todos/${_id}`, "PATCH", applyChange) // Request Ended
  }

  @action
  toggle_checkbox = async (_id) => {
    this.items = this.items.map(item => {
      if (item._id === _id) {
        item = {
          ...item,
          done: !item.done
        }
      }
      return item
    })
    const item = this.items.find(item => item._id === _id)
    await request(`todos/${_id}`, "PATCH", { done: item.done }) // Request Ended    
  }
}

export default new todo_actions()
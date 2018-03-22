import { action, observable } from 'mobx'

class CounterStore {

  @observable
  count = 0

  @action
  increaseCount = () => {
    this.count++
  }

  @action
  decreaseCount = () => {
    this.count--
  }

}

export default new CounterStore()
import { configure } from 'mobx'
import CounterStore from './CounterStore'

configure({ enforceActions: true })

export default {
  counter: CounterStore,
}

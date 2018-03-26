import { configure } from 'mobx'
import TodoStore from './TodoStore'


// Enable MobX strict mode
configure({ enforceActions: true })

export default {
  TodoStore: TodoStore,
}

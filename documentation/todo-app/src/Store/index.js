import { configure } from 'mobx'
import TodoStore from "./TodoStore";

configure({ enforceActions: true })

export default {
  StoreTasks: TodoStore,
}
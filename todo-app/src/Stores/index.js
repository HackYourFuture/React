import { configure } from 'mobx'

import TasksListStore from './TasksListStore'

configure({ enforceActions: true })

export default {
    data: TasksListStore,
}
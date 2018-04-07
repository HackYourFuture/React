import DifferentValues from './DifferentValues'
import TaskList from './TaskList'
import { configure } from 'mobx'


configure({ enforceActions: true })

export default  {

    values: DifferentValues,
    data: TaskList

}
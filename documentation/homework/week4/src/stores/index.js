// Import (useStrict) Mode
import { configure } from 'mobx'

// Import Stores Instences
import TodoStore from './TodoStore'

// --use strict--
configure({ enforceActions: true })

// Exporting Errors or --Valid Instences--
export default {
  TodoStore
}
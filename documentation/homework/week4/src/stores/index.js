// Import (useStrict) Mode
import { configure } from 'mobx'

// Import Stores Instences
import InitialStore from './InitialStore'

// --use strict--
configure({ enforceActions: true })

// Exporting Errors or --Valid Instences--
export default {
  InitialStore
}
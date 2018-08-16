import { configure } from 'mobx'
import CommentsStore from './CommentsStore'

// Enable MobX strict mode
configure({ enforceActions: true })

export default {
  commentsStore: CommentsStore,
}

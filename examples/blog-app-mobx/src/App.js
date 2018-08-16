import React, { Component } from 'react'
import { Provider } from 'mobx-react'

import stores from './stores'

// Components
import BlogPost from './components/BlogPost'
import CommentsList from './components/CommentsList'

export default class App extends Component {

  render() {
    return (
      <Provider {...stores}>
        <React.Fragment>
          <BlogPost />
          <CommentsList />
        </React.Fragment>
      </Provider>
    )
  }
}

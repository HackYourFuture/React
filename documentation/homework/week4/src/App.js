// Import Initial Requirments
import React, { Component } from 'react'
import './App.css'

// Import Provider
import { Provider } from 'mobx-react'

// Import Stores Index
import Stores from './stores'

// Import Components Index
import Layout from './components'

class App extends Component {
  render() {
    // Sorry... I don't have an OOP background Am I that good?! :D
    return (
      <Provider {...Stores}>
        <Layout />
      </Provider>
    )
  }
}

export default App

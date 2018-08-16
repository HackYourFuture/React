import React from 'react'
import { Provider } from 'mobx-react'

import Counter from './components/Counter'
import stores from './stores/'

class App extends React.Component {

  render() {

    return (
      <Provider {...stores}>
        <Counter />
      </Provider>
    );
  }
}

export default App;

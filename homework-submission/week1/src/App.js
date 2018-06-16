import React, {
  Component
} from 'react';
import './App.css';
import Header from './Header';
import Todo from './Todo';

class App extends Component {
  render() {
    return (<div className="App" >
      <Header />
      <div >
        <Todo />
      </div>

    </div>
    );
  }
}

export default App;
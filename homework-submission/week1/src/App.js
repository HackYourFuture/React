import React, {
  Component
} from 'react';
import './App.css';
import Header from './Header';
import Todo from './Todo';
import Form from './Form';

class App extends Component {
  state = {
    name='',
    animalName=''
  }
  Form = (event) => {
    event.preventDefault();
    this.setState({
      name: event.target.name.value,
      animalName: event.target.animal.value
    })
  }
  render() {


    return (<div className="App" >
      <Header />
      <div >
        <Todo />
      </div>
      <h3> {this.state.name}</h3>
      <h3> {this.state.animalName}</h3>

      <Form form={this.Form} />
    </div>
    );
  }
}

export default App;
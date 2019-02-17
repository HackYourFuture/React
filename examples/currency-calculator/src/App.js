import React, { Component } from 'react';
import AddValuta from './AddValuta';
import CalculateValuta from './CalculateValuta';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valutas: [],
      euro: 0,
      selectedCurrency: '',
    }
  }
  addValutaAction(newValuta) {
    const valutas = this.state.valutas;
    valutas.push(newValuta)
    this.setState({
      valutas
    })
  }
  generateValutas(valutas) {
    return valutas.map(({ name, value }) => (
      <li key={name}>{name}: {value}</li>
    ))
  }
  onChange(state, value) {
    console.log(value);
    this.setState({
      [state]: value,
    })
  }
  generateResult(selectedCurrency, euro) {
    console.log(selectedCurrency);
    if (selectedCurrency) {
      return `${euro} euro is ${Number(selectedCurrency.value) * euro} ${selectedCurrency.name}`;
    }
  }
  render() {
    const { euro, selectedCurrency, valutas } = this.state;
    return (
      <div className="App">
        <AddValuta addValutaAction={this.addValutaAction.bind(this)} />
        <ul>
          {this.generateValutas(valutas)}
        </ul>
        <CalculateValuta onChange={this.onChange.bind(this)} euro={euro} selectedCurrency={selectedCurrency} valutas={valutas} />
        {this.generateResult(selectedCurrency, euro)}
      </div>
    );
  }
}

export default App;

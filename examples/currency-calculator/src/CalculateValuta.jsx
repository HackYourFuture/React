import React, { Component } from 'react';

class CalculateValuta extends Component {
  generateValutas(valutas) {
    return valutas.map(({ name, value }) => (
      <option key={name} value={JSON.stringify({value, name})}>{name}</option>
    ))
  }
  render() {
    const { euro, selectedCurrency, valutas, onChange } = this.props;
    return (
      <form>
        <input type="number" onChange={(event) => onChange('euro', event.target.value)} value={euro} placeholder="Euro" />
        <select onChange={(event) => onChange('selectedCurrency', JSON.parse(event.target.value))} value={JSON.stringify(selectedCurrency)}>
          <option>Select currency</option>
          {this.generateValutas(valutas)}
        </select>
      </form>
    );
  }
}

export default CalculateValuta;

import React, { Component } from 'react';

class AddValuta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      value: "",
    }
  }
  submitForm(event) {
    event.preventDefault()
    this.props.addValutaAction({
      name: this.state.name,
      value: this.state.value,
    });
    this.setState({
      name: "",
      value: "",
    })
  }
  render() {
    const { name, value } = this.state;
    return (
      <form onSubmit={(event) => this.submitForm(event)}>
        <input
          type="text"
          value={name}
          placeholder="Valuta name"
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <input
          type="number"
          value={value}
          placeholder="Value compared to Euro"
          onChange={(event) => this.setState({ value: event.target.value })}
        />
        <input type="submit" value="Add valuta" />
      </form>
    );
  }
}

export default AddValuta;

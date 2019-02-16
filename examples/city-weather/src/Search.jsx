import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }
  submitSearch(event) {
    event.preventDefault();
    this.props.submitSearch(this.state.value);
  }
  render() {
    return (
      <form onSubmit={event => this.submitSearch(event)}>
        <label>
          Search the weather of any city
          <input
            type="search"
            placeholder="type any city"
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
          />
        </label>
        <input type="submit" value="search" />
      </form>
    )
  }
}

export default Search;

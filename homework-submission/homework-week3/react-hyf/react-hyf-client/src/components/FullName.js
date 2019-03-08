import React, { Component } from 'react';
import FirstName from './FirstName';
import LastName from './LastName';

export default class FullName extends Component {
  render() {
    return (
      <p>
        <span>Full name:</span> <FirstName name={this.props.name} />{' '}
        <LastName surname={this.props.surname} />
      </p>
    );
  }
}

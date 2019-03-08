import React, { Component } from 'react';
import Gender from './Gender';
import Region from './Region';

export default class OtherInformation extends Component {
  render() {
    return (
      <div>
        <ul>
          <Gender gender={this.props.gender} />
          <Region region={this.props.region} />
        </ul>
      </div>
    );
  }
}

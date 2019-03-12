import React, { Component } from 'react';
import FullName from './components/FullName';
import OtherInformation from './components/OtherInformation';

export default class HomeworkWeek3 extends Component {
  render() {
    return this.props.data.map(elem => (
      <div className="individual" key={elem.name}>
        <FullName name={elem.name} surname={elem.surname} />
        <OtherInformation gender={elem.gender} region={elem.region} />
      </div>
    ));
  }
}

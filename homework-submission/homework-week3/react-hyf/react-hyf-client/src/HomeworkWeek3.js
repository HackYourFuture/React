import React, { Component } from 'react';
import FullName from './components/FullName';
import OtherInformation from './components/OtherInformation';

export default class HomeworkWeek3 extends Component {
  render() {
    const data = this.props.data;
    return data.map((elem, i) => (
      <div className="individual" key={data[i].name}>
        <FullName name={data[i].name} surname={data[i].surname} />
        <OtherInformation gender={data[i].gender} region={data[i].region} />
      </div>
    ));
  }
}

import React from 'react';
import PhotoContainer from './PhotoContainer';
import NameHeader from './NameHeader';
import List from './List';
class Homework3 extends React.Component {
  render() {
    const { person } = this.props;
    return (
      <div className="homework3">
        <NameHeader {...person}></NameHeader>
        <PhotoContainer {...person}></PhotoContainer>
        <List {...person}></List>
      </div>
    );
  }
}
export default Homework3;

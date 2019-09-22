import React from 'react';
import PhotoContainer from './PhotoContainer';
import NameHeader from './NameHeader';
import List from './List';
class Homework3 extends React.Component {
  render() {
    const { name, surname, photo, gender, region, birthday, email, password, phone } = this.props;
    return (
      <div className='homework3'>
        <NameHeader name={name} surname={surname}></NameHeader>
        <PhotoContainer photo={photo}></PhotoContainer>
        <List
          gender={gender}
          region={region}
          phone={phone}
          birthday={birthday.mdy}
          email={email}
          password={password}
        ></List>
      </div>
    );
  }
}
export default Homework3;

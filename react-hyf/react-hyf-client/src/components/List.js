import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
  render() {
    const { gender, region, phone, birthday, email, password } = this.props;

    return (
      <ul className='listHomework3'>
        <ListItem text={'👤' + gender} />
        <ListItem text={'🌐' + region} />
        <ListItem text={'📞' + phone} />
        {<ListItem text={'🎂' + birthday.mdy} />}
        <ListItem text={'✉️' + email} />
        <ListItem text={'🔑' + password} />
      </ul>
    );
  }
}
export default List;

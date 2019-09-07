import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
  render() {
    const { person } = this.props;

    return (
      <ul className="listHomework3">
        <ListItem text={'👤' + person.gender} />
        <ListItem text={'🌐' + person.region} />
        <ListItem text={'📞' + person.phone} />
        <ListItem text={'🎂' + person.birthday.dmy} />
        <ListItem text={'✉️' + person.email} />
        <ListItem text={'🔑' + person.password} />
      </ul>
    );
  }
}
export default List;

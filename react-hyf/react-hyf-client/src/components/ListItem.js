import React from 'react';
class ListItem extends React.Component {
  render() {
    const { text } = this.props;

    return <li className="listItemHomework3">{text}</li>;
  }
}
export default ListItem;

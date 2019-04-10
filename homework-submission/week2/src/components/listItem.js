import React from 'react';
import IosCheckmarkCircleOutline from 'react-ionicons/lib/IosCheckmarkCircleOutline';
import IosCloseCircleOutline from 'react-ionicons/lib/IosCloseCircleOutline';

class ListItem extends React.Component {
  render() {
    return (
      <li className="list-item">
        <IosCheckmarkCircleOutline
          fontSize="30px"
          color="#43853d"
          className="check"
          beat={true}
          onClick={this.props.toggleDone}
        />
        <IosCloseCircleOutline
          fontSize="30px"
          color="red"
          className="remove"
          onClick={this.props.remove}
        />
        {this.props.description}, {this.props.deadline}
      </li>
    );
  }
}

export default ListItem;

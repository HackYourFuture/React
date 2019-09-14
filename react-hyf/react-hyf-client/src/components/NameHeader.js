import React from 'react';
class NameHeader extends React.Component {
  render() {
    const { name, surname } = this.props;

    return <h1 className="nameHeader">{`${name} ${surname}`}</h1>;
  }
}
export default NameHeader;

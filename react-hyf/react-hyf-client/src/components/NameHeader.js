import React from 'react';
class NameHeader extends React.Component {
  render() {
    const { text } = this.props;

    return <h1 className="nameHeader">{text}</h1>;
  }
}
export default NameHeader;
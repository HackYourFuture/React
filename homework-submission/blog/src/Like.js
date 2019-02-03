import React from 'react';

class Like extends React.Component {
  state = {
    value: 'dislike',
    edit: false,
  };
  handleClick = () => {
    this.props.item.isLiked = !this.props.item.isLiked;
    this.setState({ edit: !this.state.edit });
  };

  render() {
    return this.state.edit ? (
      <input type="button" value="like" onClick={() => this.handleClick()} />
    ) : (
      <input type="button" value="dislike" onClick={() => this.handleClick()} />
    );
  }
}
export default Like;

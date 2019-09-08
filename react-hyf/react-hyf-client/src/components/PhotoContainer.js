import React from 'react';
class PhotoContainer extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <div className="photoContainer">
        <img src={url} alt=""></img>
      </div>
    );
  }
}
export default PhotoContainer;

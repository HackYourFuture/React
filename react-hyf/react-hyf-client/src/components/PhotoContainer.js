import React from 'react';
class PhotoContainer extends React.Component {
  render() {
    const { photo } = this.props;
    return (
      <div className="photoContainer">
        <img src={photo} alt=""></img>
      </div>
    );
  }
}
export default PhotoContainer;

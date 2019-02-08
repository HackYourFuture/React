import React from 'react';
import PhotoServices from '../Services/photoServices';

export default class PhotoControl extends React.Component {

  state = {
    sumLiked: this.props.photoItem.like.length

  }


  onLiked = () => {
    let tempPhoto = this.props.photoItem;
    tempPhoto.like.push(this.props.author);

    PhotoServices.update(tempPhoto)
      .then(() => {
        this.setState({ sumLiked: tempPhoto.like.length })
        this.props.updateList(this.props.index, tempPhoto)
      });

  }
  onUnLiked = () => {
    let tempPhoto = this.props.photoItem;
    tempPhoto.like = tempPhoto.like.filter(likeAuthor => (likeAuthor !== this.props.author));

    PhotoServices.update(tempPhoto)
      .then(() => {
        this.setState({ sumLiked: tempPhoto.like.length })
        this.props.updateList(this.props.index, tempPhoto)
      });
  }


  render() {
    return (<div>
      <label># of liked:</label>
      <label>{this.state.sumLiked}</label>
      {(this.props.photoItem.like.includes(this.props.author)) ?
        <button type='button' onClick={this.onUnLiked}>Unliked</button> :
        <button type='button' onClick={this.onLiked}>Liked</button>}

    </div >)
  }
}
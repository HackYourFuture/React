import React from 'react';
import PhotoServices from '../Services/photoServices';
import PhotoForm from './photoForm';

export default class MyFace extends React.Component {

  state = {
    photoList: []
  }
  componentDidMount() {

    PhotoServices.getPhotoList()
      .then(photoList => {
        this.setState({ photoList: photoList })
      }).catch(err => { console.log("ERROR:", err) });

  }

  onPhotoSubmitted = (newPhotoItem) => {
    this.setState({ photoList: [...this.state.photoList, newPhotoItem] })
  }

  render() {
    const photosList = this.state.photoList;
    console.log('photoList: ++++' + this.state.photoList);
    let photoListBlock = '';

    if (photosList.length > 0) {
      photoListBlock = photosList.map((photo, index) => {
        return (
          <div key={index}>
            <img src={photo.photoUrl} alt={photo.description} width="100" />
            <h4>{photo.description}</h4>
          </div>
        )
      })
    }
    return (
      <div>
        <PhotoForm author={this.props.author} onPhotoSubmitted={this.onPhotoSubmitted}></PhotoForm>
        {photoListBlock}
      </div >)
  }
}
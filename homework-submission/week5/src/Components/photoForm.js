import React from 'react';
import PhotoServices from '../Services/photoServices';

export default class PhotoForm extends React.Component {
  state = {
    url: '',
    description: ''
  }
  onChangeUrl = (e) => {
    this.setState({ url: e.target.value });
  }
  onChangeDescription = (e) => {
    this.setState({ description: e.target.value })
  }
  addNewPhotoInfo = (e) => {
    PhotoServices.createPhoto({
      photoUrl: this.state.url,
      author: this.props.author,
      description: this.state.description,
      comment: [],//{ author: this.props.author, text: '' }
      like: [],
      //id: 4
    }).then(photoItem => {
      this.setState({ url: '', description: '' })
      this.props.onPhotoSubmitted(photoItem)
    }).catch(error => {
      console.log('error', error);
      //this.setState({ status: 'error' });Error ATTTTTT
    })
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addNewPhotoInfo}>
          <input type='text' value={this.state.url} onChange={this.onChangeUrl} />
          <input type='text' value={this.state.description} onChange={this.onChangeDescription} />
          <input type='submit' value='Add Photo' />
        </form>
      </div>
    )
  }
}
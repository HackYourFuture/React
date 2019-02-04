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
    //https://regmedia.co.uk/2015/07/17/daisy.jpg?x=442&y=293&crop=1
    //https://www.mumsema.org/attachments/14341d1463415039/rdek-resmi.jpg
    PhotoServices.createPhoto({
      photoUrl: this.state.url,
      author: this.props.author,
      description: this.state.description,
      comment: { author: this.props.author, text: '' },
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
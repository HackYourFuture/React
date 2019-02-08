import React from 'react';
import PhotoServices from '../Services/photoServices';
import PhotoForm from './photoForm';
import PhotoControl from './photoControl';
import CommentForm from './commentForm';
import Login from './login';

export default class MyFace extends React.Component {

  state = {
    photoList: [],
    editDesc: '',
    mode: -1,
    hiddenPhotoIndexes: []
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

  updateList = (index, updatedPhoto) => {
    const tempPhotoList = [...this.state.photoList];
    tempPhotoList[index] = updatedPhoto;
    this.setState({ photoList: tempPhotoList });
  }

  onEdit = (photoItem) => {
    this.setState({ mode: photoItem.id, editDesc: photoItem.description })
  }
  editDescription = (e) => {
    this.setState({ editDesc: e.target.value });
  }
  updateDesc = (photoItem, index) => {
    const tempPhotoList = [...this.state.photoList];
    photoItem.description = this.state.editDesc;
    tempPhotoList[index] = photoItem;

    PhotoServices.update(photoItem).then(() => {
      this.setState({ photoList: tempPhotoList, editDesc: '', mode: -1 });
    }).catch(err => { console.log('Error', err) });
  }
  cancelDesc = () => {
    this.setState({ editDesc: '', mode: -1 });
  }
  handleDelete = (id, index) => {
    PhotoServices.delete(id).then(() => {
      const tempPhotoList = [...this.state.photoList];
      tempPhotoList.splice(index, 1);
      this.setState({ photoList: tempPhotoList });
    });
  }

  editablePhoto(photoItem, index) {
    if (this.state.mode !== -1 && photoItem.id === this.state.mode) {
      return (<div>
        <input type='text' value={this.state.editDesc}
          onChange={this.editDescription}></input>
        <button type='button' onClick={() => this.updateDesc(photoItem, index)}>Update</button>
        <button type='button' onClick={this.cancelDesc}>Cancel</button>
      </div>)
    } else if (photoItem.author === this.props.author) {
      return (<div>
        <h4>{photoItem.description}</h4>
        <button type='button' onClick={() => this.onEdit(photoItem)}>Edit</button>
        <button type='delete' onClick={() => this.handleDelete(photoItem.id, index)}>Delete</button>
      </div>);
    } else {
      return (<h4>{photoItem.description}</h4>);
    }
  }

  imgHide = (index) => {
    const tempHiddenPhotoInd = [...this.state.hiddenPhotoIndexes];
    if (tempHiddenPhotoInd.includes(index)) {
      tempHiddenPhotoInd.splice(tempHiddenPhotoInd.indexOf(index), 1);
      this.setState({ hiddenPhotoIndexes: tempHiddenPhotoInd });
    } else {
      tempHiddenPhotoInd.push(index);
      this.setState({ hiddenPhotoIndexes: tempHiddenPhotoInd });
    }
  }

  handleLogout = () => {
    console.log('Logout Bye bye');
    this.setState({ photoList: [], editDesc: '', mode: -1, hiddenPhotoIndexes: [] })
    this.props.handleStatus();
  }

  render() {
    const photosList = this.state.photoList;
    let photoListBlock = '';

    if (photosList.length > 0) {
      photoListBlock = photosList.map((photo, index) => {
        return (
          <div key={index} className="photoListBlock">

            {(this.state.hiddenPhotoIndexes.includes(index)) ?
              <button type='button' onClick={() => this.imgHide(index)}>Unhide Image</button> :
              <img src={photo.photoUrl} alt={photo.description} width="100" onClick={() => this.imgHide(index)} />
            }

            <div>{this.editablePhoto(photo, index)}</div>

            <PhotoControl photoItem={photo} author={this.props.author} index={index}
              updateList={this.updateList}></PhotoControl>

            <CommentForm photoItem={photo} author={this.props.author} updateList={this.updateList} indexPhoto={index}></CommentForm>
          </div>
        )
      })
    }
    return (
      <div >
        {(this.props.status === 'login') ? <div>
          <button text='button' onClick={this.handleLogout}>Logout</button>
          <PhotoForm author={this.props.author} onPhotoSubmitted={this.onPhotoSubmitted}></PhotoForm>
          {photoListBlock}
        </div> : <Login />
        }


      </div >)
  }
}
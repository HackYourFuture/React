import React from 'react';
import getMainInfo from '../services/GetMainInfo';

class MainInfo extends React.Component {
  state = {
    text: '',
    isLiked: true,
    editMode: false,
    author: {
      firstName: '',
      lastName: '',
      avatarURL: 'http://www.europe-together.eu/wp-content/themes/sd/images/user-placeholder.svg',
    },
  };
  onDelete = id => {
    getMainInfo.deleteItem(id).then(data => {
      this.props.onItemRemoved(id);
    });
  };

  onLike = (id, info) => {
    info.isLiked = !info.isLiked;
    getMainInfo.checkLiked(id, info).then(newInfo => {
      this.props.onItemLiked(id, newInfo);
    });
  };

  onEdit = (id, info) => {
    info.editMode = true;
    this.setState({ editMode: info.editMode });
  };

  onCancel = (id, info) => {
    info.editMode = false;
    this.setState({ editMode: info.editMode });
  };

  onConfirm = (id, info) => {
    info.text = this.state.text;
    info.isLiked = this.state.isLiked;
    info.author = this.state.author;
    getMainInfo.updateItem(id, info).then(updatedItem => {
      this.props.onItemEdited(id, updatedItem);
    });
  };

  addText = e => {
    let name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  addAuthor = e => {
    let { author } = this.state;
    let name = e.target.name;
    author[name] = e.target.value;
    this.setState({ author });
  };

  render() {
    return (
      this.props.mainInfo.length > 0 &&
      this.props.mainInfo.map(info => {
        return info.editMode ? (
          <div className="items" key={info._id}>
            <input
              className="edit-button"
              type="button"
              value={'cancel'}
              onClick={() => this.onCancel(info._id, info)}
            />
            <input
              className="edit-button"
              type="button"
              value={'Confirm'}
              onClick={() => this.onConfirm(info._id, info)}
            />
            <div className="text">
              <img className="avatar" alt="avatar" src={info.author.avatarURL} />
              <input
                className="edit-input"
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.addAuthor}
                defaultValue={info.author.firstName}
              />
              <input
                className="edit-input"
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.addAuthor}
                defaultValue={info.author.lastName}
              />
              <input
                className="edit-input-text"
                type="text"
                name="text"
                value={this.state.text}
                onChange={this.addText}
                placeholder={info.text}
              />
            </div>
          </div>
        ) : (
          <div className="items" key={info._id}>
            <input
              className="edit-button"
              type="button"
              value="Delete"
              onClick={() => this.onDelete(info._id)}
            />
            <input
              className="edit-button"
              type="button"
              value={'Edit Post'}
              onClick={() => this.onEdit(info._id, info)}
            />
            <div className="text">
              <img className="avatar" alt="avatar" src={info.author.avatarURL} />
              <p className="full-name">{`Name:${info.author.firstName}  ${
                info.author.lastName
              }`}</p>
              <p className="user-text">{`Text: ${info.text}`}</p>
              <span>{info.date}</span>
            </div>
            <label>
              <i className={info.isLiked ? 'fa fa-thumbs-up' : 'fa fa-thumbs-down'} />
              <input
                type="checkbox"
                className="checkbox"
                checked={info.isLiked}
                onChange={() => this.onLike(info._id, info)}
              />
            </label>
          </div>
        );
      })
    );
  }
}
export default MainInfo;

import React from 'react';
import BlogService from '../services/blogService';

export default class BlogForm extends React.Component {
  state = {
    text: '',
    __v: 0,
    isLiked: false,
    date: new Date(),
    author: { firstName: '', lastName: '', avatarURL: '' },
    status: 'done'
  }
  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
    console.log(this.state.text);
  }
  onBlogSubmitted = (e) => {
    this.setState({ status: 'loading' });
    let newB = {
      "_id": 7895,
      "text": this.state.text,
      "__v": 0,
      "isLiked": false,
      "date": Date(),
      "author": { firstName: 'Janetton', lastName: 'Brown', avatarURL: '' }
    }

    BlogService.createNewBlog({
      "text": this.state.text,
      "__v": 0,
      "isLiked": true,
      "date": Date(),
      "author": { "firstName": "test", "lastName": "test", "avatarURL": "" }
    }).then(newBlog => {
      this.setState({ status: 'done', text: '' });
      this.props.addNewBlog(newBlog);
    }).catch(error => {
      console.log("Error: ", error);
      this.setState({ status: 'error' });
    });
    e.preventDefault();
  }


  render() {
    return (<div>{
      <form onSubmit={this.onBlogSubmitted}>

        <input type="text" value={this.state.text} onChange={this.handleTextChange} />
        <input type="submit" value="Add Text" />
      </form>
    }</div>)
  }
}
import React from 'react';
import BlogService from '../services/blogService';

export default class BlogList extends React.Component {
  state = {
    mode: -1,
    editedIndex: -1,
    editedText: ''
  }

  onChange = (e) => {
    let index = e.target.value;
    let isLiked = this.props.blogList[index].isLiked;

    let updatedBlogItem = this.props.blogList[index];
    updatedBlogItem.isLiked = !isLiked;
    BlogService.updateBlog(updatedBlogItem).then(() =>
      this.props.onClickLiked(!(isLiked), index));
  }

  onDeleteBlog = (id, index) => {
    //console.log('Delete id: ' + id);
    BlogService.deleteBlog(id)
      .then(data => {
        this.props.onDeleteBlog(index);
      })

  }

  edit = (id, index) => {
    //console.log(id, index, this.props.blogList[index]);
    this.setState({ mode: id, editedIndex: index, editedText: this.props.blogList[index].text });
  }
  update = (e) => {
    this.props.blogList[this.state.editedIndex].text = this.state.editedText;
    BlogService.updateBlog(this.props.blogList[this.state.editedIndex]);
    this.setState({ mode: -1, editedIndex: -1, editedText: '' });
    this.props.onUpdateClicked(this.props.blogList);
    e.preventDefault();
  }
  cancel = (e) => {
    this.setState({ mode: -1, editedIndex: -1, editedText: '' });// blogList: this.props.blogList,
    console.log("***", this.props.blogList);
    e.preventDefault();
  }
  onEditTextChange = (e) => {
    //const tempBlogList = [...this.props.blogList];
    //tempBlogList[this.state.editedIndex].text = e.target.value;
    this.setState({ editedText: e.target.value });//blogList: tempBlogList, 
    e.preventDefault();
  }
  //blogItem.text
  render() {
    //console.log(this.props);
    return (
      (this.props.blogList.length > 0) && this.props.blogList.map((blogItem, index) => {
        return (<div key={blogItem._id}>
          <input type="checkbox" value={index} onChange={this.onChange} defaultChecked={blogItem.isLiked}></input>
          {(this.state.mode === blogItem._id) ?
            <input type="text" value={this.state.editedText} onChange={this.onEditTextChange} /> :
            <div>{blogItem.text}</div>
          }

          {(this.state.mode === -1 || this.state.mode !== blogItem._id) ?
            <input type="button" value="Edit" onClick={() => this.edit(blogItem._id, index)} /> :
            <div>
              <input type="button" value="Update" onClick={this.update} />
              <input type="button" value="Cancel" onClick={this.cancel} />
            </div>}
          <input type="button" value="Delete" onClick={() => this.onDeleteBlog(blogItem._id, index)} />
        </div>)
      })

    )
  }
}


/*
(this.props.mode === -1 || this.props.mode !== this.props.index) ?
        <button onClick={() => this.handleEdit(this.props.index)}>Edit</button> :
        <div>
      </div>*/
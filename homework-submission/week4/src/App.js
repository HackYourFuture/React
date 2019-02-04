import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlogList from './components/blogList';
import BlogService from './services/blogService';
import BlogForm from './components/blogForm';

class App extends Component {
  state = {
    blogList: []
  }
  componentDidMount() {
    BlogService.getBlogs().then(blogList => { this.setState({ blogList }) });
  }
  addNewBlog = (newBlog) => {
    this.setState({ blogList: [...this.state.blogList, newBlog] })
  }
  handleLiked = (isLiked, index) => {
    const tempBlogList = [...this.state.blogList];
    tempBlogList[index].isLiked = isLiked;
    this.setState({ blogList: tempBlogList });
    //console.log("*******" + this.state.blogList);
  }
  handleDeleteBlog = (index) => {
    const tempBlogList = [...this.state.blogList];
    tempBlogList.splice(index, 1);
    this.setState({ blogList: tempBlogList });
  }
  onUpdateClicked = (updatedBlogList) => {
    this.setState({ blogList: updatedBlogList });
  }

  render() {
    return (
      <div className="App">
        <BlogForm addNewBlog={this.addNewBlog}></BlogForm>
        <BlogList blogList={this.state.blogList} onClickLiked={this.handleLiked}
          onDeleteBlog={this.handleDeleteBlog} onUpdateClicked={this.onUpdateClicked} />
      </div>
    );
  }
}

export default App;

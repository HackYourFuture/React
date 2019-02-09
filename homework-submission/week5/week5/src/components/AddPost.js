import React from 'react'
import PostServices from '../services/services'

export default class AddPost extends React.Component {
  state = {
    ' photoUrl': '',
    "author": "",
    "description": '',
    "comment": [

    ],
    "like": [

    ],
  }
  onFill = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  }


  onAddSubmit = (e) => {
    if (this.state.photoUrl !== '' && this.state.description !== '') {
      PostServices.AddPost({
        "photoUrl": this.state.photoUrl,
        "author": this.props.author,
        "description": this.state.description,
        "comment": [
        ],
        "like": [

        ],
      }).then(post => {
        this.props.onAddSubmit(post)
      }).catch(console.error());

      e.preventDefault()

      this.setState({
        "photoUrl": "",
        "author": "",
        "description": "",
        "comment": [
          {

          }
        ],
        "like": [

        ],
      })

    }
    else {
      alert('Pleas Fill The Filed')
      e.preventDefault()
    }
  }


  render() {


    return (
      <form onSubmit={this.onAddSubmit}>
        <h1> ADD Post</h1>
        <input name='photoUrl' type='text' placeholder='photoUrl' onChange={this.onFill} className="input-box" />
        <input name='description' type='text' placeholder='description' onChange={this.onFill} className="input-box" />
        <br></br>
        <input type='submit' value='Post' className="button-box" />
      </form>
    )
  }
}

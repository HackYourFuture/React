import React, { Component } from 'react'

class List extends Component {

  render() {
    return (<div>
      <img alt='img' src={this.props.posts.photoUrl} />
      <p>{this.props.posts.description}</p>
    </div>
    )
  }
}


export default List;
import React from 'react'

export default class AddCommentForm extends React.Component {

  state = {
    text: ''
  }

  handleTextChange = event => {
    this.setState({ text: event.target.value })
  }

  render() {

    console.log(this.state)

    return (
      <div className='add-comment-form'>
        <textarea
          onChange={this.handleTextChange}
          value={this.state.text}
        />
        <button>Add comment</button>
      </div>
    )
  }
}
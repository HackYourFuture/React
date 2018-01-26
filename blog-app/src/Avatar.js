import React from 'react'

export default class Avatar extends React.Component {

  render() {
    const {author} = this.props
    
    return (
      <div>
        <img src={author.avatarURL} alt={author.firstName}/>
      </div>
    )
  }

}
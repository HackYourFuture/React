import React from 'react'
import CommentList from './CommentList'

export default class BlogPost extends React.Component {

  render() {
    return (
      <div className="BlogPost">
        <h1 className="BlogPost-title">
          {this.props.title}
        </h1>

        <div className="BlogPost-attribution">
          By {this.props.author}
        </div>
        <div className="BlogPost-date">
          Written: {this.props.date.toLocaleString()}
        </div>

        <div className="BlogPost-body">
          {this.props.children}
        </div>

        <h2>Comments:</h2>
        <CommentList/>
      </div>
    )
  }

}
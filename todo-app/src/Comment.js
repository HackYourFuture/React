import React from 'react';
import Picture from './Picture';
import Username from './Username';
import CommentDate from './Date';
import CommentText from './CommentText';
<<<<<<< HEAD


export default class Comment extends React.Component{
    render() {
        return (
            <div>
                <Picture />
                <Username />
                <Date date={new Date()}/>
                <CommentText text={'This is a comment'}/>
            </div>
        );
    }
=======
import './comment.css';

export default class Comment extends React.Component {
  render() {
    const { username, imageType, date, text } = this.props.comment;

    return (
      <div className='comment'>
        <div className='comment--user-info'>
          <Picture username={username} imageType={imageType} />
          <div className='comment--meta-info'>
            <Username username={username} />
            <CommentDate date={date} />
          </div>
        </div>
        <CommentText text={text} />
      </div>
    );
  }
>>>>>>> 4a9ff3bd4372f9ba43916d7487e68c4ddaf3601b
}

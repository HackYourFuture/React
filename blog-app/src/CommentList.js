import React from 'react';
import Comment from './Comment';

const comments = [
  {
    id: '1',
    author: {
      firstName: "Joost",
      lastName:  "Lubach",
      avatarURL: "https://pbs.twimg.com/profile_images/845196505279455233/IUV3v-jP_400x400.jpg"
    },
    date: new Date(2017, 11, 10, 13, 0),
    text: "I like this post."
  },
  {
    id: '2',
    author: {
      firstName: "Isaac",
      lastName:  "Hinman",
      avatarURL: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/8/005/08a/374/2a60474.jpg"
    },
    date: new Date(2017, 11, 10, 14, 50),
    text: "Me too."
  },
  {
    id: '3',
    author: {
      firstName: "Amin",
      lastName:  "Mahrami",
      avatarURL: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAwKAAAAJDMwNGQ5YjE2LWUyNzYtNDI2Zi1hZDQ0LTc3ZGM0NDViOWY2ZQ.jpg"
    },
    date: new Date(2017, 11, 10, 14, 50),
    text: "Me too."
  }
]

export default class CommentList extends React.Component {

  render() {
    return (
      <div className="CommentList">
        {this.renderList()}
      </div>
    )
  }

  renderList() {
    return (
      <ul>
        {comments.map((comment, index) => (
          <React.Fragment key={comment.id}>
            {index > 0 && <li className="CommentList-separator"/>}
            <Comment comment={comment}/>
          </React.Fragment>
        ))}
      </ul>
    )
  }

}
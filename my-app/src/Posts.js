import React from 'react';

function Posts(props) {
  return (
    <div>
      <img src={props.post.photoUrl} alt="URL pho" />
      <p>{props.post.description}</p>
    </div>
  );
}
export default Posts;

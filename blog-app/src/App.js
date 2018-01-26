import React from 'react';
import BlogPost from './BlogPost';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <BlogPost
          title="React is cool"
          author="Joost Lubach"
          date={new Date(2017, 11, 10, 13, 0, 0)}
        >
          Hello I am Joost and this is my Blog post.
        </BlogPost>
      </div>
    );
  }

}
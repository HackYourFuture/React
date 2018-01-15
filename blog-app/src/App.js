import React from 'react';
import BlogPost from './BlogPost';
import {Provider} from 'mobx-react';
import * as stores from './stores';

window.stores = stores

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Provider {...stores}>
          <BlogPost
            title="React is cool"
            author="Joost Lubach"
            date={new Date(2017, 11, 10, 13, 0, 0)}
          >
            Hello I am Joost and this is my Blog post.
          </BlogPost>
        </Provider>
      </div>
    );
  }

}
import React, { Component } from 'react';


class PostBody extends Component {
    render() {
        const userTitle = <h2>First Post</h2>
        const timeOfPost = '01.04.1999';
        const postContent = <p>The lean recorder towers. Will a seven dot tile the rescue?
       How does a benefit emerge? A courage wears the two expressway on top of a lung.<hr /></p>;

        return (
            <div className='posts'>
                {userTitle}
                {timeOfPost}
                {postContent}
            </div>
        );
    }
}

export default PostBody;
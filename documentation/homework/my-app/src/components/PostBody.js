import React, { Component } from 'react';
class PostBody extends Component{
    render() {
        const title = 'Amazing Post';

        const dateOfPost = 'Wed Sep 13 2017';
        const content = 'Today we started our first react class.It`s awesome';
        return (
            <section className="Content">
                <h1>{title}</h1>
                <h4>{dateOfPost}</h4>
            </section>
        )
    }
}
export default PostBody;
            
    
import React from 'react';
import Picture from './Picture';
import Username from './Username';
import CommentDate from './Date';
import CommentText from './CommentText';


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
}

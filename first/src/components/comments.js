import React, { Component } from 'react';

export default class CommentList extends Component {
    render() {
        const comments = [
            { 'user': 'Nasir', 'comment': 'Great content' },
            { 'user': 'Fadi', 'comment': 'awesome' },
            { 'user':, 'Mahmut', 'comment': 'yaaay that is cool' }
        ];
        const commentElement = comments.map((element, index) => {
            <CommentItem user={element.user} comment={element.comment} />
        });
        return (
            <div>
                {commentElement}
            </div>
        );
    }
}
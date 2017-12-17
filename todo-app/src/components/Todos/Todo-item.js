// jshint esnext: true

import React from 'react';
import Text from './Todo-text';
import Avatar from './Todo-Avatar';
import Author from './Todo-author';
import Date from './todo-date';




export default class TodoItem extends React.Component{


    render(){
        const {author, date, text, avatar} = this.props.item;
        return (
            <li>
                <div className='header'>
                    <div className='author-avatar'>
                        <Avatar avatar={avatar}/>
                    </div>
                    <div className='author-info'>
                        <Author author={author}/>
                        <Date date={date}/>
                    </div>
                </div>
                <div className='todo-text'>
                    <Text text={text}/>
                </div>          
            </li>
        )
    }
}


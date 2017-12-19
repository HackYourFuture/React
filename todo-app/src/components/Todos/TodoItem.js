// jshint esnext: true

import React from 'react';
import TodoText from './TodoText';
import TodoAvatar from './TodoAvatar';
import TodoAuthor from './TodoAuthor';
import TodoDate from './TodoDate';
import './styles/TodoItem.css';




export default class TodoItem extends React.Component{


    render(){
        const {author, date, text, avatar, alt} = this.props.item;
        return (
            <li>
                <div className='header'>
                    <div className='authorAvatar'>
                        <TodoAvatar avatar={avatar} alt={alt}/>
                    </div>
                    <div className='authorInfo'>
                        <TodoAuthor author={author}/>
                        <TodoDate date={date}/>
                    </div>
                </div>
                <div className='todoText'>
                    <TodoText text={text}/>
                </div>          
            </li>
        )
    }
}


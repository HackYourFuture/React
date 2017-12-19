// jshint esnext: true

import React from 'react';
import TodoItem from './TodoItem';
import './styles/ListTodos.css';


let todosInfo = [
    {
        id: 1,
        author: 'person 1',
        date: new Date(),
        avatar: 'https://d30y9cdsu7xlg0.cloudfront.net/png/770852-200.png',
        alt: this.author + ' image',
        text: 'Do the dishes'
    },
    {
        id: 2,
        author: 'person 2',
        date: new Date(),
        avatar: 'http://lh3.googleusercontent.com/Jr30hym9e7xyhnZmSazySXyqayvS25Ujh2CiDzHulzfFxLaUFyrNMI1Q9VD4KTBaYLLL=w300',
        alt: this.author + ' image',        
        text: 'Wash the car'
    },
    {
        id: 3,
        author: 'person 3',
        date: new Date(),
        avatar: 'http://simpleicon.com/wp-content/uploads/cute.png',
        alt: this.author + ' image',        
        text: 'Go shopping'
    },
    {
        id: 4,
        author: 'person 4',
        date: new Date(),
        avatar: 'https://d30y9cdsu7xlg0.cloudfront.net/png/859501-200.png',
        alt: this.author + ' image',        
        text: 'finish the todo list thingie'
    }
]

export default class ListTodos extends React.Component {
    render(){
        return (
            <div>
                {this.todosRender()}
            </div>
        )
    }
    

    todosRender(){
        return (
            <ul className='todosWrapper'>
                {todosInfo.map((item, index) => {
                    return (
                        <React.Fragment key={item.id}>
                            <TodoItem item={item}/>
                        </React.Fragment>    
                    )
                })}
            </ul>
        )
    }

    
}





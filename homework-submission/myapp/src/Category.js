import React from 'react';
import Items from './Items';

class Category extends React.Component {

    todo = Items.map((todoItems, index) => (
        <li key={index}>
            {`${todoItems.description} , ${todoItems.deadLine}`}
        </li>
    ));

    render() {
        return (
            <ul className='items'>
                {this.todo}
            </ul>
        )
    }
}

export default Category;
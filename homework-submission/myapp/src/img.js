import React, { Component } from 'react';
// import './Image.css';

class img extends Component {

    render() {
        return (
            <div>
                <img
                    src='https://www.mangoapps.com/blog/wp-content/uploads/to-do.jpg'
                    className="img" alt="todo-img" width="500" height="333"
                />
            </div>

        );
    }
}
export default img;
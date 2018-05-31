import React, { Component } from 'react';
import '../components/Image.css';

class Image extends Component {

    render() {
        return (
            <div>
                <img
                    src='https://raw.githubusercontent.com/gisaac85/my_REACT/master/images/image1.png'
                    className="App-image" alt="todo-img"
                />
            </div>

        );
    }
}
export default Image;
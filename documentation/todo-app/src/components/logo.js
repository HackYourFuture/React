import React, { Component } from 'react';

export default class Logo extends Component {
    render() {
        const logo_src = 'https://steemitimages.com/0x0/https://cdn.utopian.io/posts/f5f218f59098ab23c85e87c9d7bd4ea7588fsize.jpg';
        
        return (
            <img src={ logo_src } className="logo" alt="logo_image"/>
        )
    }  
}
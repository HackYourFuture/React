import React from 'react';
import HobbiesComponent from './Hobbies';

const HobbyListComponent = (props, index) => {
    const title = 'Hobby List';
    const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];

    const list = hobbies.map((hobby) =>
        <li key={index}>
            {hobby}
        </li>
    );

    return(
        <div className='div-container'>
            <div className='title-container'>
                <h1>{title}</h1>
            </div>
            <div className='list-container'>
                <ul>{list}</ul>
            </div>
        </div>
    );

}



export default HobbyListComponent;
import React from 'react';


export default class TodoList extends React.Component {

    render() {
        return (  
            <div className="TodoList">
                <ul>
                    <li>Get out of bed. <p>12-03-2015</p></li>
                    <li>Brush teeth.  <p>11-03-2015</p></li>
                    <li>Eat breakfast. <p>10-03-2015</p></li>   
                </ul>
            </div>
        )
    }
}

    
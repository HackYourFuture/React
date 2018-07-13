import React, { Component } from 'react';

// Import components
import Deadline from './Deadline';
import Description from './Description';

class List extends Component{
    render(){
        const {list} = this.props;
        return (
            <ul>
                {list.map((element) =>
                <li>
                <Description description={element.description}/>
                <Deadline  deadline={element.deadline}/>
                </li>)}
            </ul>  
        );
    }

}

export default List;
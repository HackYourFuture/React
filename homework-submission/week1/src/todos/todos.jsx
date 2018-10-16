import React, { Component } from 'react';
import Element from './element';

class Todos extends Component {

    state = { 
        elements: [
            { describtion: "Get out of bed", deadlineDate: "Wed Sep 13 2018" },
            { describtion: "Brush teeth", deadlineDate: "Thu Sep 14 2018" },
            { describtion: "Eat breakfast", deadlineDate: "Fri Sep 15 2018" }
        ]
     }
    render() { 
        return ( 
            <div className="todo-container float-left shadow p-3 mb-5 bg-white rounded">
                <h2>Todo List :</h2>
                <ul className="list-group list-group-hover list-group-striped">
                    { this.extractElements() }
                </ul>
            </div>
         );
    }

    extractElements() {
        return this.state.elements.map((el, index) =>
                            <Element 
                            key={index} 
                            describtion={el.describtion} 
                            deadlinedate={el.deadlineDate} />
                        );
    }
}
 
export default Todos;
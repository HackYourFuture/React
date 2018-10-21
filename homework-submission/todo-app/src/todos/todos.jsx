import React, { Component } from 'react';
import Element from './element';
import Data from './data';

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            elements: Data
         }
    }

     deleteItem = (itemId) => {
        const newData = this.state.elements.filter(item => item.id !== itemId);
        this.setState({elements: newData});
    }

    render() { 
        return ( 
            <div className="wrapper">
            <div className="todo-container container-fluid col-md shadow p-2 mb-2 bg-white rounded">
                <h2>Todo List :</h2>
                {this.checkElementsMount()}
            </div>
            </div>
         );
    }

    extractElements() {
        return this.state.elements.map((el, index) =>
                            <Element 
                            key={el.id}
                            id={el.id}
                            description={el.description} 
                            deadline={el.deadline}
                            done={el.done}
                            className="float-left"
                            deleteItem={this.deleteItem}
                             />
                        );
    }

    listOfElements() {
         return <ul className="list-group list-group-hover list-group-striped">
                    { this.extractElements() }
                </ul>;
    }

    checkElementsMount() {
        const noElement =  <div className="alert alert-danger" role="alert">No items...!</div>;
        return this.state.elements.length < 1 ? noElement : this.listOfElements();
    }
}
 
export default Todos;
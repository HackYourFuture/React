import React, { Component } from 'react';
import Element from './element';
import AddForm from './addform';
import {inject, observer} from 'mobx-react';

@inject('TodosStore')
@observer

class Todos extends Component {
    render() {
        return ( 
            <div className="wrapper">
                <div className="todo-container container-fluid col-md shadow p-2 mb-2 bg-white rounded">
                    <h2>Todo List :</h2>
                    <AddForm />
                    {this.checkElementsMount()}
                </div>
            </div>
         );
    }

    extractElements() {
        const {TodosStore} = this.props;
        return TodosStore.todos.map((el, index) =>
                            <Element 
                            key={el.id}
                            id={el.id}
                            description={el.description} 
                            deadline={el.deadline}
                            done={el.done}
                            className="float-left"
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
        return this.props.TodosStore.todos.length < 1 ? noElement : this.listOfElements();
    }
}
 
export default Todos;
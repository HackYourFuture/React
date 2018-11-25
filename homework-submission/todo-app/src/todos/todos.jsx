import React, { Component } from 'react';
//import Element from './element';
import Element from './apiElements';
import AddForm from './addToApi';
//import AddForm from './addform';
import {inject, observer} from 'mobx-react';

@inject('TodosStore')
@observer

class Todos extends Component {
    constructor(props) {
        super(props);
        this.props.TodosStore.retrieveData();
    }
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

    printApiData() {
        const {TodosStore} = this.props;
        return TodosStore.apiTodos.map((el, index) =>
                            <Element 
                            key={index + 'api'}
                            id={el._id}
                            description={el.description} 
                            deadline={el.deadline}
                            done={el.done}
                            className="float-left"
                             />
                        );
    }

    listOfElements() { //{ this.extractElements() }
        const {TodosStore} = this.props;
        if(TodosStore.state === 'loading') return <div>Loading ...</div>;
        else {
         return <ul className="list-group list-group-hover list-group-striped">
                    
                    {this.printApiData()}
                </ul>;
        }
    }

    checkElementsMount() {
        const {TodosStore} = this.props;
        const noElement =  <div className="alert alert-danger" role="alert">No items...!</div>;
        return TodosStore.apiDataNumber < 1 ? noElement : this.listOfElements();
    }
}
 
export default Todos;
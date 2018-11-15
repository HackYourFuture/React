import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTrash, faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {inject, observer} from 'mobx-react';



 
library.add(fab, faCheck, faTrash, faPencilAlt, faTimes);

@inject('TodosStore')
@observer
class Element extends Component {
    state = {
        id: this.props.id,
        description: this.props.description,
        deadline: this.props.deadline,
        done: this.props.done,
        editMode: false,
        temporarySave: this.props.description
     }

     throwLineHandle = () => {
        (!this.state.done) ? this.setState({done: true}) : this.setState({done: false});
     }

     turnUpdateMode = () => {
        const temp = this.state.description;
        this.setState({
            editMode: !this.state.editMode,
            temporarySave: temp
        });
     }

     onChangeHandle = e => {
         this.setState({[e.target.name]: e.target.value});
     }

     submitUpdate = e => {
        e.preventDefault();
        this.setState({editMode: !this.state.editMode});
     }

     handleCancel = () => {
        this.setState({
            description: this.state.temporarySave,
            editMode: !this.state.editMode
        });
     }

    render() { 
        const {id} = this.state;
        
        return ( 
            <li className="list-group-item m-1 p-1 text-md-left font-weight-bold" id={"list_item" + id}>
                {!this.state.editMode ? this.defaultItemsDisplay() : this.updateItemsDisplay()}
            </li>
         );
    }

    defaultItemsDisplay() {
        const {id, description, deadline} = this.state;
        const {TodosStore} = this.props;
        const item = description + ', ' + deadline;
        const editAndRemoveButtons = <div className="float-right p-0">
                                        <span className="btn text-primary float-left p-1 m-1 popup-container" onClick={this.turnUpdateMode}>
                                            <FontAwesomeIcon icon="pencil-alt" />
                                            <span className="popup-message">Click to Modify</span>
                                        </span>
                                        <span className="btn text-danger float-left p-1 m-1 popup-container" onClick={() => TodosStore.deleteItem(id)}>
                                            <FontAwesomeIcon icon="trash" />
                                            <span className="popup-message">Click to Remove</span>
                                        </span>
                                     </div>;
        return this.state.done 
            ? <React.Fragment>{this.myCheckBox()}
                <div><p onClick={this.throwLineHandle}><del>{item}</del></p>{editAndRemoveButtons}</div>
              </React.Fragment>
            : <React.Fragment>{this.myCheckBox()}
                <div><p onClick={this.throwLineHandle}>{item}</p>{editAndRemoveButtons}</div>
              </React.Fragment>
    }
    myCheckBox() {
              return <div className="float-left text-primary">
                 <label className="big-checkbox text-primary">
                    <input type="checkbox" className="btn btn-primary float-left mt-3 ml-3" checked={!this.state.done ? false : true} onChange={this.throwLineHandle} />
                 </label>
                </div>;
    }

    updateItemsDisplay() {
        const {id, description} = this.state;
           return  <form className="needs-validation" onSubmit={this.submitUpdate}>
                    <div className="update-form-container form-group row clearfix">
                    <div className="col-sm-10 float-left ml-3 mt-1">
                     <input type="text" name="description" 
                        id={'input' + id}
                        defaultValue={description}
                        onChange={this.onChangeHandle}
                        className="form-control"
                    />
                    </div>
                    <div className="float-left">
                    <span className="btn text-success float-left p-1 m-1 popup-container" onClick={this.submitUpdate}>
                        <FontAwesomeIcon icon="check" />
                        <span className="popup-message">Click to Confirm</span>
                    </span>
                    <span className="btn text-danger float-left p-1 m-1 popup-container" onClick={this.handleCancel}>
                        <FontAwesomeIcon icon="times" />
                        <span className="popup-message">Click to Cancel</span>
                    </span>
                    </div>
                    </div>
                   </form>;
    }
}
 
export default Element;
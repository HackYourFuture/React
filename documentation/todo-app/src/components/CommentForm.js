import React, { Component } from 'react';

const INITIAL_STATE ={
        description: "",
        deadline: ""
    };
export default class CommentForm extends Component {
    state = INITIAL_STATE;
    onFieldChange = (field, value) => {
        const newState = this.state;
        newState[field] = value;
        this.setState(newState);
    };
    onSubmit(description, deadline){
        this.props.handleSubmit(description, deadline);
        this.setState(INITIAL_STATE);
    };
    render() {
        return (
            <div>
                <div>
                    <label> Description : </label> 
                    <textarea className="comment" placeholder="write the new todo here "
                        type="textarea"
                        value={this.state.description}
                        onChange={(e)=>this.onFieldChange("description",e.target.value)}
                        />
                </div>
                <div>
                    <label>Dead__line : </label>
                    <input className="comment" placeholder="write the deadline here "
                        type="date"
                        value={this.state.deadline}
                        onChange={(e) => this.onFieldChange("deadline", e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={()=> this.onSubmit(this.state.description,this.state.deadline)}>
                        Add
                    </button> <br /><br /><br />
                </div>
            </div>
        );
}
}
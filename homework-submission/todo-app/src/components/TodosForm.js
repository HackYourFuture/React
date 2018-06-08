import React, { Component } from 'react';

class TodosForm extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            description: "",
            deadline: "",
            done: false
        })
    }
    state = this.state;

    onChanging = (index, value) => {
        const newValue = this.state;
        newValue[index] = value;
        this.setState(newValue);
    };

    onSubmit(id, description, deadline, done) {
        this.props.PreSubmit(id, description, deadline, done);
        this.setState({ description: "", deadline: "" });
        alert(`New Todo: ${this.state.description} ,Added successfully!!`)
    };


    render() {
        return (
            <div>
                <div>
                    <p style={{ "color": "blue", "fontSize": "20px" }}>Description :</p>
                    <textarea className="textArea" placeholder="write the new todo here "
                        type="textarea"
                        value={this.state.description}
                        onChange={(e) => this.onChanging("description", e.target.value)}
                    />
                </div>
                <div>
                    <p style={{ "color": "blue", "fontSize": "20px" }}>Dead Line Date : </p>
                    <input className="textArea" placeholder="write the deadline here "
                        type="date"
                        value={this.state.deadline}
                        onChange={(e) => this.onChanging("deadline", e.target.value)}
                    />
                </div>
                <div>
                    <button className="buttonStyle" onClick=
                        {

                            () => this.onSubmit(this.state.id, this.state.description, this.state.deadline, this.state.done)

                        }>
                        Add
                    </button>
                    <br /> <br />
                </div>

            </div>
        );
    }
};
export default TodosForm;
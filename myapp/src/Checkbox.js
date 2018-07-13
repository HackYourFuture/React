import React from 'react';

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEdit: false,
            editToDo: {
                description: props.description,
                deadline: props.deadline,
                done: props.done
            }
        }

    }
    handleClickDescription = () => {
        this.setState({
            showEdit: !this.state.showEdit
        })
    }
    descriptionChange = (event) => {
        let editToDo = {
            description: event.target.value,
            deadline: this.state.editToDo.deadline
        }
        this.setState({ editToDo })
    }
    // deadlineChange = (event) => {
    //     let editToDo = {
    //         description: this.state.editToDo.description,
    //         deadline: event.target.value
    //     }
    //     editToDo.deadline = event.target.value
    //     this.setState({ editToDo })
    // }

    render() {
        if (!this.state.showEdit) {
            return (
                <div>
                    <div onClick={() => { this.handleClickDescription() }}>
                        <h2>Description : {this.state.editToDo.description}</h2>
                    </div>
                    <h2>Deadline : {new Date(this.state.editToDo.deadline).toDateString()}</h2>
                    <h2> {this.props.done} </h2>

                </div>


            );
        }

        else {
            return (<div>
                <form onSubmit={() => {
                    this.props.save(this.state.editToDo.description, this.state.editToDo.deadline,
                        this.props.id, this.props.index)
                    this.handleClickDescription()
                }}>   <input type="text" name="description"
                    value={this.state.editToDo.description}
                    onChange={this.descriptionChange}
                    />
                    {/* <input type="text" name="deadline"
                        value={this.state.editToDo.deadline}
                        onChange={this.deadlineChange.bind(this)}
                    /> */}
                    <button type="submit">
                        Save </button>
                    <button type="button" onClick={() => { this.handleClickDescription() }} >
                        Cancel </button>
                </form>

            </div>)
        }

    }
}



export default Checkbox;
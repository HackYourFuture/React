import React from "react";
import Delete from "./Delete";
import Edit from "./Edit";
import DatePicker from 'react-date-picker';
// import DateP from "./DatePicker";

export default class ItemCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            to_do: [],
            description: [],
            deadline: [new Date()]
        };
    }

    handleCreate = (e) => {
        let newState = this.state
        newState.to_do.push(this.state.description)
        this.setState(newState)
        //clean input
        this.input.value = ''
        e.preventDefault()
    }

    inputChange = (e) => { this.setState({ description: e.target.value }) }

    handleDelete = (item) => {
        let newState = this.state.to_do
        newState.splice(item, 1)
        this.setState({ newState })
    }

    handleUpdate = (e) => { this.setState({ to_do: [e.target.value] }) }

    handleEdit = (e) => {
        this.setState({
            to_do: [<div id='edit'><input type="text" value={this.state.to_do} onChange={this.handleUpdate} />
                <button type="button" > Update</button ><br />
                <button type="button" onClick={this.canCel}> Cancel</button ></div>]
        })
    }

    canCel = (e) => {
        alert('the button is not working yet')
        // this.setState({ to_do: [e.target.value] })
    }
    onDateChange = (e) => {
        this.setState({ deadline: e });
        console.log(e)
    };

    render() {

        // const editBtn = <button type="button" onClick={this.handleEdit}> Edit </button >
        const saveDate = <DatePicker value={this.state.deadline} />

        let addedItems = this.state.to_do.map((item, index) => (
            <div key={index}>
                <ul>
                    <li>
                        <input type="checkbox" className="myCheck" />
                        <label> <span id={index}> {item}</span>
                            {saveDate}
                            {/* {editBtn} */}
                            <Delete remove={this.handleDelete} />
                            <Edit change={this.handleUpdate} /> </label>
                    </li>
                </ul>
            </div>
        ));


        return (
            <div>
                <div className="addItem">

                    <input id='desc' type="text" name='description' placeholder="Enter new task" onChange={this.inputChange}
                        ref={(input) => this.input = input} />
                    <button type="button" className="btn1" onClick={this.handleCreate} >Add</button>

                    <div>  <DatePicker onChange={this.onDateChange} value={this.state.deadline} /></div>

                </div>
                {addedItems}
            </div>
        );
    }
}

import React, { Component } from 'react';

export default class TodoItems extends Component{
    

    constructor() {
        super();
        this.state = { editing: false }
    }
    componentDidMount() {
        this.setState({ changedText: this.props.todoTask });
    }
    handleEditing = (event) => {
        this.setState({editing: true, changedText:this.props.todoTask})
    }
   
    handleEditingDone = (event)=>{
        console.log('editing is Done');
        if (event.keyCode === 13) {
            this.setState({ editing: false });
        }
    }
    handleEditingChange = (event) => {
        var _changedText = event.target.value;
        this.setState({ changedText: _changedText });
    }    
    
    render() {
        const { checkStatus, handleDelete} = this.props;

        let { elements, todoId, createdAt, taskDate, todoStatus } = this.props;
        var viewStyle = {};
        var editStyle = {};
        if (this.state.editing) {
            viewStyle.display = 'none';
        } else {
            editStyle.display = 'none';
        }
        return (

            <div className='listItems'>
                <div
                    style={viewStyle}
                    onDoubleClick={this.handleEditing.bind(this)} >

                    <hr/>
                    <form>

                        <label>Number :</label>
                        <strong> {todoId}</strong>
                        <br></br>
                        <label> Task : </label>
                        < strong >{this.state.changedText}</strong>
                        <br></br>
                        <label>Created At :</label>
                        <strong>{createdAt}</strong>
                        <br></br>                    
                        <label>deadline :</label>
                        <strong> {taskDate} </strong>

                        <div onClick={() => checkStatus(todoId)} >
                            <h2>{todoStatus ? <span> Done ♥</span> : <span>Not Done ♡</span>} </h2>   
                        </div>
                        <h3>Double Click To Edit</h3>
                        <button
                            onClick={() => handleDelete(elements)} >Delete
                        </button>
                      

                    </form>  
                    <hr/>
                </div>
                <div style={editStyle}>
                      <hr/>
                    <form>

                        <label>Number :</label>
                        <strong> {todoId}</strong>
                        <br></br>
                        <label> Task : </label>
                        <input
                        type='text'
                        onKeyDown={this.handleEditingDone.bind(this)}
                        onChange={this.handleEditingChange.bind(this)}
                        value={this.state.changedText} />
                        <br></br>
                        <label>Created At :</label>
                        <strong>{createdAt}</strong>
                        <br></br>                    
                        <label>deadline :</label>
                        <strong> {taskDate} </strong>

                        <div onClick={() => checkStatus(todoId)} >
                            <h2>{todoStatus ? <span> Done ♥</span> : <span>Not Done ♡</span>} </h2>   
                        </div>
                        <h3>Press Enter to Finish Editing </h3>
                        <button
                            onClick={() => handleDelete(elements)} >Delete
                        </button>
                      

                    </form>  
                    <hr/> 
                   

                </div>
            </div>
           
            
        );
    }
}
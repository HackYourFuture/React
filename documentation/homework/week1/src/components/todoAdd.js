import React,{Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class TodoAdd extends Component{
    state = {
        id:'',
        description:'',
        deadline:moment(),
        done:false
    }
    onChangeState(field,value){
        const currentState=this.state;
        currentState[field]=value;
        this.setState(currentState);
    }
    handleDateStateChange = (element) => {
        this.setState({deadline:element});
      }
    onAddFunction(id,description,deadline,done){
        this.props.addFunction(id,description,deadline,done);
        this.setState({
            id:'',
            description:'',
        })
    }
    render() {
        return (
            <div className='todoAdd'>
                <textarea placeholder='description' type='text' value ={this.state.description} onChange={(element) => this.onChangeState('description',element.target.value)}/>
                <DatePicker selected={this.state.deadline} onChange={this.handleDateStateChange}/>;
                <button className="addClick" onClick={() => this.onAddFunction(this.state.id,this.state.description,this.state.deadline,this.state.done)}>Add</button>
            </div>
        )
    }
}


export default TodoAdd;
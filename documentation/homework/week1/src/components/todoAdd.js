import React,{Component} from 'react';

class TodoAdd extends Component{
    state = {
        id:'',
        description:'',
        deadline:'',
        done:false
    }
    onChangeState(field,value){
        const currentState=this.state;
        currentState[field]=value;
        this.setState(currentState);
    }
    onAddFunction(id,description,deadline,done){
        this.props.addFunction(id,description,deadline,done);
        this.setState({
            id:'',
            description:'',
            deadline:'',
        })
    }
    render() {
        return (
            <div className='todoAdd'>
                <div>
                    <input placeholder='id' type='text' value={this.state.id} onChange={(element) => this.onChangeState('id',element.target.value)}/>
                </div>
                <div>
                    <textarea placeholder='description' type='text' value ={this.state.description} onChange={(element) => this.onChangeState('description',element.target.value)}/>
                </div>
                <div>
                    <input placeholder='deadline' type='text' value={this.state.deadline} onChange={(element) => this.onChangeState('deadline',element.target.value)}/>
                </div>
                    <button onClick={() => this.onAddFunction(this.state.id,this.state.description,this.state.deadline,this.state.done)}>Add</button>
                <div>
                    
                </div>
            </div>
        )
    }
}


export default TodoAdd;
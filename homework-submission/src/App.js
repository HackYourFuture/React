
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer,inject}  from 'mobx-react';
import MyList from './myList';
import AddTodo from './addTodos';
import Edit from './edit'
@inject("StoreTodo")
@observer
class App extends Component {
//state for editing purpose only
  state={
    description:'',
    deadline:'',
    index:'',
    showEdit:false
  }
  onChange=(index,event)=>{
    return this.props.StoreTodo.onChange(index,event)
  }
  handleDeadlineChange=(value)=>{
   return this.props.StoreTodo.handleDeadlineChange(value)
  }
  handleDescriptionChange=(value)=>{
   return this.props.StoreTodo.handleDescriptionChange(value)
  }
  handlesubmit=(e)=>{
   e.preventDefault();
   let description=this.props.StoreTodo.todos.description;
   let deadline=this.props.StoreTodo.todos.deadline;
   let mydata={description:description,deadline:deadline}
   return this.props.StoreTodo.handlesubmit(mydata)
  }
  onDelete=(index)=>{
    this.props.StoreTodo.todoCount
   return this.props.StoreTodo.onDelete(index)
  }
  onEdit=async(index,description,deadline)=>{
    this.setState({
      description:this.props.StoreTodo.todos.stateLists[index].description,
      deadline:this.props.StoreTodo.todos.stateLists[index].deadline,
      index:index
    })
    this.state.showEdit=true
   }
   onUpdate=(e)=>{
    e.preventDefault();
    let copy=this.state
     return this.props.StoreTodo.onUpdate(copy.description,copy.deadline,copy.index);
   }
   onUpdateDescription=(e)=>{
     this.setState({
       description:e.target.value
     })
   }
   onUpdateDeadline=(e)=>{
     this.setState({
       deadline:e.target.value
     })
   }
  render() {
    return (
      <div className="App App-intro text-center container row">
      <header>
            <h1>toDo list</h1>
      </header><br/>
      <div className="col-lg-7">
        <AddTodo handleDescriptionChange={this.handleDescriptionChange}
         handleDeadlineChange={this.handleDeadlineChange}
         handlesubmit={this.handlesubmit}/>
        {this.props.StoreTodo.todos.stateLists.map((list,index)=>
         <li style={{textDecorationLine:list.done?'line-through':null}}>
             <MyList key={index}
             description={list.description}
             deadline={list.deadline}
              ondelete={()=>this.onDelete(index)}
              onedit={()=>this.onEdit(index,list.description,list.deadline)}
              onChange={(event)=>this.onChange(index,event)}></MyList>

         </li>
        )}
         {this.state.showEdit &&
           <form>
           <p>Hee,you are editing {"     '"+this.state.description +" "+ this.state.deadline+"'!,    Okay, modify it and click update button."}</p>
              <input type="text" onChange={this.onUpdateDescription} value={this.state.description}/>
              <input type="text" onChange={this.onUpdateDeadline} value={this.state.deadline} />
              <button onClick={(e)=>this.onUpdate(e)}>update</button>
           </form>}

      </div>


      </div>
    );
  }
}

export default observer(App);

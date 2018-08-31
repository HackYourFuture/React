import React, { Component } from 'react';
import MyList from './myList';
import AddTodo from './addTodos';
import stateLists from './listJson.json';
import Edit from './edit'
class App extends Component {
  constructor(props){
    super(props);
    this.state=this.state
  }
  state={
    stateLists,
    schedules:[{'description':'','deadline':''}],
  description:'',
  deadline:'',
  active:false,
  nextId:3,
  show:false
  }
onChange=(index,event)=>{
  let myCopyOfData=this.state.stateLists;
  if(event.target.checked===true){
    myCopyOfData[index].done=true;
    this.setState({
      active:true
    })
  }else{
    myCopyOfData[index].done=false
    this.setState({
      active:false
    })

  }
}
onUpdate=(index)=>{
  alert(index+" update")
}
onDelete=(index)=>{
  let myCopyOfData=this.state.stateLists;
  myCopyOfData.splice(index, 1);
  alert("deleted")
  this.setState({myCopyOfData})
}
onEdit=(index)=>{
  let myCopyOfData= this.state.stateLists
  let myCopyOfData2=this.state
//  alert(myCopyOfData.stateLists[index].description)
const {show}=this.state;
  myCopyOfData[index].description=myCopyOfData[index].description;
  myCopyOfData[index].deadline=myCopyOfData[index].deadline;
  myCopyOfData2.description=myCopyOfData[index].description
  this.setState({
    description:myCopyOfData.description,
    deadline:myCopyOfData.deadline,
    show:!show
  })

}
handlesubmit=()=>{

  if(this.state.description==='' || this.state.deadline===''){
     return alert("Enter description and Deadline")
  }
  let todos=this.state.stateLists.slice();
  todos.push({id:this.state.nextId,description:this.state.description,deadline:this.state.deadline});
  this.setState({
    stateLists:todos,
    nextId:++this.state.nextId
   });
   console.log("hello")
}
handleDeadlineChange=(value)=>{
  this.setState({
    deadline:value
  })
}
handleDescriptionChange=(value)=>{
  this.setState({
    description:value
  })
}
handleDeadlineUpdate=(index,value)=>{
  let myCopyOfData=this.state.stateLists;
  this.setState({
    deadline:myCopyOfData[index].deadline
  })
}
handleDescriptionUpdate=(index,value)=>{
  let myCopyOfData=this.state.stateLists;
  this.setState({
    description:myCopyOfData[index].description
  })

}

render() {
    return (
      <div className="App App-intro text-center">
        <header className="App-header text-center">
        <h1>to do list</h1>
        </header>
          <MyList style={{textDecorationLine:'line-through'}} description={this.state.stateLists[0].description} deadline={this.state.stateLists[0].deadline}>{this.state.stateLists[0].description}</MyList>
          <h4>home work3</h4>
              {this.state.stateLists.map((list,index)=>
                <MyList key={index} description={list.description}
                deadline={list.deadline}
                ondelete={()=>this.onDelete(index)}
                onedit={()=>this.onEdit(index)}
                onChange={(event)=>this.onChange(index,event)}>
                <li>{list.description +"  "+list.deadline}</li>

                </MyList>

              )}
            <AddTodo handleDescriptionChange={this.handleDescriptionChange}
              handleDeadlineChange={this.handleDeadlineChange}
              handlesubmit={this.handlesubmit}
              />
        {this.state.show && <Edit/>}
      </div>
    );
  }
}
export default App;

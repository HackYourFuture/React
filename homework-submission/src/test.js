// {this.state.stateLists.map((list,index)=>
//  <MyList key={index} description={list.description} deadline={list.deadline} className={myClass} onChange={(event)=>
//    this.onChange(index,event)}>{list.description +"  "+list.deadline+ " "+this.state.textDecorationLine}
//   </MyList>
// )}
 // -----------
 // <input type="text" value={this.props.description} onChange={(e)=>this.props.handleDescriptionUpdate(e.target.value)}/>
 // <input type="text" value={this.props.deadline} onChange={(e)=>this.props.handleDeadlineUpdate(e.target.value)}/><button onClick={this.props.onupdate}>update</button>


 // <MyList key={index} description={list.description}
 // deadline={list.deadline}
 // ondelete={()=>this.onDelete(index)}
 // onedit={()=>this.onEdit(index)}
 // onChange={(event)=>this.onChange(index,event)}>
 // <li>{list.description +"  "+list.deadline}
 // </li>
 // </MyList>


//app.js

//  constructor(props){
//    super(props);
//    this.state=this.state
//  }
//  state={
//    stateLists,
//    schedules:[{'description':'','deadline':''}],
//  description:'',
//  deadline:'',
//  textDecorationLine:'',
//  nextId:3,
//  show:false,
//  textDecorationLine:''
//  }
// onChange=(index,event)=>{
//  let data=this.state.stateLists;
//  var mystyle={
//    textDecorationLine:"line-through"
//  }
//  if(event.target.checked==true){
//    data[index].done=true;
//    this.setState({
//      stateLists:data,
//      textDecorationLine:'line-through'
//    })
//  }else{
//   data[index].done=false;
//    this.setState({
//      stateLists:data,
//      textDecorationLine:''
//    })
//  }
// }
// onUpdate=(index)=>{
//  alert(index+" update")
// }
// onDelete=(index)=>{
//  let myCopyOfData=this.state.stateLists;
//  myCopyOfData.splice(index, 1);
//  alert("deleted")
//  this.setState({myCopyOfData})
// }
// onEdit=(index)=>{
//  let myCopyOfData= this.state.stateLists
//  let myCopyOfData2=this.state
//  const {show}=this.state;
//  myCopyOfData[index].description=myCopyOfData[index].description;
//  myCopyOfData[index].deadline=myCopyOfData[index].deadline;
//  myCopyOfData2.description=myCopyOfData[index].description
//  this.setState({
//    description:myCopyOfData[index].description.toString(),
//    deadline:myCopyOfData[index].deadline,
//    show:!show
//  })
//
// }
// handleDeadlineUpdate=(index,value)=>{
//  let myCopyOfData=this.state.stateLists;
//  value=myCopyOfData[index].deadline
//  this.setState({
//    deadline:value
//  })
// }
// handleDescriptionUpdate=(index,value)=>{
//  let myCopyOfData=this.state.stateLists;
//  value=myCopyOfData[index].description
//  this.setState({
//    description:value
//  })
// }
// handlesubmit=(e)=>{
//  e.preventDefault();
//  let todos=this.state.stateLists;
//  let id=this.state.id;
//  let description=this.state.description;
//  let deadline=this.state.deadline;
//  let mydata={id:id,description:description,deadline:deadline}
//  todos.push(mydata);
//  this.setState({
//    stateLists:todos,
//    nextId:++this.state.nextId
//   });
// }
// handleDeadlineChange=(value)=>{
//  this.setState({
//    deadline:value
//  })
// }
// handleDescriptionChange=(value)=>{
//  this.setState({
//    description:value
//  })
// }
// render() {
//    return (
//      <div className="App App-intro text-center">
//        <header className="App-header text-center">
//        <h1>to do list</h1>
//        </header>
//        <h4>home work2</h4>
//          {this.state.stateLists.map((list,index)=>
//             <ul>
//             <li key={index} style={{textDecorationLine:list.done?'line-through':null}}><input type="checkbox" onChange={(event)=>this.onChange(index,event)}/>{list.description +"   "+list.deadline}</li>
//             </ul>
//          )}
//          <h4>home work3</h4>
//          <AddTodo handleDescriptionChange={this.handleDescriptionChange}
//            handleDeadlineChange={this.handleDeadlineChange}
//            handlesubmit={this.handlesubmit}/>
//              {this.state.stateLists.map((list,index)=>
//                <MyList key={index} description={list.description}
//                deadline={list.deadline}
//                ondelete={()=>this.onDelete(index)}
//                onedit={()=>this.onEdit(index)}
//                onChange={(event)=>this.onChange(index,event)}>
//                <li>{list.description +"  "+list.deadline}</li>
//                </MyList>
//              )}
//              { this.state.show && <Edit onUpdate={()=>this.onUpdate()} handleDeadlineChange={this.state.handleDeadlineChange} handleDescriptionChange={this.state.handleDescriptionChange}/>}
//      </div>
//    );
//  }
// }
// submitHandler=(e)=>{
//   e.preventDefault();
//
//   return this.props.StoreTodo.addTodo(this.description.value)
// }
//{this.props.StoreTodo.todoCount}
//<form onSubmit={(e)=>this.submitHandler(e)}>
 //<input type="text" placeholder="enter description" ref={input=>this.description=input}/>
//</form>

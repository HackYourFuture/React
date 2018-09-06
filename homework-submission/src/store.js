import {observable,action,computed,configure} from 'mobx';
import stateLists from './listJson.json';
configure({ enforceActions: true })
class StoreTodo  {
  @observable todos ={
    stateLists,
    description:'',
    deadline:'',
    showEdit:false
  };
@action onChange(index,event){
   if(event.target.checked==true){
       this.todos.stateLists[index].done=true;
   }else{
       this.todos.stateLists[index].done=false;
   }
  }
  @action handleDeadlineChange(value){
    return this.todos.deadline=value
  }
  @action handleDescriptionChange(value){
    return this.todos.description=value
  }
  @action addTodo(todo) {
    return this.todos.push(todo)
  }
  @action handlesubmit(e){
    return this.todos.stateLists.push({description:this.todos.description,deadline:this.todos.deadline})
  }
  @action onDelete(index){
    return this.todos.stateLists.splice(index,1)
  }
  @action onUpdate(description,deadline,index){
    this.todos.stateLists[index].description=description
    this.todos.stateLists[index].deadline=deadline
    return this.todos.stateLists
  }
}
const myListTodo= new StoreTodo;
export default myListTodo;

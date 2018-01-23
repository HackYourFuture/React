import React from 'react';
import {inject, observer} from 'mobx-react';
import {taskStore} from './stores';
import Task from './Task' ;
import TaskForm from './TaskForm';

@inject('taskStore')
@observer

export default class TodoList extends React.Component {
    
state = {
    editingTodoID: null
  }
   
handleTaskAdd = newTodo => {
     taskStore.addTask(newTodo);
 };

handleRemoveTodo = (todoItem) => {
     taskStore.removeTask(todoItem);
    
}

toggleStatus = (todoID) =>{
     taskStore.toggleStatus(todoID);    
}

handleEditTodo = id => {
  this.setState({editingTodoID: id});
};
handleCancleEdit = ()=> {
    this.setState({editingTodoID: null});
}
handleSaveEdit = (id , description) => {
     taskStore.handleSaveEdit(id, description);
     this.setState({editingTodoID: null});
};

  render() {
    return (
      <div>
         <TaskForm 
           ontodoAdd = {this.handleTaskAdd}
          />
		<ul className='tasks'>
			{taskStore.todos.map((todoItem, i)=> 
            <Task 
             key={todoItem.id} 
             todoItem = {todoItem}
             toggleStatus ={this.toggleStatus}
             onRemove = {this.handleRemoveTodo}
             isEditing = {todoItem.id === this.state.editingTodoID}
             onEdit = {this.handleEditTodo}
             onCancleEdit = {this.handleCancleEdit}
             onSaveEdit = {this.handleSaveEdit}
            />
    )}
		</ul>
      </div>
    );
  }
}
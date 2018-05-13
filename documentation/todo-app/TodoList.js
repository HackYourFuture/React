import React from 'react';
import Todo from './Todo';
import initialTodoData from './data/todo-data.json';


const todos = [
    {
id: '1',
      task: "Get out of bed",
       time: "Wed Sep 13 2017"
     },
 {
 id: '2',
      task: "Brush teeth",
          time: "Thu Sep 14 2017"
             },
 {
 id: '3',
      task: "Eat breakfast",
          time: "Fri Sep 15 2017"
             }
]

export default class TodoList extends React.Component {
    render() {
        return (

            <div className="TodoList" >
                {this.renderList()}
            </div >
        );
        state = {
            todos: initialTodoData,
        }
    
        handleDoneToggle = (todoId) => {
            this.setState({
                todos: this.state.todos.map(todo => {
                    if (todo.id === todoId) {
                        todo.done = !todo.done
                    }
                    return todo
                })
            })
        }

    

        renderList() {
    
            const { todos } = this.state
            
            return (
                <ul>
                    {todos.map((todo, index) => (
                        <React.Fragment key={todo.id}>
                            {index > 0 && <li className="TodoList-separator" />}
                            <Todo todo={todo} />
                            {/* passing event handler into the comment */}
                            <Todo handleDoneToggle={this.handleDoneToggle} todo={todo} />
                        </React.Fragment>
                    ))}
                </ul>
            )
                ;
        }

        render() {
    
            return (
                <div className="TodoList" >
                    {this.renderList()}
                </div >
            );
        }
    }
}




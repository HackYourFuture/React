import React, { Component } from "react"
import Post from "../Post"

import ToDos from "../Todos"

class TodoItem extends Component {
   constructor(props) {
      super(props)
      this.state = {
         Todos: ToDos
      }
      this.onChange = this.onChange.bind(this)
   }

   onChange(id) {
      this.setState(prevState => {
         const updatedTodos = prevState.Todos.map(todo => {
            if (todo.id === id) {
               todo.completed = !todo.completed
            }
            return todo
         })
         return {
            Todos: updatedTodos
         }
      })
   }

   render() {
      const blank = <h2>No items...</h2>;
      return (
         this.state.Todos.length === 0 ? blank :
            <div>
               {
                  ToDos.map((item, id) => (
                     <Post
                        checkbox={<input type="checkbox" checked={item.completed} onChange={() => this.onChange(item.id)} />}
                        description={item.description}
                        deadline={item.deadline}
                        key={id}>
                     </Post>

                  ))

               }
            </div >
      )
   }
}

export default TodoItem
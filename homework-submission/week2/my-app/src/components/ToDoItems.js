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


   onChange(id, item) {
      const updatedTodos = this.setState({ changed: id === item.id ? (item.completed = !item.completed) : null })
      return {
         Todos: updatedTodos
      }
   }

   render() {
      const blank = <h2>No items...</h2>;
      return (
         this.state.Todos.length === 0 ? blank :
            <div>
               {
                  ToDos.map((item, id) => (
                     <Post
                        description={item.description}
                        deadline={item.deadline}
                        key={id}>
                        <label>
                           <input type="checkbox" checked={item.completed} onChange={() => this.onChange(item.id, item)} />
                        </label>
                     </Post>

                  ))

               }
            </div >
      )
   }
}

export default TodoItem
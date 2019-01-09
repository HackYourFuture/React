import React, { Component } from "react"
import Post from "../Post"

const items = [
   {
      checkbox: <input type="checkbox" />,
      description: "Get out of bed",
      deadline: "Wed Sep 13 2017"
   },
   {
      checkbox: <input type="checkbox" />,
      description: "Brush teeth",
      deadline: "Thu Sep 14 2017"
   },
   {
      checkbox: <input type="checkbox" />,
      description: "Eat breakfast",
      deadline: "Fri Sep 15 2017"
   }
]

class TodoItem extends Component {
   render() {
      return (
         <div >
            {
               items.map((item) => (
                  <Post checkbox={item.checkbox}
                     description={item.description}
                     deadline={item.deadline}>
                  </Post>
               ))
            }
         </div>
      )
   }
}

export default TodoItem
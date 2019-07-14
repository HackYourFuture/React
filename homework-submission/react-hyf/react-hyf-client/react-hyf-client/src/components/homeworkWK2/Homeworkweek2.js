import React from 'react'

class DynamicList extends component {
 
    state = {
            toDos : [
              {
                id: 1,
                description: "Get out of bed",
                deadline: "2017-09-11",
                done: true
              },
              {
                id: 2,
                description: "Brush teeth",
                deadline: "2017-09-10",
                done: false
              },
              {
                id: 3,
                description: "Eat breakfast",
                deadline: "2017-09-09",
                done: false
              }
          ]
  
      }
    addTodo = (e => {
      e.preventDefault();
      const addingTodo = {
          id: this.state.toDos,
          description: e.target.description.value,
          deadline: e.target.deadLine.value,
          done: false
      }
      this.setState({toDos: this.state.toDos.concat(addingTodo) })
    })
    
    removeTodo = (index => {
      const removingTodo = this.state.toDos.filter(item => item.id !== index);
      this.setState({ toDos: removingTodo })
    })
    
  
  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
            <input type="text" placeholder="Description" name="description"></input>
            <input type="Date" placeholder="DeadLine" name="deadLine"></input>
            <input type="submit" value="Submit" ></input>
        </form>
            {this.state.toDos.map((todoList) =>
          <div key={todoList.id}>
              <li >
                {todoList.description},{todoList.deadline}
                <button onClick={() => this.removeTodo(todoList.id)}>remove</button>
              </li>
          </div>
          )}
      </div>
    )
  }
  
}
  
  
class Homeworkweek2 extends React.Component {
  name = "Todos"
    render () {
      return (
          <div>
              <h1>React {this.name}</h1>  
              <DynamicList />
          </div>
        )
    }
}

export default Homeworkweek2;
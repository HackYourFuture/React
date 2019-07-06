
const addTodo = (e => {
    e.preventDefault();
    const addingTodo = {
        id: this.state.toDos,
        description: e.target.description.value,
        deadline: e.target.deadLine.value,
        done: false
    }
    this.setState({toDos: this.state.toDos.concat(addingTodo) })
  })
  
  const removeTodo = (index => {
    const removingTodo = this.state.toDos.splice(index, 1)
    this.setState({ removingTodo })
  })
  
  
  
  class DynamicList extends React.Component{
    constructor() {
      super()
      this.state = {
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
  
    }
    render() {
      return (
        <div>
          <form >
              <input type="text" placeholder="Description" name="description"></input>
              <input type="Date" placeholder="DeadLine" name="deadLine"></input>
              <input type="submit" value="Submit" name="add" ></input>
          </form>
              {this.state.toDos.map((todoList) =>
            <div>
                <li key={todoList.id}>
                  {todoList.description},{todoList.deadline}
                  <button onClick={() => this.removeTodo}>remove</button>
                </li>
            </div>
            )}
        </div>
      )
    }
  
  }
  
  
  class App extends React.Component {
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
  
  ReactDOM.render(
    <App />,
    document.getElementById('thisIsWhereReactIsInjected')
  );
  
import React from 'react'

class todoStage extends React.Component {
  constructor(props) {
    super(props);

    this.handleTodoStage = this.handleTodoStage.bind(this);
  }

  handleTodoStage(event) {
    const todoStage = event.target.checked
    const todoID = this.props.todo.id
    this.props.onChange(todoStage, todoID)
  }

  changeStyle() {
    let style = { color: 'red' }
    if (this.props.todo.stage) {
      style = { color: 'greenyellow' }
    }
    return style
  }
  
  getTodoStatus() {
    let doneOrNot = 'Not Done'
    if (this.props.todo.stage) { doneOrNot = 'Done' }
    return doneOrNot
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="checkbox"
            checked={this.props.todo.stage}
            onChange={this.handleTodoStage}>
          </input>
          <label style={this.changeStyle()}>
            {this.getTodoStatus()}
          </label>
        </div>
      </div>
    )
  }
}
export default todoStage
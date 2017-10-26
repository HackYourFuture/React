import React from 'react'

class todoState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.done
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let changed = !this.state.checked
    this.setState({
      checked: changed
    })
  }
  changeStyle() {
    let style = {color: 'red'}
    if (this.state.checked) {
      style = {color: 'greenyellow'}
    } 
    return style
  }
  getTodoStatus () {
    let doneOrNot = 'Not Done'
    if (this.state.checked) {doneOrNot = 'Done'}
    return doneOrNot
  }

  render() {
    return (
      <div>
        <input type="checkbox"
          checked={this.state.checked}
          onChange={this.handleChange}>
        </input>
        <label style={this.changeStyle()}>
          {this.getTodoStatus ()}
        </label>
      </div>
    )
  }
}
export default todoState
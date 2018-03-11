import React, { Component } from 'react'

export default class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: this.props.done,
      styleCheck: {
        textDecoration: null,
        color: null
      }
    }
    this.handleCheck = this.handleCheck.bind(this)
  }
  handleCheck(e) {
    const checked = e.target.checked
    this.setState(prevState => ({
      checked: !prevState.checked,
      styleCheck: {
        textDecoration: checked && 'line-through',
        color: checked && 'red'
      }
    }))
  }
  componentDidMount() {
    this.setState({
      ...this.state,
      styleCheck: {
        textDecoration: this.state.checked && 'line-through',
        color: this.state.checked && 'red'
      }
    })
  }
  render() {
    return (
      <li style={this.state.styleCheck} >
        <input type='checkbox' checked={this.state.checked} onChange={this.handleCheck} />
        {this.props.children}
      </li>
    )
  }
}

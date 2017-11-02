import React from 'react'

class todoBox extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        clicked: this.props.done
    }
    this.handleChange = this.handleChange.bind(this);
}
handleChange(event) {
    let clicked = !this.state.clicked
    this.setState({
        clicked: clicked
    })
}
changeStyle() {
    let style = {color: 'red'}
    if (this.state.clicked) {
        style = {color: 'greenyellow'}
    }
    return style
}
getTodoStatus () {
    let doneOrNot = 'Not done'
    if (this.state.clicked) {doneOrNot = "Done"}
    return doneOrNot
}

render() {
    return (
        <div>
        <input type = "checkbox"
        clicked = {this.state.clicked}
        onClick = {this.handleChange}>
        </input>
        <label style={this.changeStyle()}>
        {this.getTodoStatus ()}
        </label>
        </div>
    )

    }
}
export default todoBox

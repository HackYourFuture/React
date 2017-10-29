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

    todoStatus() {
        let status = 'Not Done'
        if (this.state.checked) { status = 'Done' }
        return status
    }

    render() {
        return (
            <div>
                <input type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChange}>
                </input>
                {this.todoStatus()}
            </div>
        )
    }
}
export default todoState
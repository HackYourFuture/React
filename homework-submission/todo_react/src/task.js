import React from 'react';
import DatePicker from 'react-date-picker';



class Task extends React.Component {
    state = {
        deadline: new Date(),
    }

    onChange = deadline => this.setState({ deadline })

    render() {
        return (
            <div>
                <p>The task: {this.props.description}, todo till: {this.props.deadline} </p>
                <p>{this.props.children}</p>
                <DatePicker

                    onChange={this.onChange}
                    value={this.state.deadline}

                />

            </div>
        );
    }
}

export { Task }

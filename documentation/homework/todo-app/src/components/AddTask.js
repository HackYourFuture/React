import React from 'react';

export default class AddTask extends React.Component {
    constructor() {
        super();
        this.handleSumbit = this.handleSumbit.bind(this);
    }

    handleSumbit(e) {
        e.preventDefault();

        const input = e.target.querySelector('input[type="text"]');
        const task = input.value;

        this.props.addTask(task);

        input.value = '';
    }

    shouldComponentUpdate(nextProps) {
        // if (nextProps !== this.props) {
        //   console.log('Render form!');
        //   return true;
        // }

        console.log('Not render!');
        return false;
    }

    render() {
        return (
            <form onSubmit={this.handleSumbit}>
                <input type="text" />
            </form>
        )
    }
}
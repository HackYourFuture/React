import React from 'react';
import DatePicker from 'react-date-picker';


class DateP extends React.Component {
    constructor() {
        super();
        this.state = {
            deadline: new Date(),
        }

    }
    onChange = (deadline) => {
        this.setState({ deadline })
    }

    render() {
        return (
            <div className='date'>
                <DatePicker
                    onChange={this.onChange}
                    value={this.state.deadline}

                />
            </div>
        );
    }
}

export { DateP }



export default class ItemCreate extends React.Component {
    constructor() {
        super();
        this.state = {
            to_do: []
        }


    }

    handleClick = () => {
        this.setState({
            to_do: this.state.to_do.concat(this.target.value),
        });
    }

    render() {
        let addedItems = this.props;

        addedItems = this.state.to_do.map((item, index) =>

            <div key={index}>
                <ul>
                    <li >
                        <input type="checkbox" className="myCheck"
                           /* onChange={this.handleChecked}*/ /><label>{item} /
                         < DateP /> Set deadline: </label>

                    </li>
                </ul>
            </div >
        );

        return (
            <div>
                <div className='addItem'>
                    <input type="text" id='input' placeholder="Enter new task" ref={(ref) => this.target = ref} />


                    <button type="button" className="btn1" onClick={this.handleClick}>Add</button>
                </div>
                {addedItems}
            </div>
        );
    }
}



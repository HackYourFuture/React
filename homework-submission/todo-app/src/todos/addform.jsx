import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';

class SendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            deadline: '',
            done: false,
            startDate: moment()
        };
    }

    handleDateChange = date => {
        this.setState({
            deadline: date.format("DD-MM-YYYY"),
            startDate: date
        });
    }

    handleTextChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        const checkDateField = this.state.deadline;
        if(checkDateField ==='') {
            const itemOfToday = {
                ...this.state,
                deadline: moment().format("DD-MM-YYYY")
            }
            this.props.addNewItem(itemOfToday);
        }else this.props.addNewItem(this.state);
        
        const initialState = {
            description: '',
            deadline: '',
            done: false,
            startDate: moment()
        }
        this.setState(initialState);
    }

    render() { 
        return ( 
            <form className="needs-validation text-center mb-4" onSubmit={this.handleSubmit}>
             <div className="form-group col-md-8 mx-auto">
                <label>Your item</label>
                <input type="text" 
                    className="form-control border border-primary"
                    name="description" 
                    id="validationCustom01"
                    placeholder="Enter your new item.."
                    value={this.state.description}
                    onChange={this.handleTextChange} 
                    required
                    />
                    <div className="valid-feedback">Looks good!</div>
            </div>


            <div className="form-group">
                <DatePicker
                    dateFormat="DD-MM-YYYY"
                    selected={this.state.startDate}
                    onChange={this.handleDateChange}
                    inline
                    placeholderText="Choose a deadline date.."
                    className="form-control border border-primary"
                />
            </div>
                <button className="btn btn-primary" type="submit">Add Item</button>
            </form>
         );
    }
}
 
export default SendForm;
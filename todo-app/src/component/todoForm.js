import React from 'react';
// import DatePicker from 'react-date-picker';



export default class TodoForm extends React.Component {
 
    render() {
        const {
            description,
            handleDescriptionChange,
            deadline,
            handleDateChange,
            handleSubmit,
        } = this.props;

        return (
            <form  onSubmit={handleSubmit}>
                <input 
                    type="text" placeholder="Add new todo item"
                    value={description}
                    onChange={handleDescriptionChange} />
                <input 
                    type="date" 
                    value={deadline}
                    onChange={handleDateChange} />
                <input type="submit" value="Submit" />

            </form>
        );
    }
}


import React from 'react';

class Calender extends React.Component {
    state = {
        time: new Date()
    }


    currentTime = () => {
        this.setState({
            time: new Date()
        })
    }
    componentWillMount = () => {
        setInterval(() => this.currentTime(), 1000)
    }

    render() {
        return <div className='calender'>
            <p>Calender and Time</p>
            <input type='date' name='calenderInput' />

            {this.state.time.toLocaleTimeString()}

        </div>;
    }
}

export default Calender;
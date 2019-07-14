import React, { component } from 'react';


const User = () => {
    return (
        <li>
            
        </li>
    )
}

class Homeworkweek3 extends component {
    state = {
        users: []
    }

    componentDidMount() {
        const url = 'https://uinames.com/api/?amount=10';
        fetch(url)
        .then(res => res.json())
        .then(users => {
            this.setState({ users })
        })
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                {this.state.users}
            </div>
        )
    }
}

export default Homeworkweek3;

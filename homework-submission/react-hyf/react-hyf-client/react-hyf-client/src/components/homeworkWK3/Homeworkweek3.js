import React, { Component } from 'react';


// const User = () => {
//     return (
//         <li>
            
//         </li>
//     )
// }

class Homeworkweek3 extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        const url = 'https://uinames.com/api/?amount=10';
        fetch(url)
        .then(res => res.json())
        .then(data => {this.setState({ users: data })
        })
    }

    render() {
        console.log(this.state.users)
        return (
            <div>
                <h1>Users</h1>
                <ul>
                    {this.state.users.map(userInfo => {
                        return <li key={userInfo.index}>name: {userInfo.name}, 
                        surname: {userInfo.surname},
                        gender: {userInfo.gender}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Homeworkweek3;

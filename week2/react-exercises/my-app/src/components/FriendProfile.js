import React from 'react';



function FriendProfile({firstName, lastName, street, city, houseNum , state, country, email, phoneNum}) {
    return (
        <ul> 
            <li>first name: {firstName}</li>
            <li>Last Name: {lastName}</li>
            <li>Country: {country}</li>
            <li>Address: {state}, {city}, {street}, {houseNum}</li>
            <li>Email: {email}</li>
            <li>Phone Number: {phoneNum}</li>
        </ul>
    )
}

export default FriendProfile

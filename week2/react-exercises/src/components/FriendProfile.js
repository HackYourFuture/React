import React from 'react'

function FriendProfile(props){
    return (
        <div>
            <ul key={props.id} className="info_list">
                <li>Name:   {props.first} {props.last}</li>
                {/* <li>First Name: {props.first}</li>
                <li>Last Name: {props.last}</li> */}
                <li>Address:    {props.street} {props.number}</li>
                <li>Post Code:  {props.postCode}</li>
                <li>City:   {props.city}</li>
                <li>Country:    {props.country}</li>
                <li>Email:  {props.email}</li>
                <li>Phone:  {props.phone}</li>
            </ul>
        </div>
    )
}

export default FriendProfile
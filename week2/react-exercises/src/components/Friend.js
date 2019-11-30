import React, { useState } from 'react'
import Button from './button'
import FriendProfile from './FriendProfile'

function Friend() {
    const [friend, setFriend] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    async function getFriend() {
        const response = await fetch('https://www.randomuser.me/api?results=1')
        const info = await response.json();
        const friends = info.results[0]
        setFriend(friends)
        setIsLoading(true)
    }

    return (

        <div className="get_friend">
             <Button getStart={() => getFriend()} />
            {isLoading === true && <FriendProfile
                id={friend.login.uuid}
                first={friend.name.first}
                last={friend.name.last}
                street={friend.location.street.name}
                number= {friend.location.street.number}
                postCode={friend.location.postcode}
                city={friend.location.city}
                country={friend.location.country}
                email={friend.email}
                phone={friend.phone}
            />
            }
        </div>
    )

}

export default Friend
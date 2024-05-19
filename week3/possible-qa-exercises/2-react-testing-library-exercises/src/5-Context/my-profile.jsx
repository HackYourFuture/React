import { useContext } from 'react'

import LoggedInUserContext from './logged-in-user-context'

import TEST_ID from './testids'

function MyProfile() {
    const { loggedInUser, isLoggedIn, logout } = useContext(LoggedInUserContext)

    if (isLoggedIn) {
        return (
            <div>
                <p>{`Welcome back ${loggedInUser.name}!`}</p>
                {/**
                 * Here may be some information of the user, maybe some
                 * notifications. Cut out for simplicity
                 */}
                <button
                    data-testid={TEST_ID.MYPROFILE_LOGOUT_BUTTON}
                    onClick={() => {
                        logout()
                    }}
                >
                    Log out
                </button>
            </div>
        )
    } else {
        /**
         * This is of course a HORRIBLE user experience, there would normally be
         * a link to a login page or a login form directly. We are simplifying
         * for educational purposes, we do NOT want to see things like this in
         * your projects :D
         */
        return (
            <div>
                <p data-testid={TEST_ID.MYPROFILE_LOGGED_OUT_MESSAGE}>
                    You are not logged in! Please login first.
                </p>
            </div>
        )
    }
}

export default MyProfile

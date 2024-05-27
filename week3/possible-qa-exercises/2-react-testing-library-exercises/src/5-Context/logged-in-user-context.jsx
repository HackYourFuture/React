import React, { useState } from 'react'

/**
 * This is a simplified version of what a Context can be used for. Many
 * pages/components in a bigger application will need to adjust based on the
 * user that is logged in, for example a profile picture/name in the navigation
 * bar or sending the logged-in user along with the request to get only data
 * applicable to them. As such it is a good idea to have a central place to
 * handle all of this!
 *
 * We have simplified the logging in/out a bit as we do not change anything in
 * the local storage (usually you would save that information there), but I hope
 * you can see how this allows easy adjustments to the logged in information
 * without too much hassle!
 */
const LoggedInUserContext = React.createContext({
    loggedInUser: null,
    isLoggedIn: false,
    login: () => {
        /**
         * We throw an error as the code should never get here. If we do the
         * sound the alarm bells!
         */
        throw Error('LoggedInUserContext>>login() is not declared')
    },
    logout: () => {
        /**
         * We throw an error as the code should never get here. If we do then
         * sound the alarm bells!
         */
        throw Error('LoggedInUserContext>>logout() is not declared')
    },
})

/**
 * We've put the Provider in the same file as the Context as the Context and
 * Provider are interconnected.
 *
 * The Provider is only needed once, so we make that a named export and have
 * the Context be the default export.
 */
export function LoggedInUserContextProvider({ children, initialUser = null }) {
    const [loggedInUser, setLoggedInUser] = useState(initialUser)

    const isLoggedIn = loggedInUser != null

    const login = (user) => {
        setLoggedInUser(user)
    }

    const logout = () => {
        setLoggedInUser(null)
    }

    return (
        <LoggedInUserContext.Provider
            value={{
                loggedInUser,
                isLoggedIn,
                login,
                logout,
            }}
        >
            {children}
        </LoggedInUserContext.Provider>
    )
}

export default LoggedInUserContext

import { useContext } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import LoggedInUserContext, {
    LoggedInUserContextProvider,
} from '../../src/5-Context/logged-in-user-context'

/**
 * Contexts may look like they complicate testing, but actually they provide a
 * nice way of dividing your logic and rendering. And with a division of logic
 * and rendering it becomes easier to test.
 *
 * In this file we are looking at the logic of the Context and how to test it.
 * In the other test you can see how having a Context makes a rendering
 * component that uses the Context as simple as our simplest test from last
 * week!
 *
 * So when looking at the Context(Provider) it is clear that we need to check a
 * couple of things:
 * - There is an initialUser prop, we need to check that that is set and that
 * the initial isLoggedIn is then correct!
 *
 * - There is an `isLoggedIn` value, we need to check that correctly gives true
 * and false
 *
 * - There is a login function, we need to check that that changes if the user
 * isLoggedIn
 *
 * - There is a logout function, we need to check that actually logs out the
 * user (by checking isLoggedIn again!)
 *
 * You may now be wondering how you are going to test these values as the
 * LoggedInUserContextProvider does not render anything.
 * Well the way to do that is to create our own custom TestComponent!
 */
const TEST_ID = {
    LOGGED_IN_USER: 'loggedInUser',
    IS_LOGGED_IN: 'isLoggedIn',
    LOGIN: 'login',
    LOGOUT: 'logout',
}

/** We provide a prop that can be given, this will be given to the login
 * function if you click on it */
function TestComponent({ userToLogin }) {
    const { loggedInUser, isLoggedIn, login, logout } =
        useContext(LoggedInUserContext)

    /** You can make this as complicated as you want, make whatever value you
     * want available in a way you want */
    return (
        <div>
            <div
                data-testid={TEST_ID.LOGGED_IN_USER}
                data-value={JSON.stringify(loggedInUser)}
            />
            <div data-testid={TEST_ID.IS_LOGGED_IN} data-value={isLoggedIn} />
            <button
                data-testid={TEST_ID.LOGIN}
                onClick={() => login(userToLogin)}
            >
                Log in
            </button>
            <button data-testid={TEST_ID.LOGOUT} onClick={() => logout()}>
                Log out
            </button>
        </div>
    )
}

describe('LoggedInUserContext', () => {
    it('Correctly sets the user as loggedIn if an initialUser is given', () => {})

    it('Correctly sets the user as logged out if no initialUser is given', () => {})

    it('logs the user in if you use the login function', () => {})

    it('logs the user out if you use the logout function', () => {})
})

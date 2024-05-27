/**
 * This is an example of a typical custom component to have input fields to
 * change your user details. Sometimes you want to use an actual <form> element,
 * but if you want to have full control over all the variables you can implement
 * it like this.
 *
 * The props:
 * - initialUserValues -> These are the initial values the form should have.
 * This will be what the parent component will provide from the backend
 * - onSubmit -> This function will be called with an object containing the
 * firstName, lastName and role that the user has filled in
 */

import { useState } from 'react'

function UserDetailsForm({ initialUserValues, onSubmit }) {
    const [firstName, setFirstName] = useState(initialUserValues.firstName)
    const [lastName, setLastName] = useState(initialUserValues.lastName)
    const [role, setRole] = useState(initialUserValues.role)

    return (
        <div>
            <label>
                First name:
                <input
                    type="text"
                    name="firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label>
                Last name:
                <input
                    type="text"
                    name="lastname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <label>
                Role:
                <input
                    type="text"
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />
            </label>
            <button
                type="submit"
                onClick={() => {
                    onSubmit({ firstName, lastName, role })
                }}
            >
                Submit
            </button>
        </div>
    )
}

export default UserDetailsForm

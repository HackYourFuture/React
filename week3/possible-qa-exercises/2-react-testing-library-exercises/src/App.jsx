import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import UserListItem from './1-UserListItem'
import UserDetailsForm from './2-UserDetailsForm'
import ChuckNorrisJoke from './3-ChuckNorrisJoke'
import RoutingApp from './4-Routing/routing-app'
import { LoggedInUserContextProvider } from './5-Context/logged-in-user-context'
import MyProfile from './5-Context/my-profile'
import useListState from './6-useListState'

function App() {
    const { list, addElement, removeElementWithId } = useListState([
        { id: uuidv4(), label: 'First item' },
    ])
    const [newItemLabel, setNewItemLabel] = useState('')

    return (
        <div>
            <UserListItem
                user={{ firstName: 'John', lastName: 'Doe', role: 'Admin' }}
            />
            <hr />
            <UserDetailsForm
                initialUserValues={{
                    firstName: 'John',
                    lastName: 'Doe',
                    role: 'Admin',
                }}
                onSubmit={() => {}}
            />
            <hr />
            <ChuckNorrisJoke />
            <RoutingApp />
            <hr />
            <LoggedInUserContextProvider initialUser={{ name: 'John' }}>
                <MyProfile />
            </LoggedInUserContextProvider>
            <hr />
            <ul>
                {list.map((item) => {
                    return (
                        <li key={item.id}
                            onClick={() => removeElementWithId(item.id)}>
                            {item.label}
                        </li>
                    )
                })}
            </ul>
            <div>
                <input
                    value={newItemLabel}
                    onChange={(e) => setNewItemLabel(e.target.value)}
                />
            </div>
            <button
                onClick={() =>
                    addElement({
                        id: uuidv4(),
                        label: newItemLabel,
                    })
                }
            >
                Add
            </button>
        </div>
    )
}

export default App

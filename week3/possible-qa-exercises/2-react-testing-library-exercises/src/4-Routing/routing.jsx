import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './home'
import Users from './users'
import UserDetails from './user-details'

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default Routing

import React,{useState} from 'react'
import {Link} from 'react-router-dom'

const UserProfile = ({currentUser}) => {

    const [user, setUser] = useState('')

    return(
        <div>
            <h3>Profile</h3>
            <p>{currentUser.displayName}</p>
            <p>Email: {currentUser.email}</p>
            <Link to='/update-profile'>Update Profile</Link>
        </div>
    )
}

export default UserProfile
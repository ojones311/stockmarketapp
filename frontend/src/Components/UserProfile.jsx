import React,{useState} from 'react'


const UserProfile = ({currentUser}) => {

    const [user, setUser] = useState('')

    return(
        <div>
            <h3>Profile</h3>
            <p>{currentUser.displayName}</p>
            <p>Email: {currentUser.email}</p>
        </div>
    )
}

export default UserProfile
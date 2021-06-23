import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import UserProfile from './UserProfile'

const AuthDashboard = () => {

    const [error, setError] = useState(false)
    const {currentUser, signout} = useAuth()
    const history = useHistory()

    const handleSignout = async () => {
        setError('')
        try{
            await signout()
            history.push('/accounts/signin')
        }catch(error){
            setError(error.message)
        }
    }
    return (
        <>
            <div>
                <h2>Dashboard</h2>
                <UserProfile currentUser={currentUser}/>
                <button onClick={handleSignout}>Log Out</button>
            </div>
        </>
    )
}


export default AuthDashboard
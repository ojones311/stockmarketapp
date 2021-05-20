import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'

const AuthDashboard = () => {

    const [error, setError] = useState(false)
    const {currentUser, signout} = useAuth()
    const history = useHistory()

    const handleSignout = async () => {
        setError('')
        try{
            await signout()
            history.push('/')
        }catch(error){
            setError(error.message)
        }
    }
    return (
        <>
            <div>
                Dashboard
            
                <button onClick={handleSignout}>Log Out</button>
            </div>
        </>
    )
}


export default AuthDashboard
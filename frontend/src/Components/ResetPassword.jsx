import React,{useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'

const ResetPassword = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const emailRef = useRef()

    const {passwordReset, currentUser } = useAuth()

    const handleResetPassword = (e) => {
        e.preventDefault()
        setError('')
        setMessage('')
        setLoading(true)

        const email = emailRef.current.value

        passwordReset(email)
            .then((ref) => {
                setLoading(false)
                setMessage('Check your inbox for further instruction')
            })
    }
    return (
        <div>
            <h2>Password Reset</h2>
            <form onSubmit={(e)=> handleResetPassword(e)}>
                <label for='email'>Email</label>
                <input type='text' ref={emailRef}></input>
                <button type='submit' disabled={loading}>Submit</button> 
                <div>
                    {message}
                </div>
            </form>
            <Link to='/accounts/signin'>Log In</Link>
            {currentUser && currentUser.email}
            <p>Need an account? <Link to='/accounts/signup'>Signup</Link></p>
        </div>
    )
}

export default ResetPassword
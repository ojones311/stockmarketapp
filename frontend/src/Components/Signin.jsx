import React,{useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'

const Signin = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const emailRef = useRef()
    const passwordRef = useRef()

    const { signin, currentUser } = useAuth()
    const history = useHistory()

    const handleSignin = (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        const email = emailRef.current.value
        const password = passwordRef.current.value
        
        //push user page path onto history stack
        signin(email,password)
            .then((ref) => {
                setLoading(false)
                history.push('/')
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }
    return (
        <div>
            <h2>Sign-in</h2>
            <form onSubmit={(e)=> handleSignin(e)}>
                <label for='email'>Email</label>
                <input type='text' ref={emailRef}></input>
                <label for='password'>Password</label>
                <input type='text' ref={passwordRef}></input>
                <button type='submit' disabled={loading}>Submit</button> 
            </form>
            <div>
                <Link to='/accounts/password-reset'>Forgot Password</Link>
            </div>
            {currentUser && currentUser.email}
            <p>Need an account? <Link to='/accounts/signup'>Signup</Link></p>
        </div>
    )
}

export default Signin
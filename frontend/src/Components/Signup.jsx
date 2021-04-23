import {useRef, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'

const Signup = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const emailRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()

    const { signup } = useAuth()
    const history = useHistory()

    const handleSignup = (e) => {
        e.preventDefault()
        setError('');
        setLoading(true)
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const username = usernameRef.current.value

        signup(email, password, username)
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
            <p>Signup</p>
            <form onSubmit={(e) => handleSignup(e)}>
                <input type='text' ref={emailRef}></input>
                <input type='text' ref={usernameRef}></input>
                <input type='text' ref={passwordRef}></input>
                <button type='submit' disabled={loading}>Submit</button>
                <div>
                    {error}
                </div>
            </form>
        </div>
    )
}

export default Signup
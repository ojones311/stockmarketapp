import react,{useState, useRef, useHistory, useAuth} from 'react'

const Signin = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const emailRef = useRef()
    const passwordRef = useRef()

    const {signin} = useAuth()
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
            <p>Signin</p>
            <form onSubmit={(e)=> handleSignin(e)}>
                <label for='email'>Email</label>
                <input type='text' ref={emailRef}></input>
                <label for='password'>Password</label>
                <input type='text' ref={passwordRef}></input>
                <button type='submit' disabled={loading}>Submit</button> 
            </form>
        </div>
    )
}

export default Signin
import {useContext, useState, useEffect, createContext} from 'react'
import {auth} from '../adapters/firebase'

const AuthContext = createContext();

//use this function to access the values of the context we created
export function useAuth() {
    return useContext(AuthContext)
}

//function that handles auth and allows child components to be passed through it as props
export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)

    const signup = (email, password, username) => {
        let promise = new Promise(function (resolve, reject) {
          auth
            .createUserWithEmailAndPassword(email, password)
            .then((ref) => {
              ref.user.updateProfile({
                displayName: username,
              });
              resolve(ref);
            })
            .catch((error) => reject(error));
        });
        return promise;
      };
    
    const signin = (email,password) => {
        let promise = new Promise(function (resolve,reject) {
            auth
                .signInWithEmailAndPassword(email,password)
                .then((ref) => {
                    resolve(ref)
                })
                .catch((error)=> {
                    reject(error)
                })
         })
         return promise
    }
    const signout = () => {
        return auth.signout()
    }

    const passwordReset = (email) => {
        let promise = new Promise(function (resolve,reject){
            auth
                .sendPasswordResetEmail(email)
                .then(() => {
                    resolve(`Password Reset Email sent to ${email}`)
                })
                .catch((error) => {
                    reject(error)
                })
        })
        return promise
    }
//updates state to currentUser 
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false)
        })
        return unsubscribe
    },[currentUser]);

    const value = {
        currentUser,
        signup,
        signin,
        signout,
        passwordReset
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
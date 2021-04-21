import {useContext, useState, useEffect, createContext} from 'react'

import {auth} from '../adapters/firebase'

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)

    const signup = (email,password) => {
        let promise = new Promise (function(resolve,reject) {
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
}
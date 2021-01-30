import axios from 'axios'
import React from 'react'


const UserList = () => {

    const fetchUserList = async() => {
        try{
            let response = await axios.get('')
        }catch(error){
            console.log('err', error)
        }
    }
    return (
        <div>
            <h3>UserList</h3>
        </div>
    )
}


export default UserList
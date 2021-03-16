import axios from 'axios'
import React,{useState, useEffect} from 'react'
import url from '../apiURL'

const UserList = () => {

    const [userList, setUserList] = useState([])

    const fetchUserList = async () => {
        try{
            let response = await axios.get(`${url}/users/all`)
            let users = response.data.payload
            console.log(users)
            setUserList(users)
        }catch(error){
            console.log('err', error)
        }
    }

    useEffect(() => {
       fetchUserList()
    },[])

    return (
        <div>
            <h3>UserList</h3>
            {
            userList.map((elem) => {
                return(
                    <div>
                        <img src={elem.avatar_url}></img>
                        <h4>{elem.username}</h4>
                        <p>{elem.email}</p>
                    </div>
                )
            })
        }
        </div>
    )
}


export default UserList
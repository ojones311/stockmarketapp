import axios from 'axios'
import React,{useEffect} from 'react'
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
    const displayUsers = () => {
        if(userList.length > 0){
            
        }
    }
    useEffect(() => {
       fetchUserList()
    },[userList])
    return (
        <div>
            <h3>UserList</h3>
        </div>
    )
}


export default UserList
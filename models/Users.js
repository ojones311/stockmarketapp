const db = require('../db/index')

const getAllUsers = () => {
    try{
        let query = 'SELECT * FROM users'
        const users = await db.any(query) 
        return users
    }catch(error){
        console.log('err', error)
    }
}


module.exports = {
    getAllUsers
}
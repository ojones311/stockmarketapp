const db = require('../db/index')

const getAllUsers = async () => {
    try{
        let query = 'SELECT * FROM users WHERE is_deleted=false'
        const users = await db.any(query) 
        return users
    }catch(error){
        console.log('err', error)
    }
}

getUserById = async (userId) =>{
    try{
        let query = `SELECT * FROM users WHERE user_id=$1 AND is_deleted=false`
        const user = await db.one(query,[userId])
        return user
    }catch(error){
        console.log('err',error)
    }
}

createNewUser = async (user) => {
    const insertQuery = 'INSERT INTO users(username, email,password, avatar_url, is_deleted) VALUES ($/username/, $/email/,$/password/, $/avatar_url/, $/is_deleted/) RETURNING *'

    try{
        const newUser = await db.one(insertQuery, {
            username: user.username,
            email: user.email,
            password: user.password,
            is_deleted: false
        })
        console.log(newUser)
        return newUser
    }catch(error){
        console.log('err',error)
    }
}


module.exports = {
    getAllUsers,
    getUserById,
    createNewUser,
}
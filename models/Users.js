const db = require('../db/index')

getAllUsers = async () => {
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
        let query = `SELECT * FROM users WHERE (id=$1 AND is_deleted=false)`
        const user = await db.one(query,[userId])
        return user
    }catch(error){
        console.log('err',error)
    }
}

getUserByEmail = async (email) => {
  try{
    let query = `SELECT * FROM users WHERE (email=$1 AND is_deleted=false)`
    const user = await db.one(query,[email])
    return user
  }catch(error){
      console.log('err', error)
  }
}

createNewUser = async (user) => {
    const insertQuery = 'INSERT INTO users(username, email,password, avatar_url, is_deleted) VALUES ($/username/, $/email/,$/password/, $/avatar_url/, $/is_deleted/) RETURNING *'

    try{
        const newUser = await db.one(insertQuery, {
            username: user.username,
            email: user.email,
            password: user.password,
            avatar_url: user.avatar_url,
            is_deleted: false
        })
        console.log(newUser)
        return newUser
    }catch(error){
        console.log('err',error)
    }
}

editUserInfo = async (user) => {
    let query = `UPDATE users SET username= $1, email= $2, avatar_url= $3 WHERE (id= $4 AND is_deleted= false`
    try{
        const editedUser = await db.none(query, [user.username, user.email, user.avatar_url, user.id])
        return editedUser
    }catch(error){
        console.log('err', error)
    }   
}

deleteUser = async (id) => {
    let query = `UPDATE users SET is_deleted= true WHERE (id= $1 AND is_deleted= false)`
    try{
        const deletedUser = await db.one(query,[id])
        return deletedUser
    }catch(error){
        console.log('err', error)
    }
}
module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    createNewUser,
    deleteUser
}
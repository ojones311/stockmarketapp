const db = require('../db/index')


const getFollowersByUserId = async(userId) => {
    try{
        let query = `SELECT * FROM following WHERE (user_id=$1 AND active_status=true)`
        const followers = await db.any(query, [userId])
        return followers 
    }catch(error){
        console.log('error', error)
    }
}

module.exports = {
    getFollowersByUserId
}
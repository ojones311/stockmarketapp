const db = require('../db/index')

const getAllStocks = async() => {
    try{
        let query = `SELECT * FROM stocks`
        const stocks = await db.any(query)
        return stocks
    }catch(error){
        console.log('err',error)
    }
}

module.exports = {
    getAllStocks
}
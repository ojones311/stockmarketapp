const db = require('../db/index')

getAllStocks = async() => {
    try{
        let query = `SELECT * FROM stocks WHERE is_deleted=false`
        const stocks = await db.any(query)
        return stocks
    }catch(error){
        console.log('err',error)
    }
}

getStockBySymbol = async (symbol) => {
    try{
        let query = 'SELECT * FROM stocks WHERE symbol= $1'
        const stock = await db.one(query, [symbol])
        return stock
    }catch(error){
        console.log('err', error)
    }
}

getStocksByUserId = async (stockId) =>{
    try{
        let query = 'SELECT * FROM user_stocks INNER JOIN stocks ON stocks.id = user_stocks.stock_id WHERE user_stocks.user_id = $1'
        const stocks = await db.any(query,[stockId])
        return stocks
    }catch(error){
        console.log('err',error)
    }
}
module.exports = {
    getAllStocks,
    getStockBySymbol,
    getStocksByUserId
}
var express = require('express');
var router = express.Router();
const Stocks = require('../Models/Stocks')

router.get('/', (req,res,next) => {
    res.send('Stonks rt refer to the readme on how to navigate rts')
})

router.get('/all', async (req, res, next) =>{
    try{
        const stocks = await Stocks.getAllStocks()
        res.json({
           payload: stocks,
           msg:'Success. Info retrieved',
           err: false
        })
    }catch(error){
        console.log('err',error)
        res.json({
            msg: 'Req failed. Could not get info',
            err: true
        })
    }
})

module.exports = router
var express = require('express');
var router = express.Router();

router.get('/', (req,res,next) => {
    res.send('Followers rt refer to the readme on how to navigate rts')
})



module.exports = router 
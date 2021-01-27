var express = require('express');
const Followers = require('../models/Followers');
var router = express.Router();

router.get('/', (req,res,next) => {
    res.send('Followers rt refer to the readme on how to navigate rts')
})

router.get('/follower/:id', async (req,res,next) => {
    const {id} = req.params
    try{
        const followingById = await Followers.getFollowingByUserId(id)
        res.json({
            payload: followingById,
            msg: 'Success. Request retrieved',
            err: false
        })
    }catch(error){
        console.log('err',error)
        res.json({
            msg:'Error. Info couldnt be fetched',
            err: true
        })
    }
})

module.exports = router 
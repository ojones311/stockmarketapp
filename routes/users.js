var express = require('express');
var router = express.Router();
const Users = require('../Models/Users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Get all users 
router.get('/all', async (req,res,next) => {
  try{
    const users = await Users.getAllUsers()
    res.json({
      payload: users,
      msg:'Fetching all users',
      err: false,
    })
  }catch(error){
    console.log('err',error)
    res.json({
      msg:'Error users could not be fetched',
      err: true,
    })
  }
})

module.exports = router;

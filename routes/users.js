var express = require('express');
var router = express.Router();
const Users = require('../Models/Users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Get all users 
router.get('/all', async (req, res, next) => {
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

//Get user by id
router.get('/id/:id', async (req,res,next) =>{
  const {id} = req.params
  try{
    const userById = await Users.getUserById(id)
    res.json({
      payload: userById,
      msg: 'Success. Retrieved data',
      err: false
    })
  }catch(error){
    console.log('err', error)
    res.json({
      msg:'Failed. Couldnt load data',
      err: true
    })
  }
})


router.post('/', async (req, res, next) => {
  const {username, email, password, avatar_url} = req.body
  try{
    let user = {
      username,
      email,
      password,
      avatar_url
    }
    const createdUser = await Users.createNewUser(user)
    res.json({
      payload: createdUser,
      msg: 'Success. Data posted',
      err: false
    })
  }catch(error){
    console.log('err', error)
    res.json({
      msg: 'Failed, Couldnt load data',
      err: true
    })
  }
})

module.exports = router;

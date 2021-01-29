var express = require('express');
const { FailedDependency } = require('http-errors');
const db = require('../db');
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

router.get(`/email/:email`, async (req,res,next) => {
  const {email} = req.params
  try{
    const userByEmail = await Users.getUserByEmail(email)
    res.json({
      payload: userByEmail,
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

//Create new user
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
      msg: 'Failed. Couldnt load data',
      err: true
    })
  }
})

//Edit user info
router.patch('/edit/:id', async (req,res,next)=> {
  const {username, email, avatar_url} = req.body
  const {id} = req.params
  try{
    let user = {
      username,
      email,
      avatar_url,
      id
    }
    if(!user.avatar_url){
      user.avatar_url = ''
    }
    const editedUser = await Users.editUserInfo(user)
    res.json({
      payload: editedUser,
      msg: 'Success. Editing user info',
      err: false
    })

  }catch(error){
    console.log('err',error)
    res.json({
      msg: 'Failed. Couldnt edit assets',
      err: true
    })
  }
})

//Delete user with soft delete
router.patch('/delete/:id', async (req,res,next) => {
  const {id} = req.params
  try{
    const deletedUser = await Users.deleteUser(id)
    res.json({
      payload: deletedUser,
      msg: 'Success. User deleted',
      err: false
    })
  }catch(error){
    console.log('err', error)
    res.json({
      msg: 'Failed. Couldnt edit asset',
      err: true
    })
  }
})

module.exports = router;

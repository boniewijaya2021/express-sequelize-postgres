const express = require('express');

 const {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    loginUser
 } = require('../controller/UserCtrl')
 
 // Init express router
const userroute = express.Router();

userroute.get('/users', getUser);
userroute.get('/users/:id', getUserById);
userroute.put('/users/:id', updateUser);
userroute.delete('/users/:id', deleteUser);
//dibedakan untuk auth
userroute.post('/register', createUser);
userroute.post('/login', loginUser);
 
module.exports = userroute;
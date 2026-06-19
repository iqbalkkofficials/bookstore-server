const express = require("express")
const userController = require('../controllers/userController')

const router = new express.Router()

// global
// register

router.post('/register',userController.register)

//login
router.post('/login',userController.login)

//googLogin
router.post('/google-login',userController.googleLogin)

// Authorised Routes


module.exports = router
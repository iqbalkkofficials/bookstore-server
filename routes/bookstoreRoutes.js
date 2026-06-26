const express = require("express")
const userController = require('../controllers/userController')
const authenticationMiddleware = require("../middlewares/authenticationMiddleware")
const multerMiddleware = require("../middlewares/multerMiddleware")

const router = new express.Router()

// global
// register

router.post('/register',userController.register)

//login
router.post('/login',userController.login)

//googLogin
router.post('/google-login',userController.googleLogin)

// Authorised Routes
// user edit
router.put('/users/:id',authenticationMiddleware,multerMiddleware.single('picture'),userController.userProfileUpdate)

module.exports = router
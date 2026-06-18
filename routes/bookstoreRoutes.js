const express = require("express")
const userController = require('../controllers/userController')

const router = new express.Router()

// global
// register

router.post('/register',userController.register)

// Authorised Routes


module.exports = router
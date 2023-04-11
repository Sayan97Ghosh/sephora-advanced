const express = require('express')
const passport = require('passport')
const { userSignup, userLogin } = require('../controllers/user.controller')
// <--- we will check after the confirmation ---> last date : - 11-04-2023

// const { passportAuthSuccessMiddleware } = require('../middlewares/passportAuth.middleware')

// <--- we will check after the confirmation ---> last date : - 11-04-2023

const { authMiddleWare } = require('../middlewares/auth.middleware')



const userRoutes = express.Router()

userRoutes.post('/signup', userSignup)

userRoutes.post('/login', userLogin)

// <--- we will check after the confirmation ---> last update date : - 11-04-2023


// userRoutes.get('/google' , 
// passport.authenticate('google', { scope: ['profile', 'email'] , prompt: 'select_account' })
// )

// userRoutes.get("/google/callback" , passportAuthSuccessMiddleware(passport) , googleAuthCallback)

// userRoutes.get('/user-detail' , authMiddleWare , getUserDetail)

// <--- we will check after the confirmation ---> last update date : - 11-04-2023


module.exports = { userRoutes }

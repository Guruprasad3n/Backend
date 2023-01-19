const { Router } = require('express')
const { signupUser, loginUser } = require('../controllers/userController')
// const { protect } = require('../middlewares/authMiddleware')

const userRoute = Router()


userRoute.post('/signup' , signupUser)
userRoute.post('/login' , loginUser)


module.exports = { userRoute }
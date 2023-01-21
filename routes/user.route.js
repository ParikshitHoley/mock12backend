const express = require("express")
const { login, signUp } = require("../controllers/user.controller")
const loginRouter = express.Router()

const userRouter = express.Router()

// for login
userRouter.post("/login", login)

// for signup
userRouter.post("/signup", signUp)

module.exports = {
    userRouter
}
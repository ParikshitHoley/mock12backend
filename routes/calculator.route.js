const express = require("express")
const { postData } = require("../controllers/calculator.controller")



const calculatorRouter = express.Router()

// for post data
calculatorRouter.post("/calculate", postData)


module.exports = {
    calculatorRouter
}
const  mongoose = require("mongoose");

const CalculatorSchema = new mongoose.Schema({
   
    amount: { type: String, required: true },
    rate: { type: String, required: true },
    year: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
   
}, {
       versionKey: false,
    timestamps: true
})




const Calculator = mongoose.model("calculator", CalculatorSchema)

module.exports = {
    Calculator
}
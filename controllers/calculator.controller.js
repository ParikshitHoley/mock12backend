const { Calculator } = require("../models/calculator.model");



// postData
exports.postData = async (req, res, next) => {
  
    let { yearlyInvestment, time, rate } = req.body
    //   console.log(yearlyInvestment,time,rate);
    rate = rate / 100
  
  try {
    //   let Maturity = yearlyInvestment * [((1 + rate) ** time - 1) / rate];
      Maturity = yearlyInvestment * (((1 + rate) ** time) - 1) / rate
      console.log(Maturity);

    Investment = yearlyInvestment * time;

    Gained = Maturity - Investment;

  
    return res.status(200).send({Investment,Gained,Maturity});
  } catch (err)
  {
    return res.status(500).send(err);
  }
}
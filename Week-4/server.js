const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.get("/sum",(req,res)=>{
    let num1 = req.query.a
    let num2 = req.query.b
    let result = parseInt(num1)+parseInt(num2)

    res.send(`${result}`) //can use result.toString() as well 
})

app.get("/interest",(req,res)=>{
    let principal = req.query.principal
    let rate = req.query.rate
    let time = req.query.time

    let interest = (parseInt(principal)*parseInt(rate)*parseInt(time))/100;
    let total = parseInt(principal) + interest
    res.json({
        total : total,
        interest : interest,
    })
})

app.listen(3000)